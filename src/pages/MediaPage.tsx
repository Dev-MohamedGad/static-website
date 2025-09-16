import React, { useState } from 'react';
import { Calendar, Eye, Play, ImageIcon, Video, FileText, Award } from '../icons';

const MediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'photos' | 'videos'>('news');

  const newsHighlights = [
    {
      id: 1,
      title: 'Shehab Law Firm Wins Major Corporate Litigation Case',
      excerpt: 'Our litigation team successfully represented a Fortune 500 company in a complex commercial dispute, securing a $50M favorable judgment.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-20',
      views: '2.5k',
      category: 'Legal Victory',
      featured: true
    },
    {
      id: 2,
      title: 'Ahmed Shehab Named "Lawyer of the Year" by Legal Excellence Awards',
      excerpt: 'Founding Partner Ahmed Shehab received recognition for outstanding achievement in corporate law and client service excellence.',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      views: '1.8k',
      category: 'Award'
    },
    {
      id: 3,
      title: 'New Employment Law Regulations: Firm Provides Expert Analysis',
      excerpt: 'Our employment law team offers comprehensive guidance on recent regulatory changes affecting workplace policies.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-12',
      views: '3.2k',
      category: 'Legal Update'
    },
    {
      id: 4,
      title: 'Shehab Law Firm Expands Real Estate Practice with New Hires',
      excerpt: 'Strategic expansion includes three senior associates specializing in commercial real estate and development law.',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-08',
      views: '1.1k',
      category: 'Firm News'
    },
    {
      id: 5,
      title: 'Record-Breaking M&A Transaction Completed',
      excerpt: 'Our corporate team facilitated a $200M merger between two industry-leading technology companies.',
      image: 'https://images.pexels.com/photos/5669607/pexels-photo-5669607.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-05',
      views: '2.8k',
      category: 'Transaction'
    },
    {
      id: 6,
      title: 'Pro Bono Initiative Helps 100+ Small Businesses',
      excerpt: 'Our community outreach program provided free legal consultations to local entrepreneurs and small business owners.',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-02',
      views: '950',
      category: 'Community'
    }
  ];

  const photoGallery = [
    {
      id: 1,
      title: 'Annual Awards Ceremony 2023',
      description: 'Celebrating our team\'s achievements and recognizing excellence in legal service.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events',
      date: '2023-12-15'
    },
    {
      id: 2,
      title: 'New Office Opening',
      description: 'Grand opening of our expanded downtown office space with state-of-the-art facilities.',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Office',
      date: '2023-11-20'
    },
    {
      id: 3,
      title: 'Legal Conference Presentation',
      description: 'Our partners presenting on emerging trends in corporate law at the National Legal Conference.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Speaking',
      date: '2023-10-08'
    },
    {
      id: 4,
      title: 'Community Legal Workshop',
      description: 'Free legal education workshop for local small business owners and entrepreneurs.',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Community',
      date: '2023-09-25'
    },
    {
      id: 5,
      title: 'Team Building Retreat',
      description: 'Annual team retreat focusing on collaboration, innovation, and professional development.',
      image: 'https://images.pexels.com/photos/5669607/pexels-photo-5669607.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Team',
      date: '2023-08-12'
    },
    {
      id: 6,
      title: 'Client Appreciation Event',
      description: 'Exclusive event celebrating our valued clients and successful partnerships.',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events',
      date: '2023-07-30'
    }
  ];

  const videoContent = [
    {
      id: 1,
      title: 'Introduction to Shehab Law Firm',
      description: 'Learn about our history, values, and commitment to legal excellence.',
      thumbnail: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3:45',
      views: '15k',
      date: '2024-01-10'
    },
    {
      id: 2,
      title: 'Corporate Law Best Practices',
      description: 'Expert insights on modern corporate governance and compliance strategies.',
      thumbnail: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12:30',
      views: '8.2k',
      date: '2023-12-20'
    },
    {
      id: 3,
      title: 'Employment Law Updates 2024',
      description: 'Recent changes in employment law and their impact on businesses.',
      thumbnail: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '8:15',
      views: '6.7k',
      date: '2023-12-05'
    },
    {
      id: 4,
      title: 'Successful M&A Case Study',
      description: 'Behind-the-scenes look at a complex merger transaction and key success factors.',
      thumbnail: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15:22',
      views: '4.1k',
      date: '2023-11-15'
    },
    {
      id: 5,
      title: 'IP Protection Strategies',
      description: 'Essential strategies for protecting intellectual property in the digital age.',
      thumbnail: 'https://images.pexels.com/photos/5669607/pexels-photo-5669607.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '10:05',
      views: '5.9k',
      date: '2023-10-28'
    },
    {
      id: 6,
      title: 'Real Estate Investment Legal Guide',
      description: 'Legal considerations for real estate investors and development projects.',
      thumbnail: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '11:40',
      views: '3.4k',
      date: '2023-10-12'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Media Center</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with our latest news, achievements, and insights from the legal world.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'news'
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              News & Highlights
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
              }`}
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-600 hover:text-brand-600 hover:bg-gray-50'
              }`}
            >
              <Video className="w-5 h-5 mr-2" />
              Videos
            </button>
          </nav>
        </div>
      </section>

      {/* News & Highlights */}
      {activeTab === 'news' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured News */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Featured</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={newsHighlights[0].image}
                      alt={newsHighlights[0].title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">
                        {newsHighlights[0].category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                      {newsHighlights[0].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {newsHighlights[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(newsHighlights[0].date)}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        {newsHighlights[0].views} views
                      </div>
                    </div>
                    <button className="self-start bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Recent News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsHighlights.slice(1).map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(news.date)}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {news.views} views
                        </div>
                      </div>
                      <button className="text-brand-600 hover:text-brand-700 font-medium text-sm">
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      {activeTab === 'photos' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Photo Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A visual journey through our events, achievements, and team moments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoGallery.map((photo) => (
                <div
                  key={photo.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                          View Full Size
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {photo.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{photo.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(photo.date)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Content */}
      {activeTab === 'videos' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Video Library</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Educational content, insights, and behind-the-scenes looks at our legal expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoContent.map((video) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                      <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{video.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(video.date)}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {video.views} views
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Media Inquiries</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For press inquiries, interview requests, or media partnerships, please contact our communications team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Media Team
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download Press Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;