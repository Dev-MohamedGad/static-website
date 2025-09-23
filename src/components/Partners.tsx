import React from 'react';
import { Building, Users, DirectionalArrow } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const Partners: React.FC = () => {
  const { t, isRTL } = useLanguage();

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
    { key: 'technology', name: t('partners.industry.technology') },
    { key: 'healthcare', name: t('partners.industry.healthcare') },
    { key: 'financial', name: t('partners.industry.financial') },
    { key: 'manufacturing', name: t('partners.industry.manufacturing') },
    { key: 'realestate', name: t('partners.industry.realestate') },
    { key: 'energy', name: t('partners.industry.energy') },
    { key: 'retail', name: t('partners.industry.retail') },
    { key: 'construction', name: t('partners.industry.construction') },
    { key: 'media', name: t('partners.industry.media') },
    { key: 'transportation', name: t('partners.industry.transportation') },
    { key: 'education', name: t('partners.industry.education') },
    { key: 'pharmaceuticals', name: t('partners.industry.pharmaceuticals') },
    { key: 'biotechnology', name: t('partners.industry.biotechnology') },
    { key: 'aerospace', name: t('partners.industry.aerospace') },
    { key: 'automotive', name: t('partners.industry.automotive') },
    { key: 'telecommunications', name: t('partners.industry.telecommunications') }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              {t('partners.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-brand-600 group-hover:to-brand-700 transition-all duration-300 mb-3">
                  <span className="text-white font-bold text-lg">{client.logo}</span>
                </div>
                <div className="text-sm text-gray-600 text-center">{client.industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              {t('partners.industries.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('partners.industries.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:bg-brand-50 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-brand-700 transition-colors">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6 font-serif">
            {t('partners.cta.title')}
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('partners.cta.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <Building className="w-5 h-5 mr-2" />
              {t('common.scheduleConsultation')}
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {t('common.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
