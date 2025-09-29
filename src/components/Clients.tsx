import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const clients = [
    { name: 'Global Corp', logo: 'GC' },
    { name: 'Tech Solutions', logo: 'TS' },
    { name: 'Financial Partners', logo: 'FP' },
    { name: 'Real Estate Group', logo: 'REG' },
    { name: 'Manufacturing Co', logo: 'MC' },
    { name: 'Healthcare Systems', logo: 'HS' },
    { name: 'Energy Solutions', logo: 'ES' },
    { name: 'Retail Network', logo: 'RN' },
    { name: 'Investment Fund', logo: 'IF' },
    { name: 'Construction Ltd', logo: 'CL' },
    { name: 'Media Group', logo: 'MG' },
    { name: 'Transport Co', logo: 'TC' }
  ];

  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      author: t('testimonials.author1'),
      position: t('testimonials.position1'),
      avatar: "DR"
    },
    {
      quote: t('testimonials.quote2'),
      author: t('testimonials.author2'),
      position: t('testimonials.position2'),
      avatar: "SJ"
    },
    {
      quote: t('testimonials.quote3'),
      author: t('testimonials.author3'),
      position: t('testimonials.position3'),
      avatar: "MC"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Logo Background - Center */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/logo-law.png" 
          alt="Shehab Law Firm Logo Background" 
          className="w-full h-full object-contain filter blur-none"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            {/* Logo Section */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-brand-200">
                <img
                  src="/logo-law.png"
                  alt="Shehab Law Firm Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              {t('testimonials.title')}
            </h3>
            <p className="text-lg text-gray-600">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-600/20"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-brand-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-serif">
              {t('cta.joinClients')}
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('cta.joinClientsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {t('clients.cta.become')}
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {t('clients.cta.studies')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;