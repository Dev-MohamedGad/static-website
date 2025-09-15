import React from 'react';
import { Scale } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center shadow-lg">
          <Scale className="w-7 h-7 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-slate-800 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold text-slate-800 leading-tight">
          Shehab & El Awamy
        </div>
        <div className="text-sm font-medium text-gray-600 -mt-1">
          Law Firm
        </div>
      </div>
    </div>
  );
};

export default Logo;