import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Contact from '../components/Contact';
import GoogleMap from '../components/GoogleMap';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5); // 5 cards total
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Scroll animation logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    // Observe all sections with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Company Profile Section */}
      <section className="py-20 relative overflow-hidden animate-on-scroll">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg" 
            alt="Legal Office Background" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/75"></div>
        </div>
        
        {/* Subtle background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {t('about.profile.aboutTitle')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Company Profile Slider */}
          <div className="relative mb-16 flex justify-center">
            {/* Slider Container */}
            <div 
              ref={sliderRef}
              className="relative overflow-hidden rounded-3xl max-w-4xl w-full h-[600px]"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div 
                className="flex transition-all duration-1000 ease-in-out"
                style={{ 
                  transform: language === 'ar' 
                    ? `translateX(${currentSlide * 100}%)` 
                    : `translateX(-${currentSlide * 100}%)` 
                }}
              >
                {/* Mission Card */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 animate-on-scroll border border-blue-100 h-[600px] flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src="/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg" 
                        alt="Our Mission" 
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                    
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif text-center">
                      {t('about.mission.title')}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('about.mission.body')}
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="group bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 animate-on-scroll border border-green-100 h-[600px] flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src="/writer.webp" 
                        alt="Our Vision" 
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif text-center">
                      {t('about.vision.title')}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('about.vision.body')}
                    </p>
                  </div>
                </div>

                {/* Values Card */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="group bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 animate-on-scroll border border-purple-100 h-[600px] flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src="/group.webp" 
                        alt="Our Values" 
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                     
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif text-center">
                      {t('about.values.title')}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('about.values.body')}
                    </p>
                  </div>
                </div>

                {/* Services Card */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll border border-orange-100 h-[600px] flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src="/finalCairo.4e840ba2.jpg" 
                        alt="Our Services" 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif text-center">
                      {t('services.title')}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('about.profile.p3')}
                    </p>
                  </div>
                </div>

                {/* Company Profile Card */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="group bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll border border-teal-100 h-[600px] flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src="/original.jpeg" 
                        alt="Company Profile" 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent"></div>
                   
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif text-center">
                      {t('about.profile.title')}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed mb-4 text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      {t('about.profile.p1')}
                    </p>
                    <div className={`grid grid-cols-2 gap-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.sports')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.construction')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.energy')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.banking')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.oilgas')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.heavy')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.hospitals')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.it')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.communications')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.pharmaceuticals')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.media')}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} mb-2`}>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{t('slider.sectors.transportation')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Navigation Arrows - Enhanced with animations */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + 5) % 5)}
              className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full shadow-xl flex items-center justify-center hover:from-brand-600 hover:to-brand-700 hover:scale-110 hover:shadow-2xl transition-all duration-500 z-10 group animate-pulse ${
                language === 'ar' ? '-right-5 lg:-right-5' : '-left-5 lg:-left-5'
              }`}
            >
              <svg className={`w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-125 transition-all duration-300 ${
                language === 'ar' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={language === 'ar' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % 5)}
              className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full shadow-xl flex items-center justify-center hover:from-brand-600 hover:to-brand-700 hover:scale-110 hover:shadow-2xl transition-all duration-500 z-10 group animate-pulse ${
                language === 'ar' ? '-left-5 lg:-left-5' : '-right-5 lg:-right-5'
              }`}
            >
              <svg className={`w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-125 transition-all duration-300 ${
                language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={language === 'ar' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
              </svg>
            </button>

          </div>

          {/* Services Overview */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
              {t('about.services.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.corporate.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.corporate.desc')}
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.mna.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.mna.desc')}
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.litigation.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.litigation.desc')}
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.ip.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.ip.desc')}
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.employment.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.employment.desc')}
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.realestate.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.realestate.desc')}
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 animate-on-scroll transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-bold text-gray-900 mb-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.trademarks.title')}
                </h4>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('about.services.trademarks.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-gray-100 relative overflow-hidden animate-on-scroll">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
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
          <div className="animate-on-scroll">
            <GoogleMap height="400px" className="max-w-4xl mx-auto" />
          </div>
        </div>
      </div>
      <div className="animate-on-scroll">
        <Statistics />
      </div>
      <div className="animate-on-scroll">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;