import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Your actual logo image */}
        <img
          src="/logo.png"
          alt="Shehab Law Firm Logo"
          className="w-16 h-12 object-contain"
          style={{ filter: 'none' }}
        />
      </div>

    </div>
  );
};

export default Logo;