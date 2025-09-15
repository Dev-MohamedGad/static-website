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
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Expertise: React.FC = () => {
  const { t } = useLanguage();

  const practiceAreas = [
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      description: 'Comprehensive litigation services covering civil, commercial, and criminal cases with expertise in Egyptian courts.',
      features: ['Civil & Commercial Litigation', 'Criminal Defense', 'Alternative Dispute Resolution']
    },
    {
      icon: Building,
      title: 'Corporate & Commercial Law',
      description: 'Fast and customized incorporation services for all types of commercial companies in Egypt and abroad.',
      features: ['Company Formation', 'Corporate Secretarial Services', 'Commercial Transactions']
    },
    {
      icon: Users,
      title: 'Employment Law',
      description: 'Expert advice on employment laws, contract drafting, and regulatory compliance for Egyptian labor regulations.',
      features: ['Employment Contracts', 'Labor Policy Development', 'Regulatory Compliance']
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Real estate registration, sale and purchase agreements, and legal advice for commercial, residential, and touristic projects.',
      features: ['Property Registration', 'Sale & Purchase Agreements', 'Title Verification']
    },
    {
      icon: Lightbulb,
      title: 'Technology, Media & Telecommunications',
      description: 'Specialized services in technology, media, and telecommunications with focus on licensing and regulatory compliance.',
      features: ['TMT Licensing', 'Regulatory Compliance', 'E-commerce Law']
    },
    {
      icon: Calculator,
      title: 'Taxation',
      description: 'Comprehensive tax services including dispute resolution, compliance, and financial reporting in accordance with Egyptian tax law.',
      features: ['Tax Dispute Resolution', 'Tax Compliance', 'Financial Reporting']
    },
    {
      icon: TrendingUp,
      title: 'Capital Market & M&A',
      description: 'Expertise in public and private mergers, acquisitions, joint ventures, and restructuring with comprehensive due diligence.',
      features: ['M&A Transactions', 'Due Diligence', 'Corporate Restructuring']
    },
    {
      icon: Scale,
      title: 'Additional Services',
      description: 'Certified translation services, due diligence investigations, and specialized business support services.',
      features: ['Certified Translation', 'Due Diligence', 'Business Licensing']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-yellow-600/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Need Legal Assistance?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experienced legal team is ready to help you navigate complex legal challenges 
              and achieve the best possible outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;