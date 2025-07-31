'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/constants/navigation';
import Image from 'next/image';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false, onToggle }) => {
  const pathname = usePathname();

  return (
    <div className={`transition-all duration-300 h-screen shadow-md ${isCollapsed ? 'w-16' : 'w-64'} bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200`}>
      <div className="p-4">
        <h2 className={`flex items-center p-2 text-xl font-bold text-gray-800 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          <Image src='/fc.png' blurDataURL="/fc-blur.png" width={40} height={40} placeholder='blur' alt='Logo'/>
          <span>Flashcashier</span>
        </h2>
      </div>

      <nav className="space-y-2 p-2 mt-3">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <a key={index} href={item.href}
              className={`flex items-center gap-x-2 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 border border-transparent
                ${isActive
                  ? 'bg-white shadow-sm border-gray-100 text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
                }`}
            >
              <span className={`text-lg ${isActive ? 'text-orange-500' : 'text-orange-400'}`}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="text-sm">{item.label}</span>
              )}
            </a>
          );
        })}
      </nav>

      {onToggle && (
        <button onClick={onToggle} className="absolute bottom-4 left-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-200">
          <svg className={`w-5 h-5 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
