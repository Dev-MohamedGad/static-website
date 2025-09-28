import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Award, BookOpen, Coffee, Heart } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const CareerPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

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
      icon: Coffee,
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

  const openPositions = [
    {
      title: t('career.job1.title'),
      department: t('career.job1.department'),
      location: t('career.job1.location'),
      type: t('career.job1.type'),
      experience: '5-8 years',
      salary: t('career.job1.salary'),
      description: t('career.job1.desc'),
      requirements: [
        'J.D. from top-tier law school',
        '5-8 years of corporate law experience at a major law firm',
        'Strong experience in M&A, corporate governance, and securities offerings',
        'Excellent written and verbal communication skills',
        'Ability to work independently and manage multiple transactions'
      ],
      responsibilities: [
        'Lead due diligence processes for M&A transactions',
        'Draft and negotiate complex commercial agreements',
        'Advise clients on corporate governance matters',
        'Mentor junior associates and support business development',
        'Maintain client relationships and contribute to firm growth'
      ]
    },
    {
      title: t('career.job2.title'),
      department: t('career.job2.department'),
      location: t('career.job2.location'),
      type: t('career.job2.type'),
      experience: '3-5 years',
      salary: t('career.job2.salary'),
      description: t('career.job2.desc'),
      requirements: [
        'J.D. from accredited law school with excellent academic credentials',
        '3-5 years of litigation experience at a reputable law firm',
        'Strong research, writing, and analytical skills',
        'Experience with motion practice and discovery management',
        'Ability to work under pressure and meet tight deadlines'
      ],
      responsibilities: [
        'Conduct legal research and draft pleadings, motions, and briefs',
        'Manage discovery processes and coordinate with clients',
        'Assist with depositions, hearings, and trial preparation',
        'Develop case strategies and provide legal analysis',
        'Support senior attorneys in complex litigation matters'
      ]
    },
    {
      title: t('career.job3.title'),
      department: t('career.job3.department'),
      location: t('career.job3.location'),
      type: t('career.job3.type'),
      experience: '1-3 years',
      salary: t('career.job3.salary'),
      description: t('career.job3.desc'),
      requirements: [
        'J.D. from accredited law school',
        '1-3 years of real estate or corporate law experience',
        'Interest in real estate transactions and finance',
        'Strong attention to detail and organizational skills',
        'Ability to work collaboratively in a fast-paced environment'
      ],
      responsibilities: [
        'Assist with real estate acquisitions and dispositions',
        'Review and draft purchase agreements, leases, and financing documents',
        'Conduct title and survey reviews',
        'Coordinate closings and manage transaction timelines',
        'Support senior attorneys on complex real estate matters'
      ]
    },
    {
      title: t('career.job4.title'),
      department: t('career.job4.department'),
      location: t('career.job4.location'),
      type: t('career.job4.type'),
      experience: '2-4 years',
      salary: t('career.job4.salary'),
      description: t('career.job4.desc'),
      requirements: [
        'Paralegal certificate or equivalent experience',
        '2-4 years of corporate law paralegal experience',
        'Proficiency in corporate filing systems and databases',
        'Strong organizational and project management skills',
        'Experience with entity formations and corporate maintenance'
      ],
      responsibilities: [
        'Prepare entity formation documents and filings',
        'Maintain corporate records and minute books',
        'Assist with due diligence and document organization',
        'Coordinate with state filing offices and registered agents',
        'Support attorneys with transactional closing processes'
      ]
    }
  ];

  const JobModal: React.FC<{ job: typeof openPositions[0]; onClose: () => void }> = ({ job, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.type}</span>
              <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" />{job.salary}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Position</h3>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Save Position
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">{t('career.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('career.subtitle')}
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">{t('career.stats.professionals')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm text-gray-300">{t('career.stats.years')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-gray-300">{t('career.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('career.whyChoose.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('career.whyChoose.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('career.opportunities.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('career.opportunities.desc')}
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full">{job.department}</span>
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{job.type}</span>
                      <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" />{job.salary}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 ml-0 lg:ml-6">
                    <button
                      onClick={() => setSelectedJob(index)}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {t('career.viewDetails')}
                    </button>
                    <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                      {t('career.quickApply')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('career.process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('career.process.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('career.process.step1.title')}</h3>
              <p className="text-gray-600">{t('career.process.step1.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('career.process.step2.title')}</h3>
              <p className="text-gray-600">{t('career.process.step2.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('career.process.step3.title')}</h3>
              <p className="text-gray-600">{t('career.process.step3.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('career.process.step4.title')}</h3>
              <p className="text-gray-600">{t('career.process.step4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">{t('career.cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('career.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('career.cta.sendResume')}
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('career.cta.contactHR')}
            </button>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob !== null && (
        <JobModal job={openPositions[selectedJob]} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default CareerPage;