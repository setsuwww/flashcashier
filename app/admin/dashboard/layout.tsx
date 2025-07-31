"use client"

import React, { useState } from 'react';
import Sidebar from '../AdminSidebar';
import Header from '../AdminHeader';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = () => {
    console.log('Logged out');
  };

  return (
    <div className="flex h-screen border-l-1 border-gray-300">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleToggleSidebar} />
      <div className="flex-1 flex flex-col p-4 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200">
        <Header onLogout={handleLogout} />
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 overflow-auto">
          <div className="p-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

