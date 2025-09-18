import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServicesOverview: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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


