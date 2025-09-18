import React from 'react';
import { Users, Award, Scale } from '../icons';
import CompanyProfile from '../components/CompanyProfile';
import MissionVision from '../components/MissionVision';
import ServicesOverview from '../components/ServicesOverview';
import PracticeAreas from '../components/PracticeAreas';
import { useLanguage } from '../context/LanguageContext';
import TranslationServices from '../components/TranslationServices';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Ahmed Shehab',
      position: 'Founding Partner',
      specialization: 'Corporate Law & M&A',
      bio: 'Founding partner with extensive experience in corporate law, mergers & acquisitions, and strategic business solutions across multiple sectors.',
      image: 'AS',
      education: 'Cairo University Faculty of Law, LL.B.',
      bar: 'Egyptian Bar Association'
    },
    {
      name: 'Mohamed El Awamy',
      position: 'Senior Partner',
      specialization: 'Litigation & Dispute Resolution',
      bio: 'Senior partner specializing in complex litigation, commercial disputes, and alternative dispute resolution with extensive courtroom experience.',
      image: 'ME',
      education: 'Alexandria University Faculty of Law, LL.B.',
      bar: 'Egyptian Bar Association'
    },
    {
      name: 'Layla Hassan',
      position: 'Partner',
      specialization: 'Corporate & Commercial Law',
      bio: 'Partner focusing on corporate formations, commercial transactions, and regulatory compliance for multinational corporations.',
      image: 'LH',
      education: 'American University in Cairo, LL.M.',
      bar: 'Egyptian Bar Association'
    },
    {
      name: 'Omar Farouk',
      position: 'Partner',
      specialization: 'Real Estate & Construction',
      bio: 'Partner specializing in real estate transactions, construction law, and development projects for commercial and residential sectors.',
      image: 'OF',
      education: 'Ain Shams University Faculty of Law, LL.B.',
      bar: 'Egyptian Bar Association'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 via-transparent to-accent-600/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
                {t('about.profile.title')}
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Company Profile (long content) */}
      <CompanyProfile />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Practice Areas */}
      <PracticeAreas />

      {/* Transpedia - Certified Translation Services */}
      <TranslationServices />

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('page.ourTeam')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced attorneys who bring decades of combined expertise to serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {member.image}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-brand-600 font-semibold mb-1">{member.position}</div>
                    <div className="text-gray-600 text-sm mb-4">{member.specialization}</div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <div><strong>Education:</strong> {member.education}</div>
                      <div><strong>Bar Admissions:</strong> {member.bar}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif">{t('page.awardsRecognition')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading legal organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Award className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('page.bestLawFirm2023')}</h3>
              <p className="text-gray-300">{t('page.legalExcellenceAwards')}</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Users className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('page.top50LawFirms')}</h3>
              <p className="text-gray-300">{t('page.nationalLegalDirectory')}</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Scale className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('page.excellenceCorporateLaw')}</h3>
              <p className="text-gray-300">{t('page.businessLawJournal')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;