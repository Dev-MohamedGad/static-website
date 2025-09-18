import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('about-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 via-transparent to-accent-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent font-serif">
                {t('hero.title.primary')}
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-gray-100">
                {t('hero.title.secondary')}
              </span>
            </h1>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToContent}
              className="group relative overflow-hidden bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-500/25 flex items-center"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative text-white border-2 border-white/20 hover:border-brand-400 backdrop-blur-sm bg-white/5 hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              {t('hero.cta.secondary')}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '25+', label: t('hero.stats.years'), color: 'from-brand-400 to-brand-600' },
              { number: '500+', label: t('hero.stats.cases'), color: 'from-accent-400 to-accent-600' },
              { number: '1000+', label: t('hero.stats.clients'), color: 'from-success-400 to-success-600' },
              { number: '98%', label: t('hero.stats.success'), color: 'from-warning-400 to-warning-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
      >
        <div className="relative flex flex-col items-center">
          <div className="text-xs text-gray-300 mb-2 opacity-75 group-hover:opacity-100 transition-opacity">
            {t('common.scrollDown')}
          </div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;