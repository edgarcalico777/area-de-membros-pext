import React from 'react';
import { Home, Play, BookOpen, Settings } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Principal', icon: Home },
    { id: 'continue', label: 'Continuar', icon: Play },
    { id: 'more', label: 'Mais', icon: BookOpen },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 safe-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-[70px] ${
                isActive 
                  ? 'bg-pink-100 text-[#ff009d] transform scale-105' 
                  : 'text-gray-500 hover:text-[#ff009d] hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? 'animate-pulse' : ''}`} />
              <span className="text-xs font-medium truncate w-full text-center">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;