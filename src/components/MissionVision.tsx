import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MissionVision: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{t('about.mission.title')}</h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{t('about.mission.body')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{t('about.vision.title')}</h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{t('about.vision.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;


