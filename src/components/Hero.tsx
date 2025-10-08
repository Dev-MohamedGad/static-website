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
    <section className="min-h-screen">
      {/* Animated Background Image with Logo */}
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/finalCairo.4e840ba2.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            animation: 'kenBurns 20s ease-in-out infinite alternate'
          }}
        />
      
        {/* Dark brown overlay to match logo background */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(101, 67, 33, 0.8)' }}></div>
      </div>

      {/* Content - Perfect Center */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo Mark - Classical Architectural Design */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut"
            }}
          >
            {/* S and F with Classical Columns - Always LTR */}
            <div className="flex items-center justify-center space-x-4 mb-6" style={{ direction: 'ltr' }}>
              {/* Letter S with Column */}
              <motion.div 
                className="relative"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div 
                  className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold"
                  style={{
                    fontFamily: '"Playfair Display"',
                    color: '#898A35',
                    textShadow: '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
                  }}
                >
                  S
                </div>
                {/* Column decoration */}
                <div 
                  className="absolute -right-2 top-2 w-1 h-16 rounded-sm"
                  style={{ 
                    backgroundColor: '#2D2D2D',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.1)'
                  }}
                ></div>
              </motion.div>

              {/* Central Columns */}
              <motion.div 
                className="flex flex-col space-y-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div 
                  className="w-4 h-20 rounded-lg"
                  style={{ 
                    backgroundColor: '#1A1A1A',
                    boxShadow: `
                      0 8px 16px rgba(0,0,0,0.8),
                      0 4px 8px rgba(0,0,0,0.6),
                      inset 0 2px 4px rgba(255,255,255,0.15),
                      inset 0 -1px 2px rgba(0,0,0,0.8)
                    `,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                ></div>
                <div 
                  className="w-4 h-20 rounded-lg"
                  style={{ 
                    backgroundColor: '#1A1A1A',
                    boxShadow: `
                      0 8px 16px rgba(0,0,0,0.8),
                      0 4px 8px rgba(0,0,0,0.6),
                      inset 0 2px 4px rgba(255,255,255,0.15),
                      inset 0 -1px 2px rgba(0,0,0,0.8)
                    `,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                ></div>
              </motion.div>

              {/* Letter F with Column */}
              <motion.div 
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div 
                  className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold"
                  style={{
                    fontFamily: '"Playfair Display"',
                    color: '#898A35',
                    textShadow: '0 8px 16px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
                  }}
                >
                  F
                </div>
                {/* Column decoration */}
                <div 
                  className="absolute -left-2 top-2 w-1 h-16 rounded-sm"
                  style={{ 
                    backgroundColor: '#2D2D2D',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.1)'
                  }}
                ></div>
              </motion.div>
            </div>
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
            className={`text-black text-lg md:text-xl lg:text-2xl font-medium text-center mt-6 ${isRTL ? 'tracking-normal' : 'tracking-wide'}`}
            style={{
              fontFamily: isRTL ? '"Amiri", "Times New Roman", serif' : '"Cinzel Decorative", "Cinzel", "Times New Roman", serif',
              letterSpacing: isRTL ? '0.05em' : '0.15em',
              textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)',
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
            className="text-white text-xs font-light tracking-widest uppercase opacity-70"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll Down
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