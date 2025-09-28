import React, { useState } from 'react';
import { Search, Calendar, Clock, Eye, DirectionalArrow, Users } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const Library: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const articles = [
    {
      id: 1,
      title: t('library.article1.title'),
      description: t('library.article1.desc'),
      category: t('library.article1.category'),
      tags: t('library.article1.tags'),
      author: t('library.article1.author'),
      date: '2024-01-20',
      readTime: t('library.article1.readTime'),
      views: t('library.article1.views'),
      type: 'blog'
    },
    {
      id: 2,
      title: t('library.article2.title'),
      description: t('library.article2.desc'),
      category: t('library.article2.category'),
      tags: t('library.article2.tags'),
      author: t('library.article2.author'),
      date: '2024-01-15',
      readTime: t('library.article2.readTime'),
      views: t('library.article2.views'),
      type: 'publication'
    },
    {
      id: 3,
      title: t('library.article3.title'),
      description: t('library.article3.desc'),
      category: t('library.article3.category'),
      tags: t('library.article3.tags'),
      author: t('library.article3.author'),
      date: '2024-01-10',
      readTime: t('library.article3.readTime'),
      views: t('library.article3.views'),
      type: 'blog'
    },
    {
      id: 4,
      title: t('library.article4.title'),
      description: t('library.article4.desc'),
      category: t('library.article4.category'),
      tags: t('library.article4.tags'),
      author: t('library.article4.author'),
      date: '2024-01-05',
      readTime: t('library.article4.readTime'),
      views: t('library.article4.views'),
      type: 'publication'
    },
    {
      id: 5,
      title: t('library.article5.title'),
      description: t('library.article5.desc'),
      category: t('library.article5.category'),
      tags: t('library.article5.tags'),
      author: t('library.article5.author'),
      date: '2024-01-02',
      readTime: t('library.article5.readTime'),
      views: t('library.article5.views'),
      type: 'blog'
    },
    {
      id: 6,
      title: t('library.article6.title'),
      description: t('library.article6.desc'),
      category: t('library.article6.category'),
      tags: t('library.article6.tags'),
      author: t('library.article6.author'),
      date: '2023-12-28',
      readTime: t('library.article6.readTime'),
      views: t('library.article6.views'),
      type: 'publication'
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

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || article.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Logo Background - Off Center Left */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
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
            {t('library.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('library.subtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('library.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {t('library.filter.all')}
            </button>
            <button
              onClick={() => setActiveFilter('blog')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'blog'
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {t('library.filter.blog')}
            </button>
            <button
              onClick={() => setActiveFilter('publication')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'publication'
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {t('library.filter.publications')}
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
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
                    {article.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Article Meta */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.split(', ').map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {t('library.by')} {article.author}
                    </span>
                  </div>
                  <button className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                    {t('library.readMore')}
                    <DirectionalArrow isRTL={isRTL} className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4 font-serif">
            {t('library.subscribe.title')}
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('library.subscribe.subtitle')}
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={t('library.subscribe.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('library.subscribe.button')}
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            {t('library.subscribe.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Library;
