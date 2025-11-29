import React from 'react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-t-xl border-y-1 border-gray-300">
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-2xl text-gray-600"/>
        <span className="font-medium text-gray-900">
          Cashier
        </span>
      </div>
      {onLogout && (
        <div className="flex items-center space-x-2">
        <div className="bg-gray-100 p-2 text-gray-500 hover:text-gray-600 rounded-lg">
          <ShoppingCart size={20} />
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-500 rounded-lg hover:text-red-600 transition-colors">
          <FaSignOutAlt />
          <span className="text-sm font-medium">Logout</span>
        </button>
        </div>
      )}
    </header>
  );
};

export default Header;