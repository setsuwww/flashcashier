import React from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center rounded-t-xl border-y-1 border-gray-300">
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Cashier
        </span>
      </div>
      {onLogout && (
        <button onClick={onLogout} className="flex items-center gap-2 text-red-400 hover:text-red-700 transition-colors duration-200">
          <FaSignOutAlt />
          <span className="text-sm font-medium">Logout</span>
        </button>
      )}
    </header>
  );
};

export default Header;