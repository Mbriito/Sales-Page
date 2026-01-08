
import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <span className="group relative inline-flex items-center cursor-help">
      {children}
      <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-56 p-3 bg-gray-900 text-white text-xs font-normal rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] text-center leading-relaxed backdrop-blur-sm bg-opacity-95 transform translate-y-2 group-hover:translate-y-0">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-gray-900"></span>
      </span>
    </span>
  );
};
