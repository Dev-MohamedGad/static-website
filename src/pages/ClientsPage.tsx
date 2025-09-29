import React from 'react';
import { Star, Quote, Building, Users, TrendingUp } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const ClientsPage: React.FC = () => {
  const { t } = useLanguage();
  const clientCategories = [
    {
      icon: Building,
      title: t('clients.fortune500.title'),
      description: t('clients.fortune500.desc'),
      count: '50+'
    },
    {
      icon: Users,
      title: t('clients.smb.title'),
      description: t('clients.smb.desc'),
      count: '500+'
    },
    {
      icon: TrendingUp,
      title: t('clients.startups.title'),
      description: t('clients.startups.desc'),
      count: '200+'
    }
  ];

  const testimonials = [
    {
      quote: t('clients.testimonial1.quote'),
      author: t('clients.testimonial1.author'),
      position: t('clients.testimonial1.position'),
      company: t('clients.testimonial1.company'),
      avatar: "SJ",
      rating: 5,
      industry: t('clients.testimonial1.industry')
    },
    {
      quote: t('clients.testimonial2.quote'),
      author: t('clients.testimonial2.author'),
      position: t('clients.testimonial2.position'),
      company: t('clients.testimonial2.company'),
      avatar: "MC",
      rating: 5,
      industry: t('clients.testimonial2.industry')
    },
    {
      quote: t('clients.testimonial3.quote'),
      author: t('clients.testimonial3.author'),
      position: t('clients.testimonial3.position'),
      company: t('clients.testimonial3.company'),
      avatar: "ER",
      rating: 5,
      industry: t('clients.testimonial3.industry')
    },
    {
      quote: t('clients.testimonial4.quote'),
      author: t('clients.testimonial4.author'),
      position: t('clients.testimonial4.position'),
      company: t('clients.testimonial4.company'),
      avatar: "DT",
      rating: 5,
      industry: t('clients.testimonial4.industry')
    },
    {
      quote: t('clients.testimonial5.quote'),
      author: t('clients.testimonial5.author'),
      position: t('clients.testimonial5.position'),
      company: t('clients.testimonial5.company'),
      avatar: "LW",
      rating: 5,
      industry: t('clients.testimonial5.industry')
    },
    {
      quote: t('clients.testimonial6.quote'),
      author: t('clients.testimonial6.author'),
      position: t('clients.testimonial6.position'),
      company: t('clients.testimonial6.company'),
      avatar: "JM",
      rating: 5,
      industry: t('clients.testimonial6.industry')
    }
  ];

  const clients = [
    { name: 'Global Manufacturing', logo: 'GM', industry: 'Manufacturing' },
    { name: 'Tech Innovations', logo: 'TI', industry: 'Technology' },
    { name: 'Financial Group', logo: 'FG', industry: 'Finance' },
    { name: 'Healthcare Systems', logo: 'HS', industry: 'Healthcare' },
    { name: 'Energy Solutions', logo: 'ES', industry: 'Energy' },
    { name: 'Retail Network', logo: 'RN', industry: 'Retail' },
    { name: 'Construction Corp', logo: 'CC', industry: 'Construction' },
    { name: 'Media Group', logo: 'MG', industry: 'Media' },
    { name: 'Transport Co', logo: 'TC', industry: 'Transportation' },
    { name: 'Education Partners', logo: 'EP', industry: 'Education' },
    { name: 'Pharma Industries', logo: 'PI', industry: 'Pharmaceuticals' },
    { name: 'Green Technologies', logo: 'GT', industry: 'Cleantech' }
  ];

  const industries = [
    t('partners.industry.technology'), t('partners.industry.healthcare'), t('partners.industry.financial'), t('partners.industry.manufacturing'),
    t('partners.industry.realestate'), t('partners.industry.energy'), t('partners.industry.retail'), t('partners.industry.construction'), t('partners.industry.media'),
    t('partners.industry.transportation'), t('partners.industry.education'), t('partners.industry.pharmaceuticals'), t('partners.industry.biotechnology'),
    t('partners.industry.aerospace'), t('partners.industry.automotive'), t('partners.industry.telecommunications')
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">{t('clients.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('clients.subtitle')}
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center">
              <div className="text-3xl font-bold">750+</div>
              <div className="text-sm text-gray-300">{t('clients.stats.activeClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">16</div>
              <div className="text-sm text-gray-300">{t('clients.stats.industriesServed')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-300">{t('clients.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('clients.whoWeServe.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clients.whoWeServe.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {clientCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-600 mb-2">{category.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('clients.testimonials.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clients.testimonials.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-brand-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>

                {/* Industry Tag */}
                <div className="mt-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/** Industries We Serve section removed per request **/}
    </div>
  );
};

export default ClientsPage;