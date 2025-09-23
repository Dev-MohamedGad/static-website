import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center space-x-3">
      <div className="relative p-2 rounded-xl bg-gradient-to-br from-brand-50/50 to-gray-100/50 backdrop-blur-sm">
        {/* Your actual logo image */}
        <img
          src="/logo-law.png"
          alt={t('common.logoAlt')}
          className="w-20 h-16 object-contain transition-all duration-300 hover:scale-105"
          style={{ filter: 'brightness(0.9) contrast(1.05) saturate(1.1)' }}
        />
      </div>
    </div>
  );
};

export default Logo;