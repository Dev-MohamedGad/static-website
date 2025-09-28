import React from 'react';
import { Users, Calendar, TrendingUp, DollarSign, BookOpen, Heart, Award, MapPin, Clock, Send, Mail } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const Career: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '50+', label: t('career.stats.professionals'), icon: Users },
    { number: '25', label: t('career.stats.years'), icon: Calendar },
    { number: '95%', label: t('career.stats.satisfaction'), icon: TrendingUp }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: t('career.benefits.compensation.title'),
      description: t('career.benefits.compensation.desc')
    },
    {
      icon: BookOpen,
      title: t('career.benefits.development.title'),
      description: t('career.benefits.development.desc')
    },
    {
      icon: Users,
      title: t('career.benefits.collaborative.title'),
      description: t('career.benefits.collaborative.desc')
    },
    {
      icon: Heart,
      title: t('career.benefits.balance.title'),
      description: t('career.benefits.balance.desc')
    },
    {
      icon: Award,
      title: t('career.benefits.recognition.title'),
      description: t('career.benefits.recognition.desc')
    },
    {
      icon: Heart,
      title: t('career.benefits.health.title'),
      description: t('career.benefits.health.desc')
    }
  ];

  const jobs = [
    {
      title: t('career.job1.title'),
      department: t('career.job1.department'),
      location: t('career.job1.location'),
      type: t('career.job1.type'),
      salary: t('career.job1.salary'),
      description: t('career.job1.desc')
    },
    {
      title: t('career.job2.title'),
      department: t('career.job2.department'),
      location: t('career.job2.location'),
      type: t('career.job2.type'),
      salary: t('career.job2.salary'),
      description: t('career.job2.desc')
    },
    {
      title: t('career.job3.title'),
      department: t('career.job3.department'),
      location: t('career.job3.location'),
      type: t('career.job3.type'),
      salary: t('career.job3.salary'),
      description: t('career.job3.desc')
    },
    {
      title: t('career.job4.title'),
      department: t('career.job4.department'),
      location: t('career.job4.location'),
      type: t('career.job4.type'),
      salary: t('career.job4.salary'),
      description: t('career.job4.desc')
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: t('career.process.step1.title'),
      description: t('career.process.step1.desc')
    },
    {
      number: '2',
      title: t('career.process.step2.title'),
      description: t('career.process.step2.desc')
    },
    {
      number: '3',
      title: t('career.process.step3.title'),
      description: t('career.process.step3.desc')
    },
    {
      number: '4',
      title: t('career.process.step4.title'),
      description: t('career.process.step4.desc')
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Logo Background - Off Center Left */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
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
            {t('career.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('career.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-brand-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              {t('career.whyChoose.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('career.whyChoose.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              {t('career.opportunities.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('career.opportunities.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <span className="px-3 py-1 bg-brand-100 text-brand-800 rounded-full mr-3">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-brand-600">{job.salary}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {job.type}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="flex gap-4">
                  <button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    {t('career.viewDetails')}
                  </button>
                  <button className="flex-1 border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    {t('career.quickApply')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
              {t('career.process.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('career.process.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center relative"
              >
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-200 transform translate-x-4"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6 font-serif">
            {t('career.cta.title')}
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('career.cta.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <Send className="w-5 h-5 mr-2" />
              {t('career.cta.sendResume')}
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              {t('career.cta.contactHR')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
