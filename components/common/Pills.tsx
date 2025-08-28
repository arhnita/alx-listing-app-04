import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border ${
        isActive
          ? 'bg-gray-900 text-white border-gray-900'
          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;