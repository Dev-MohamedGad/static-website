import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServicesOverview: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Logo Background - Center */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/logo-law.png" 
          alt="Shehab Law Firm Logo Background" 
          className="w-full h-full object-contain filter blur-none"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">{t('about.services.title')}</h3>
        </div>
        <div className={`space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <p>{t('about.services.p1')}</p>
          <p>{t('about.services.p2')}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;


