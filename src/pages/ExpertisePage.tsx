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
  DirectionalArrow,
  CheckCircle
} from '../icons';
import { useLanguage } from '../context/LanguageContext';

const ExpertisePage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const practiceAreas = [
    {
      icon: Gavel,
      title: t('expertise.dispute.title'),
      description: t('expertise.dispute.desc'),
      services: [
        t('expertise.dispute.services.1'),
        t('expertise.dispute.services.2'),
        t('expertise.dispute.services.3'),
        t('expertise.dispute.services.4'),
        t('expertise.dispute.services.5'),
        t('expertise.dispute.services.6')
      ],
      achievements: [
        t('expertise.dispute.achievements.1'),
        t('expertise.dispute.achievements.2'),
        t('expertise.dispute.achievements.3')
      ]
    },
    {
      icon: Building,
      title: t('expertise.corporate.title'),
      description: t('expertise.corporate.desc'),
      services: [
        t('expertise.corporate.services.1'),
        t('expertise.corporate.services.2'),
        t('expertise.corporate.services.3'),
        t('expertise.corporate.services.4'),
        t('expertise.corporate.services.5'),
        t('expertise.corporate.services.6')
      ],
      achievements: [
        t('expertise.corporate.achievements.1'),
        t('expertise.corporate.achievements.2'),
        t('expertise.corporate.achievements.3')
      ]
    },
    {
      icon: Users,
      title: t('expertise.employment.title'),
      description: t('expertise.employment.desc'),
      services: [
        t('expertise.employment.services.1'),
        t('expertise.employment.services.2'),
        t('expertise.employment.services.3'),
        t('expertise.employment.services.4'),
        t('expertise.employment.services.5'),
        t('expertise.employment.services.6')
      ],
      achievements: [
        t('expertise.employment.achievements.1'),
        t('expertise.employment.achievements.2'),
        t('expertise.employment.achievements.3')
      ]
    },
    {
      icon: Home,
      title: t('expertise.realestate.title'),
      description: t('expertise.realestate.desc'),
      services: [
        t('expertise.realestate.services.1'),
        t('expertise.realestate.services.2'),
        t('expertise.realestate.services.3'),
        t('expertise.realestate.services.4'),
        t('expertise.realestate.services.5'),
        t('expertise.realestate.services.6')
      ],
      achievements: [
        t('expertise.realestate.achievements.1'),
        t('expertise.realestate.achievements.2'),
        t('expertise.realestate.achievements.3')
      ]
    },
    {
      icon: Lightbulb,
      title: t('expertise.ip.title'),
      description: t('expertise.ip.desc'),
      services: [
        t('expertise.ip.services.1'),
        t('expertise.ip.services.2'),
        t('expertise.ip.services.3'),
        t('expertise.ip.services.4'),
        t('expertise.ip.services.5'),
        t('expertise.ip.services.6')
      ],
      achievements: [
        t('expertise.ip.achievements.1'),
        t('expertise.ip.achievements.2'),
        t('expertise.ip.achievements.3')
      ]
    },
    {
      icon: Calculator,
      title: t('expertise.tax.title'),
      description: t('expertise.tax.desc'),
      services: [
        t('expertise.tax.services.1'),
        t('expertise.tax.services.2'),
        t('expertise.tax.services.3'),
        t('expertise.tax.services.4'),
        t('expertise.tax.services.5'),
        t('expertise.tax.services.6')
      ],
      achievements: [
        t('expertise.tax.achievements.1'),
        t('expertise.tax.achievements.2'),
        t('expertise.tax.achievements.3')
      ]
    },
    {
      icon: TrendingUp,
      title: t('expertise.mna.title'),
      description: t('expertise.mna.desc'),
      services: [
        t('expertise.mna.services.1'),
        t('expertise.mna.services.2'),
        t('expertise.mna.services.3'),
        t('expertise.mna.services.4'),
        t('expertise.mna.services.5'),
        t('expertise.mna.services.6')
      ],
      achievements: [
        t('expertise.mna.achievements.1'),
        t('expertise.mna.achievements.2'),
        t('expertise.mna.achievements.3')
      ]
    },
    {
      icon: Scale,
      title: t('expertise.arbitration.title'),
      description: t('expertise.arbitration.desc'),
      services: [
        t('expertise.arbitration.services.1'),
        t('expertise.arbitration.services.2'),
        t('expertise.arbitration.services.3'),
        t('expertise.arbitration.services.4'),
        t('expertise.arbitration.services.5'),
        t('expertise.arbitration.services.6')
      ],
      achievements: [
        t('expertise.arbitration.achievements.1'),
        t('expertise.arbitration.achievements.2'),
        t('expertise.arbitration.achievements.3')
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">{t('expertise.ourExpertise')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('expertise.subtitle')}
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm text-gray-300">{t('expertise.practiceAreas')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-gray-300">{t('expertise.yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-gray-300">{t('expertise.casesWon')}</div>
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('expertise.ourServices')}</h3>
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('expertise.keyAchievements')}</h3>
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
                    {t('expertise.learnMore')}
                    <DirectionalArrow isRTL={isRTL} className="ml-2 h-5 w-5" />
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
            {t('expertise.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('expertise.cta.text')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('expertise.consultation')}</h3>
              <p className="text-gray-600">{t('common.consultationDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('expertise.strategy')}</h3>
              <p className="text-gray-600">{t('expertise.strategyDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('expertise.results')}</h3>
              <p className="text-gray-600">{t('expertise.resultsDesc')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('common.scheduleConsultation')}
            </button>
            <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('expertise.cta.contact')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;