import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Logo: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  return (
      <div className={`fixed ${isRTL ? 'right-0' : 'left-0'} top-0   bg-transparent `}>
        <img
          src="/logo-law.png"
          alt={t('common.logoAlt')}
          className="w-40 h-20 object-contain transition-all duration-300 hover:scale-105"
        />
      </div>
  );
};

export default Logo;