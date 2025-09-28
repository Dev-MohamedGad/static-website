import React from 'react';
import { 
  Scale, 
  Building, 
  Users, 
  Home, 
  Lightbulb, 
  Calculator, 
  TrendingUp, 
  Gavel,
  Shield,
  Briefcase,
  Smartphone,
  PieChart,
  BarChart,
  Settings,
  Merge,
  DirectionalArrow 
} from '../icons';
import { useLanguage } from '../context/LanguageContext';

const Expertise: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const practiceAreas = [
    {
      icon: Shield,
      title: t('expertise.dispute.title'),
      description: t('expertise.dispute.desc'),
      features: [t('expertise.dispute.f1'), t('expertise.dispute.f2'), t('expertise.dispute.f3'), t('expertise.dispute.f4'), t('expertise.dispute.f5'), t('expertise.dispute.f6')]
    },
    {
      icon: Building,
      title: t('expertise.corporate.title'),
      description: t('expertise.corporate.desc'),
      features: [t('expertise.corporate.f1'), t('expertise.corporate.f2'), t('expertise.corporate.f3'), t('expertise.corporate.f4'), t('expertise.corporate.f5'), t('expertise.corporate.f6')]
    },
    {
      icon: Users,
      title: t('expertise.employment.title'),
      description: t('expertise.employment.desc'),
      features: [t('expertise.employment.f1'), t('expertise.employment.f2'), t('expertise.employment.f3'), t('expertise.employment.f4'), t('expertise.employment.f5'), t('expertise.employment.f6')]
    },
    {
      icon: Smartphone,
      title: t('expertise.tmt.title'),
      description: t('expertise.tmt.desc'),
      features: [t('expertise.tmt.f1'), t('expertise.tmt.f2'), t('expertise.tmt.f3'), t('expertise.tmt.f4'), t('expertise.tmt.f5'), t('expertise.tmt.f6')]
    },
    {
      icon: Calculator,
      title: t('expertise.tax.title'),
      description: t('expertise.tax.desc'),
      features: [t('expertise.tax.f1'), t('expertise.tax.f2'), t('expertise.tax.f3'), t('expertise.tax.f4'), t('expertise.tax.f5'), t('expertise.tax.f6')]
    },
    {
      icon: Merge,
      title: t('expertise.mna.title'),
      description: t('expertise.mna.desc'),
      features: [t('expertise.mna.f1'), t('expertise.mna.f2'), t('expertise.mna.f3'), t('expertise.mna.f4'), t('expertise.mna.f5'), t('expertise.mna.f6')]
    },
    {
      icon: Settings,
      title: t('expertise.additional.title'),
      description: t('expertise.additional.desc'),
      features: [t('expertise.additional.f1'), t('expertise.additional.f2'), t('expertise.additional.f3'), t('expertise.additional.f4'), t('expertise.additional.f5'), t('expertise.additional.f6')]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Logo Background - Off Center Right */}
      <div className="absolute top-1/2 left-3/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
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
            {t('expertise.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('expertise.subtitle')}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-brand-600/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
                  {t('expertise.learnMore')}
                  <DirectionalArrow isRTL={isRTL} className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              {t('expertise.cta.title')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('expertise.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {t('expertise.cta.schedule')}
              </button>
              <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {t('expertise.cta.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;