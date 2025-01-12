/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // 或者 'class' 如果你想要手动控制暗色模式
  theme: {
    extend: {
      colors: {
        // 可以在这里添加自定义颜色
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 