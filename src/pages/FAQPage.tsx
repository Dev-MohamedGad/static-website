import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, Mail, MessageCircle } from '../icons';
import { useLanguage } from '../context/LanguageContext';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t('faq.categories.general'));
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    t('faq.categories.general'),
    t('faq.categories.corporate'),
    t('faq.categories.employment'),
    t('faq.categories.realestate'),
    t('faq.categories.intellectual'),
    t('faq.categories.litigation'),
    t('faq.categories.fees')
  ];

  const faqData = {
    [t('faq.categories.general')]: [
      {
        id: 1,
        question: t('faq.general.q1'),
        answer: t('faq.general.a1')
      },
      {
        id: 2,
        question: t('faq.general.q2'),
        answer: t('faq.general.a2')
      },
      {
        id: 3,
        question: t('faq.general.q3'),
        answer: t('faq.general.a3')
      },
      {
        id: 4,
        question: t('faq.general.q4'),
        answer: t('faq.general.a4')
      }
    ],
    [t('faq.categories.corporate')]: [
      {
        id: 5,
        question: t('faq.corporate.q1'),
        answer: t('faq.corporate.a1')
      },
      {
        id: 6,
        question: t('faq.corporate.q2'),
        answer: t('faq.corporate.a2')
      },
      {
        id: 7,
        question: t('faq.corporate.q3'),
        answer: t('faq.corporate.a3')
      }
    ],
    [t('faq.categories.employment')]: [
      {
        id: 8,
        question: t('faq.employment.q1'),
        answer: t('faq.employment.a1')
      },
      {
        id: 9,
        question: t('faq.employment.q2'),
        answer: t('faq.employment.a2')
      },
      {
        id: 10,
        question: t('faq.employment.q3'),
        answer: t('faq.employment.a3')
      }
    ],
    [t('faq.categories.realestate')]: [
      {
        id: 11,
        question: t('faq.realestate.q1'),
        answer: t('faq.realestate.a1')
      },
      {
        id: 12,
        question: t('faq.realestate.q2'),
        answer: t('faq.realestate.a2')
      },
      {
        id: 13,
        question: t('faq.realestate.q3'),
        answer: t('faq.realestate.a3')
      }
    ],
    [t('faq.categories.intellectual')]: [
      {
        id: 14,
        question: t('faq.intellectual.q1'),
        answer: t('faq.intellectual.a1')
      },
      {
        id: 15,
        question: t('faq.intellectual.q2'),
        answer: t('faq.intellectual.a2')
      },
      {
        id: 16,
        question: t('faq.intellectual.q3'),
        answer: t('faq.intellectual.a3')
      }
    ],
    [t('faq.categories.litigation')]: [
      {
        id: 17,
        question: t('faq.litigation.q1'),
        answer: t('faq.litigation.a1')
      },
      {
        id: 18,
        question: t('faq.litigation.q2'),
        answer: t('faq.litigation.a2')
      },
      {
        id: 19,
        question: t('faq.litigation.q3'),
        answer: t('faq.litigation.a3')
      }
    ],
    [t('faq.categories.fees')]: [
      {
        id: 20,
        question: t('faq.fees.q1'),
        answer: t('faq.fees.a1')
      },
      {
        id: 21,
        question: t('faq.fees.q2'),
        answer: t('faq.fees.a2')
      },
      {
        id: 22,
        question: t('faq.fees.q3'),
        answer: t('faq.fees.a3')
      }
    ]
  };

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const filteredFAQs = faqData[activeCategory].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <HelpCircle className="w-16 h-16 text-brand-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">{t('faq.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder={t('form.searchFAQ')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">{t('faq.categories')}</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setExpandedQuestion(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-brand-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-brand-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{activeCategory}</h2>
                <p className="text-lg text-gray-600">
                  {searchQuery 
                    ? `${filteredFAQs.length} ${t('faq.searchResults')} "${searchQuery}"`
                    : `${t('faq.categoryDescription')} ${activeCategory}`
                  }
                </p>
              </div>

              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">{t('faq.noQuestionsFound')}</h3>
                  <p className="text-gray-500 mb-6">{t('faq.tryAdjusting')}</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    {t('faq.clearSearch')}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full px-6 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {expandedQuestion === faq.id ? (
                          <ChevronUp className="w-6 h-6 text-brand-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {expandedQuestion === faq.id && (
                        <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                          <div className="pt-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('faq.stillHaveQuestions')}</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('faq.contactDescription')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('faq.callUs')}</h3>
              <p className="text-gray-600 mb-6">{t('faq.callUsDesc')}</p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                (234) 567-8900
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('faq.emailUs')}</h3>
              <p className="text-gray-600 mb-6">{t('faq.emailUsDesc')}</p>
              <a
                href="mailto:info@shehablaw.com"
                className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                info@shehablaw.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('common.scheduleConsultation')}</h3>
              <p className="text-gray-600 mb-6">{t('faq.bookConsultationDesc')}</p>
              <button className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                {t('faq.bookMeeting')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif">{t('faq.popularQuestions')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('faq.popularDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">{t('faq.howMuchCost')}</h3>
              <p className="text-gray-300">
                {t('faq.howMuchCostAnswer')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">{t('faq.handleNationwide')}</h3>
              <p className="text-gray-300">
                {t('faq.handleNationwideAnswer')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">{t('faq.urgentResponse')}</h3>
              <p className="text-gray-300">
                {t('faq.urgentResponseAnswer')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">{t('faq.whatMakesDifferent')}</h3>
              <p className="text-gray-300">
                {t('faq.whatMakesDifferentAnswer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;