import React from 'react';
import { Users, Award, Scale, DirectionalArrow } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const AboutPreview: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Scale,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc')
    },
    {
      icon: Users,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc')
    },
    {
      icon: Award,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc')
    }
  ];

  return (
    <section id="about-preview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('about.p1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.p2')}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {t('about.cta')}
              <DirectionalArrow isRTL={isRTL} className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Legal team meeting"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-900/10 rounded-full blur-xl"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">25+</div>
                  <div className="text-sm text-gray-600">{t('about.stats.years')}</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-gray-600">{t('about.stats.cases')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;