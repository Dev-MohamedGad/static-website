import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Statistics: React.FC = () => {
  const { t } = useLanguage();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter: React.FC<{ target: number; duration: number; suffix?: string }> = ({ 
    target, 
    duration, 
    suffix = '' 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [inView, target, duration]);

    return <span>{count}{suffix}</span>;
  };

  const stats = [
    {
      number: 25,
      suffix: '+',
      label: t('stats.years'),
      description: t('track.services')
    },
    {
      number: 1500,
      suffix: '+',
      label: t('stats.contracts'),
      description: t('track.negotiations')
    },
    {
      number: 500,
      suffix: '+',
      label: t('stats.cases'),
      description: t('track.outcomes')
    },
    {
      number: 1200,
      suffix: '+',
      label: t('stats.clients'),
      description: t('track.clients')
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Logo Background - Center */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/logo-law.png" 
          alt="Shehab Law Firm Logo Background" 
          className="w-full h-full object-contain filter blur-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20">
              <img
                src="/logo-law.png"
                alt="Shehab Law Firm Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            {t('track.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('track.subtitle')}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-500 mb-4">
                  <AnimatedCounter 
                    target={stat.number} 
                    duration={2000} 
                    suffix={stat.suffix}
                  />
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-brand-600/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-600/5 rounded-full blur-2xl animate-pulse delay-700"></div>
    </section>
  );
};

export default Statistics;