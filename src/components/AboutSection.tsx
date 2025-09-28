import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale, Users, Award, Target } from '../icons';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Scale,
      value: t('about.section.experience'),
      label: language === 'ar' ? 'سنوات من التميز' : 'Years of Excellence'
    },
    {
      icon: Users,
      value: t('about.section.clients'),
      label: language === 'ar' ? 'عملاء راضون' : 'Satisfied Clients'
    },
    {
      icon: Award,
      value: t('about.section.cases'),
      label: language === 'ar' ? 'قضايا ناجحة' : 'Successful Cases'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t('about.section.title')}
          </h2>
          <p className="text-xl text-brand-600 font-medium mb-4">
            {t('about.section.subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.section.description')}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center group ${language === 'ar' ? 'rtl' : 'ltr'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4 group-hover:bg-brand-200 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-brand-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-brand-100">
          <div className={`text-center mb-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('about.section.commitment')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.section.commitment.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
