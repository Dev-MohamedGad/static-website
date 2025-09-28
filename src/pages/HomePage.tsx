import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Statistics from '../components/Statistics';
import Clients from '../components/Clients';
import News from '../components/News';
import Contact from '../components/Contact';
import GoogleMap from '../components/GoogleMap';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Company Profile Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Logo Background - Off Center Right */}
        <div className="absolute top-1/2 left-3/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {t('about.profile.aboutTitle')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-2xl p-8">
                <h3 className={`text-2xl font-bold text-gray-900 mb-6 font-serif ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.profile.title')}
                </h3>
                <div className={`space-y-6 text-gray-700 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <p>{t('about.profile.p1')}</p>
                  <p>{t('about.profile.p2')}</p>
                  <p>{t('about.profile.p3')}</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h4 className={`text-xl font-bold text-gray-900 mb-4 font-serif ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.mission.title')}
                </h4>
                <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.mission.body')}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h4 className={`text-xl font-bold text-gray-900 mb-4 font-serif ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.vision.title')}
                </h4>
                <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.vision.body')}
                </p>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
              {t('about.services.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.corporate.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.corporate.desc')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.mna.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.mna.desc')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.litigation.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.litigation.desc')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.ip.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.ip.desc')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.employment.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.employment.desc')}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.realestate.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.realestate.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Logo Background - Off Center Left */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Logo Section */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-brand-200">
                <img
                  src="/logo-law.png"
                  alt="Shehab Law Firm Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {t('office.main')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.visitOffices')}
            </p>
          </div>
          <GoogleMap height="400px" className="max-w-4xl mx-auto" />
        </div>
      </div>
      <Expertise />
      <Statistics />
      <Clients />
      <News />
      <Contact />
    </div>
  );
};

export default HomePage;