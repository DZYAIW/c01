'use client';

import { useState } from 'react';

export default function Sidebar({ className }: { className?: string }) {
  
  const [chats] = useState([]);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* 顶部标题区域 */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold">聊天记录D1</h2>
      </div>

      {/* 新建聊天按钮 */}
      <div className="p-4">
        <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          新建聊天
        </button>
      </div>

      {/* 聊天列表 */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-2">
          {chats.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-4">
              暂无聊天记录
            </div>
          ) : (
            // 这里将渲染聊天列表
            null
          )}
        </div>
      </div>
    </div>
  );
} 