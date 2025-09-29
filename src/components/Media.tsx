import React, { useState } from 'react';
import { Calendar, Eye, DirectionalArrow, ImageIcon, Play, Star, Download, Mail } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const Media: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('news');

  const featuredArticle = {
    title: t('media.article1.title'),
    description: t('media.article1.desc'),
    category: t('media.article1.category'),
    author: t('media.article1.author'),
    views: t('media.article1.readTime'),
    date: '2024-01-20',
    isFeatured: true
  };

  const articles = [
    {
      id: 2,
      title: t('media.article2.title'),
      description: t('media.article2.desc'),
      category: t('media.article2.category'),
      author: t('media.article2.author'),
      views: t('media.article2.readTime'),
      date: '2024-01-15',
      button: t('media.article2.button')
    },
    {
      id: 3,
      title: t('media.article3.title'),
      description: t('media.article3.desc'),
      category: t('media.article3.category'),
      author: t('media.article3.author'),
      views: t('media.article3.readTime'),
      date: '2024-01-12',
      button: t('media.article3.button')
    },
    {
      id: 4,
      title: t('media.article4.title'),
      description: t('media.article4.desc'),
      category: t('media.article4.category'),
      author: t('media.article4.author'),
      views: t('media.article4.readTime'),
      date: '2024-01-08',
      button: t('media.article4.button')
    },
    {
      id: 5,
      title: t('media.article5.title'),
      description: t('media.article5.desc'),
      category: t('media.article5.category'),
      author: t('media.article5.author'),
      views: t('media.article5.readTime'),
      date: '2024-01-05',
      button: t('media.article5.button')
    },
    {
      id: 6,
      title: t('media.article6.title'),
      description: t('media.article6.desc'),
      category: t('media.article6.category'),
      author: t('media.article6.author'),
      views: t('media.article6.readTime'),
      date: '2024-01-02',
      button: t('media.article6.button')
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const tabs = [
    { id: 'news', label: t('media.newsHighlights'), icon: Calendar },
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

        {/* Featured Article */}
        {activeTab === 'news' && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500 rounded-full translate-y-24 -translate-x-24"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-full">
                    {t('media.featured')}
                  </span>
                  <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                  {featuredArticle.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    {formatDate(featuredArticle.date)}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Eye className="w-5 h-5 mr-2" />
                    {featuredArticle.views}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-sm">By {featuredArticle.author}</span>
                  </div>
                </div>
                
                <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                  {t('media.article1.button')}
                  <DirectionalArrow isRTL={isRTL} className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Recent News */}
        {activeTab === 'news' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
              {t('media.recentNews')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  {/* Article Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-brand-100 text-brand-800 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {article.author}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Article Meta */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                    </div>

                    <button className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      {article.button}
                      <DirectionalArrow isRTL={isRTL} className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* Media Inquiries */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              {t('media.mediaInquiries')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('media.mediaInquiriesDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                {t('media.contactMediaTeam')}
              </button>
              <button className="border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
                <Download className="w-5 h-5 mr-2" />
                {t('media.downloadPressKit')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
