import React, { useState } from 'react';
import { ImageIcon, Play, Star, Download, Mail } from '../icons';
import { useLanguage } from '../context/LanguageContext';

interface MediaProps {
  setCurrentPage?: (page: string) => void;
}

const Media: React.FC<MediaProps> = ({ setCurrentPage }) => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('photos');




  const tabs = [
    { id: 'photos', label: t('media.photos'), icon: ImageIcon },
    { id: 'videos', label: t('media.videos'), icon: Play }
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t('media.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('media.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>



        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('media.photos')}</h3>
            <p className="text-gray-600">{t('page.photoGalleryComingSoon')}</p>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="text-center py-20">
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('media.videos')}</h3>
            <p className="text-gray-600">{t('page.videoContentComingSoon')}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Media;
