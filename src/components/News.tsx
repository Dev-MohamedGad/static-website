import React from 'react';
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'New Corporate Governance Regulations: What Businesses Need to Know',
      excerpt: 'Recent changes in corporate governance laws require immediate attention from business leaders. Our analysis of the key implications and compliance requirements.',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Corporate Law',
      views: '1.2k'
    },
    {
      id: 2,
      title: 'Intellectual Property Protection in the Digital Age',
      excerpt: 'As technology evolves, so do the challenges of protecting intellectual property. Learn about the latest strategies and legal frameworks.',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'IP Law',
      views: '890'
    },
    {
      id: 3,
      title: 'Employment Law Updates: Remote Work Policies and Compliance',
      excerpt: 'The shift to remote work has created new legal considerations for employers. Our comprehensive guide to updating your employment policies.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Employment Law',
      views: '2.1k'
    },
    {
      id: 4,
      title: 'Real Estate Market Trends and Legal Implications',
      excerpt: 'Current market dynamics are creating new opportunities and challenges in real estate law. Expert insights on navigating these changes.',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-02',
      readTime: '4 min read',
      category: 'Real Estate',
      views: '750'
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest legal developments, industry insights, 
            and expert analysis from our legal team.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">
                Featured Article
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                {newsArticles[0].title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {newsArticles[0].excerpt}
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(newsArticles[0].date)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {newsArticles[0].readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {newsArticles[0].views} views
                </div>
              </div>
              
              <button className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {newsArticles[0].category}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.slice(1).map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {article.views}
                  </div>
                </div>
                
                <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4 font-serif">
            Stay Updated with Legal Insights
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest legal updates, 
            industry insights, and expert analysis directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. Privacy policy applies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;