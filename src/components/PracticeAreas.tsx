import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PracticeAreas: React.FC = () => {
  const { t, language } = useLanguage();

  const items = [
    t('about.practices.list.1'),
    t('about.practices.list.2'),
    t('about.practices.list.3'),
    t('about.practices.list.4'),
    t('about.practices.list.5'),
    t('about.practices.list.6'),
    t('about.practices.list.7'),
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Logo Background - Off Center Left */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/logo-law.png" 
          alt="Shehab Law Firm Logo Background" 
          className="w-full h-full object-contain filter blur-none"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">{t('about.practices.title')}</h3>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {items.map((label, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-lg font-semibold text-gray-900">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;


