import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CompanyProfile: React.FC = () => {
  const { t, language } = useLanguage();

  const paragraphs = [
    t('about.profile.p1'),
    t('about.profile.p2'),
    t('about.profile.p3'),
    t('about.profile.p4'),
    t('about.profile.p5'),
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-brand-50 relative overflow-hidden">
      {/* Logo Background - Off Center Right */}
      <div className="absolute top-1/2 left-3/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/logo-law.png" 
          alt="Shehab Law Firm Logo Background" 
          className="w-full h-full object-contain filter blur-none"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
            <span className="bg-gradient-to-r from-brand-800 to-brand-700 bg-clip-text text-transparent">
              {t('about.profile.aboutTitle')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`space-y-8 text-brand-700 text-base sm:text-lg leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {paragraphs.map((p, idx) => (
              <div key={idx} className="group">
                <p className="group-hover:text-brand-800 transition-colors duration-300 p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md border border-brand-100/50 hover:border-brand-200/50">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;


