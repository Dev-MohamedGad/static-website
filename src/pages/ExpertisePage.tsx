import React from 'react';
import { 
  Gavel, 
  Building, 
  Users, 
  Home, 
  Lightbulb, 
  Calculator, 
  TrendingUp, 
  Scale,
  ArrowRight,
  CheckCircle
} from '../icons';
import { useLanguage } from '../context/LanguageContext';

const ExpertisePage: React.FC = () => {
  const { t } = useLanguage();
  const practiceAreas = [
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      description: 'Comprehensive litigation and alternative dispute resolution services for complex commercial and civil matters.',
      services: [
        'Commercial Litigation',
        'Civil Litigation',
        'Arbitration Services',
        'Mediation',
        'Class Action Defense',
        'Appeals'
      ],
      achievements: [
        '95% success rate in litigation',
        '$500M+ in favorable settlements',
        '200+ cases resolved through ADR'
      ]
    },
    {
      icon: Building,
      title: 'Corporate & Commercial Law',
      description: 'Full-service corporate legal support from entity formation to complex business transactions.',
      services: [
        'Business Formation',
        'Corporate Governance',
        'Contract Negotiation',
        'Compliance Programs',
        'Joint Ventures',
        'Partnership Agreements'
      ],
      achievements: [
        '1000+ companies incorporated',
        '$2B+ in transactions closed',
        '50+ Fortune 500 clients'
      ]
    },
    {
      icon: Users,
      title: 'Labor & Employment',
      description: 'Comprehensive employment law services protecting both employers and employees in workplace matters.',
      services: [
        'Employment Contracts',
        'Workplace Investigations',
        'Discrimination Defense',
        'Wage & Hour Compliance',
        'Executive Compensation',
        'Labor Relations'
      ],
      achievements: [
        '300+ workplace disputes resolved',
        '99% compliance audit success',
        'Zero EEOC violations for clients'
      ]
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Complete real estate legal services for residential, commercial, and investment properties.',
      services: [
        'Property Transactions',
        'Lease Negotiations',
        'Zoning & Land Use',
        'Real Estate Finance',
        'Construction Law',
        'Property Development'
      ],
      achievements: [
        '$3B+ in property transactions',
        '500+ successful closings',
        '100+ development projects'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Intellectual Property',
      description: 'Protecting and enforcing intellectual property rights across all industries and technologies.',
      services: [
        'Patent Applications',
        'Trademark Registration',
        'Copyright Protection',
        'Trade Secrets',
        'IP Licensing',
        'Infringement Litigation'
      ],
      achievements: [
        '2000+ patents filed',
        '1500+ trademarks registered',
        '98% approval rate'
      ]
    },
    {
      icon: Calculator,
      title: 'Taxation',
      description: 'Strategic tax planning and compliance services for individuals, businesses, and organizations.',
      services: [
        'Tax Planning',
        'Tax Controversy',
        'International Tax',
        'Estate Tax Planning',
        'Tax Compliance',
        'IRS Representation'
      ],
      achievements: [
        '$100M+ in tax savings',
        '500+ audits successfully resolved',
        'Zero penalties for compliant clients'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Capital Market & M&A',
      description: 'Expert guidance in mergers, acquisitions, and capital market transactions of all sizes.',
      services: [
        'Mergers & Acquisitions',
        'Due Diligence',
        'Securities Offerings',
        'Private Equity',
        'Venture Capital',
        'IPO Services'
      ],
      achievements: [
        '$5B+ in M&A transactions',
        '100+ successful deals',
        '25+ IPOs completed'
      ]
    },
    {
      icon: Scale,
      title: 'Arbitration',
      description: 'Specialized arbitration services for efficient and effective dispute resolution.',
      services: [
        'Commercial Arbitration',
        'International Arbitration',
        'Construction Arbitration',
        'Employment Arbitration',
        'Investment Arbitration',
        'Award Enforcement'
      ],
      achievements: [
        '150+ arbitrations completed',
        '90% faster than litigation',
        '$200M+ in awards enforced'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Our Expertise</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive legal services across multiple practice areas, delivered with excellence and integrity.
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-gray-300">Practice Areas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-gray-300">Cases Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mr-6">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 font-serif">{area.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Services */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
                    <div className="space-y-2">
                      {area.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-brand-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={`https://images.pexels.com/photos/${
                        [5668858, 5669602, 5668473, 5669619, 5669602, 5668882, 5669607, 5668858][index]
                      }/pexels-photo-${
                        [5668858, 5669602, 5668473, 5669619, 5669602, 5668882, 5669607, 5668858][index]
                      }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={area.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-xl">
                      <div className="text-2xl font-bold text-brand-600">
                        {area.achievements[0].split(' ')[0]}
                      </div>
                      <div className="text-sm text-gray-600">
                        {area.achievements[0].split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Need Expert Legal Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our experienced legal team is ready to help you navigate complex legal challenges 
            and achieve the best possible outcomes for your case.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">{t('common.consultationDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a tailored legal strategy based on your specific situation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">Execute the strategy and achieve the best possible outcome</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('common.scheduleConsultation')}
            </button>
            <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;