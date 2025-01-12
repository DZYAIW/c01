import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import SettingsPanel from '../components/SettingsPanel';

export default function Home() {
  return (
    <>
      {/* 左侧边栏 - 聊天历史 */}
      <Sidebar className="w-64 border-r border-gray-200 dark:border-gray-800" />
      
      {/* 中间聊天区域 */}
      <ChatArea className="flex-1 bg-white dark:bg-gray-800" />
      
      {/* 右侧设置面板 */}
      <SettingsPanel className="w-64 border-l border-gray-200 dark:border-gray-800" />
    </>
  );
} 