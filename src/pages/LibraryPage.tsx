import React, { useState } from 'react';
import { Search, BookOpen, FileText, Download, Calendar, Eye, Tag, Filter } from '../icons';

const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'publications'>('blog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the New Data Privacy Regulations',
      excerpt: 'A comprehensive guide to compliance with updated data privacy laws and their impact on business operations.',
      content: 'In-depth analysis of recent regulatory changes...',
      author: 'Sarah Mitchell',
      date: '2024-01-20',
      readTime: '8 min read',
      views: '3.2k',
      category: 'Data Privacy',
      tags: ['Compliance', 'GDPR', 'Business Law'],
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Corporate Governance Best Practices in 2024',
      excerpt: 'Essential governance frameworks and compliance strategies for modern corporations navigating complex regulatory environments.',
      content: 'Detailed exploration of governance principles...',
      author: 'Ahmed Shehab',
      date: '2024-01-15',
      readTime: '12 min read',
      views: '2.8k',
      category: 'Corporate Law',
      tags: ['Governance', 'Compliance', 'Corporate Strategy'],
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Employment Law Changes: What HR Teams Need to Know',
      excerpt: 'Recent updates to employment legislation and practical guidance for implementing compliant HR policies.',
      content: 'Comprehensive review of employment law updates...',
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      views: '4.1k',
      category: 'Employment Law',
      tags: ['HR Policy', 'Employment Rights', 'Workplace Compliance'],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Intellectual Property Protection Strategies',
      excerpt: 'Effective approaches to safeguarding intellectual property assets in the digital economy.',
      content: 'Strategic insights into IP protection...',
      author: 'David Chen',
      date: '2024-01-05',
      readTime: '15 min read',
      views: '1.9k',
      category: 'Intellectual Property',
      tags: ['IP Strategy', 'Patent Law', 'Trademark Protection'],
      image: 'https://images.pexels.com/photos/5669607/pexels-photo-5669607.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Real Estate Investment Legal Considerations',
      excerpt: 'Key legal factors to consider when making real estate investments, from due diligence to closing.',
      content: 'Legal framework for real estate investments...',
      author: 'Jennifer Walsh',
      date: '2024-01-02',
      readTime: '9 min read',
      views: '2.3k',
      category: 'Real Estate',
      tags: ['Real Estate Investment', 'Due Diligence', 'Property Law'],
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Tax Planning Strategies for Businesses',
      excerpt: 'Effective tax planning approaches to optimize business tax obligations while maintaining compliance.',
      content: 'Business tax optimization strategies...',
      author: 'Robert Kim',
      date: '2023-12-28',
      readTime: '11 min read',
      views: '1.7k',
      category: 'Tax Law',
      tags: ['Tax Planning', 'Business Tax', 'Tax Compliance'],
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const publications = [
    {
      id: 1,
      title: 'Annual Review of Corporate Law Developments',
      description: 'Comprehensive analysis of major corporate law changes, judicial decisions, and regulatory updates from the past year.',
      type: 'Annual Report',
      pages: 85,
      date: '2024-01-01',
      downloads: '2.1k',
      category: 'Corporate Law',
      fileSize: '12.4 MB',
      authors: ['Ahmed Shehab', 'Sarah Mitchell', 'David Chen']
    },
    {
      id: 2,
      title: 'Employment Law Handbook 2024',
      description: 'Essential guide for employers covering hiring practices, workplace policies, compliance requirements, and best practices.',
      type: 'Handbook',
      pages: 156,
      date: '2023-12-15',
      downloads: '3.8k',
      category: 'Employment Law',
      fileSize: '18.7 MB',
      authors: ['Maria Rodriguez', 'Jennifer Walsh']
    },
    {
      id: 3,
      title: 'Intellectual Property Protection Guide',
      description: 'Complete guide to protecting intellectual property assets including patents, trademarks, copyrights, and trade secrets.',
      type: 'Guide',
      pages: 72,
      date: '2023-11-20',
      downloads: '1.5k',
      category: 'Intellectual Property',
      fileSize: '8.9 MB',
      authors: ['David Chen', 'Lisa Park']
    },
    {
      id: 4,
      title: 'Real Estate Transaction Best Practices',
      description: 'Detailed procedures and best practices for commercial and residential real estate transactions.',
      type: 'Best Practices',
      pages: 94,
      date: '2023-10-30',
      downloads: '1.2k',
      category: 'Real Estate',
      fileSize: '11.3 MB',
      authors: ['Jennifer Walsh', 'Michael Torres']
    },
    {
      id: 5,
      title: 'Tax Compliance Checklist 2024',
      description: 'Comprehensive checklist for business tax compliance covering federal, state, and local tax obligations.',
      type: 'Checklist',
      pages: 28,
      date: '2023-10-01',
      downloads: '4.2k',
      category: 'Tax Law',
      fileSize: '3.6 MB',
      authors: ['Robert Kim', 'Anna Singh']
    },
    {
      id: 6,
      title: 'Merger & Acquisition Legal Framework',
      description: 'Legal framework and procedures for successful merger and acquisition transactions.',
      type: 'Framework',
      pages: 118,
      date: '2023-09-15',
      downloads: '890',
      category: 'Corporate Law',
      fileSize: '15.2 MB',
      authors: ['Ahmed Shehab', 'Sarah Mitchell']
    }
  ];

  const categories = ['All', 'Corporate Law', 'Employment Law', 'Intellectual Property', 'Real Estate', 'Tax Law', 'Data Privacy'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filteredContent = (activeTab === 'blog' ? blogPosts : publications).filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Legal Library</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive collection of legal insights, research, and educational resources.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles and publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('blog')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-600 hover:text-brand-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Blog Articles ({blogPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'publications'
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-600 hover:text-brand-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Publications ({publications.length})
            </button>
          </nav>
        </div>
      </section>

      {/* Blog Articles */}
      {activeTab === 'blog' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredContent.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContent.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="inline-flex items-center text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(post.date)}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">By {post.author}</span>
                        <button className="text-brand-600 hover:text-brand-700 font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Publications */}
      {activeTab === 'publications' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredContent.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredContent.map((publication) => (
                  <div
                    key={publication.id}
                    className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                      {/* Document Icon & Info */}
                      <div className="lg:col-span-1 flex items-start space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
                        <div className="w-16 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="lg:text-center">
                          <div className="text-sm font-medium text-gray-600 mb-1">{publication.type}</div>
                          <div className="text-xs text-gray-500">{publication.pages} pages</div>
                          <div className="text-xs text-gray-500">{publication.fileSize}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-3">
                          <h2 className="text-2xl font-bold text-gray-900 hover:text-brand-600 transition-colors">
                            {publication.title}
                          </h2>
                          <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium ml-4 whitespace-nowrap">
                            {publication.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {publication.description}
                        </p>

                        {/* Authors */}
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 mb-1">Authors:</div>
                          <div className="flex flex-wrap gap-2">
                            {publication.authors.map(author => (
                              <span key={author} className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded">
                                {author}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Published {formatDate(publication.date)}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {publication.downloads} downloads
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="lg:col-span-1 flex flex-col space-y-3 lg:items-end">
                        <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </button>
                        <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive our latest legal insights, publications, and industry updates directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-400">
            Join 5,000+ legal professionals who trust our insights. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;