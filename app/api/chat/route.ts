import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!process.env.DASHSCOPE_API_KEY) {
    console.error('API key is missing');
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    const { messages } = await request.json();
    console.log('Sending request with messages:', messages);

    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DASHSCOPE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "qwen-plus",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Response Error:', {
        status: response.status,
        statusText: response.statusText,
        data: errorData
      });
      throw new Error(`API request failed: ${response.status} ${response.statusText}\n${errorData}`);
    }

    const completion = await response.json();
    console.log('API Response:', completion);
    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.error('Detailed Error:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        error: '处理请求时发生错误',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 