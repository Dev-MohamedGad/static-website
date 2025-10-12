import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 

  return (
    <section className="h-2/3  ">
      {/* Animated Background Image with Logo */}
      <div className="absolute inset-0 w-full h-3/4 overflow-hidden">
        <div 
          className="absolute inset-0 w-full  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/law022.jpg)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            animation: 'kenBurns 20s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* Content - Perfect Center */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo - Center */}
          <motion.div 
            className="mb-1 flex justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut"
            }}
          >
            <img
              src="/logo-law.png"
              alt="Shehab Law Firm Logo"
              className="w-48 h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.8)) drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
              }}
            />
          </motion.div>

          {/* Main Title - RTL Support */}
          <motion.h1 
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center ${isRTL ? 'tracking-normal' : 'tracking-widest uppercase'}`}
            style={{
              fontFamily: isRTL ? '"Amiri", "Times New Roman", serif' : '"Cinzel", "Times New Roman", serif',
              color: '#898A35',
              letterSpacing: isRTL ? '0.05em' : '0.2em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              fontWeight: '600',
              direction: isRTL ? 'rtl' : 'ltr'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {t('hero.title.primary')}
          </motion.h1>
          
          {/* Subtitle - RTL Support */}
          <motion.p 
            className={`text-white text-lg md:text-xl lg:text-2xl font-medium text-center m-6 ${isRTL ? 'tracking-normal' : 'tracking-wide'}`}
             style={{
               fontFamily: isRTL ? '"Amiri", "Times New Roman", serif' : '"Cinzel Decorative", "Cinzel", "Times New Roman", serif',
               letterSpacing: isRTL ? '0.05em' : '0.15em',
               textShadow: '0 2px 4px rgba(255,255,255,0.8), 0 1px 2px rgba(255,255,255,0.6), 0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
               fontWeight: '400',
               fontStyle: isRTL ? 'normal' : 'italic',
               direction: isRTL ? 'rtl' : 'ltr'
             }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 2,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Scroll Down Indicator - Framer Motion */}
      <motion.div 
        className="abolute  left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <motion.div 
          className="flex flex-col items-center space-y-3"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span 
            className="text-white text-xs   font-light tracking-widest uppercase opacity-70"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {t('hero.scrollDown')}
          </motion.span>
          <motion.div className="relative">
            <motion.div 
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
              animate={{ 
                borderColor: ["rgba(255,255,255,0.5)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.5)"],
                boxShadow: ["0 0 0 0 rgba(255,255,255,0.3)", "0 0 20px 5px rgba(255,255,255,0.2)", "0 0 0 0 rgba(255,255,255,0.3)"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 8, 0], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              animate={{ 
                scale: [0, 1, 2], 
                opacity: [1, 0.5, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;