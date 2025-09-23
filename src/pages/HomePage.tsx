import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Expertise from '../components/Expertise';
import Statistics from '../components/Statistics';
import Clients from '../components/Clients';
import News from '../components/News';
import Contact from '../components/Contact';
import GoogleMap from '../components/GoogleMap';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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