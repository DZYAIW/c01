'use client';

export default function SettingsPanel({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* 顶部标题区域 */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold">设置</h2>
      </div>

      {/* 设置选项 */}
      <div className="p-4 space-y-4">
        {/* AI模型选择 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            AI 模型
          </label>
          <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700">
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-3.5">GPT-3.5</option>
          </select>
        </div>

        {/* 温度设置 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            回答温度 (0-1)
          </label>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            defaultValue="0.7"
            className="w-full"
          />
        </div>

        {/* 主题切换 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            界面主题
          </label>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
              浅色
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
              深色
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 