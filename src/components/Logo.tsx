import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Your actual logo image */}
        <img
          src="/logo.png"
          alt={t('common.logoAlt')}
          className="w-16 h-12 object-contain"
          style={{ filter: 'none' }}
        />
      </div>
    </div>
  );
};

export default Logo;