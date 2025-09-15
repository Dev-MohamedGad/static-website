import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'General',
    'Corporate Law',
    'Employment Law',
    'Real Estate',
    'Intellectual Property',
    'Litigation',
    'Fees & Billing'
  ];

  const faqData = {
    'General': [
      {
        id: 1,
        question: 'What types of legal services does Shehab Law Firm provide?',
        answer: 'We offer comprehensive legal services including corporate and commercial law, dispute resolution, employment law, real estate law, intellectual property protection, taxation, capital markets and M&A, and arbitration services. Our experienced team handles both complex business matters and individual legal needs.'
      },
      {
        id: 2,
        question: 'How do I schedule an initial consultation?',
        answer: 'You can schedule a consultation by calling our office at (234) 567-8900, using our online contact form, or sending an email to info@shehablaw.com. We typically offer a 30-minute initial consultation to discuss your legal needs and determine how we can best assist you.'
      },
      {
        id: 3,
        question: 'Do you offer free consultations?',
        answer: 'Yes, we provide free initial consultations for most practice areas. This allows us to understand your situation and explain how we can help. Some specialized matters may require a paid consultation, which will be discussed upfront.'
      },
      {
        id: 4,
        question: 'What should I bring to my first meeting?',
        answer: 'Please bring any relevant documents related to your legal matter, including contracts, correspondence, court papers, or other materials. Also bring a list of questions you\'d like to discuss and any deadlines you\'re aware of.'
      }
    ],
    'Corporate Law': [
      {
        id: 5,
        question: 'What is involved in forming a new business entity?',
        answer: 'Business formation involves choosing the right entity type (LLC, Corporation, Partnership), filing necessary paperwork with state authorities, obtaining required licenses, creating governing documents, and setting up proper compliance procedures. We guide you through each step and help you choose the structure that best fits your business goals.'
      },
      {
        id: 6,
        question: 'How can you help with mergers and acquisitions?',
        answer: 'Our M&A team handles all aspects of transactions including due diligence, valuation, negotiation, drafting purchase agreements, regulatory compliance, and closing coordination. We work to protect your interests whether you\'re buying, selling, or merging with another company.'
      },
      {
        id: 7,
        question: 'What ongoing legal services do businesses typically need?',
        answer: 'Ongoing services include contract review and drafting, employment law compliance, corporate governance, intellectual property protection, regulatory compliance, dispute resolution, and general legal counsel on business decisions and strategic planning.'
      }
    ],
    'Employment Law': [
      {
        id: 8,
        question: 'Can you help with employee handbook development?',
        answer: 'Yes, we create comprehensive employee handbooks that comply with federal, state, and local employment laws. This includes policies on hiring, workplace conduct, benefits, leave policies, disciplinary procedures, and termination processes.'
      },
      {
        id: 9,
        question: 'What should I do if facing an employment discrimination claim?',
        answer: 'Contact us immediately for legal representation. We\'ll review the claim, develop a defense strategy, handle communications with regulatory agencies, and represent you throughout the process. Early intervention is crucial in employment matters.'
      },
      {
        id: 10,
        question: 'How do you handle workplace investigations?',
        answer: 'We conduct thorough, impartial workplace investigations for harassment, discrimination, or misconduct allegations. Our process includes interviewing witnesses, reviewing evidence, documenting findings, and providing recommendations for appropriate action while ensuring legal compliance.'
      }
    ],
    'Real Estate': [
      {
        id: 11,
        question: 'What legal services do you provide for real estate transactions?',
        answer: 'We handle all aspects of real estate transactions including purchase and sale agreements, title examinations, closing coordination, financing documentation, lease negotiations, zoning issues, and resolving title defects.'
      },
      {
        id: 12,
        question: 'Do you handle both residential and commercial real estate?',
        answer: 'Yes, we represent clients in both residential and commercial real estate matters. Our services include single-family homes, condominiums, office buildings, retail spaces, industrial properties, and large-scale development projects.'
      },
      {
        id: 13,
        question: 'What happens if issues arise during a real estate closing?',
        answer: 'We work to resolve closing issues quickly, whether they involve title problems, financing delays, or contract disputes. Our experience allows us to anticipate potential problems and develop solutions to keep transactions on track.'
      }
    ],
    'Intellectual Property': [
      {
        id: 14,
        question: 'What types of intellectual property can you help protect?',
        answer: 'We help protect patents, trademarks, copyrights, trade secrets, and other proprietary information. Our services include registration, licensing agreements, infringement defense, and enforcement actions.'
      },
      {
        id: 15,
        question: 'How long does the patent application process take?',
        answer: 'The patent process typically takes 1-3 years, depending on the complexity of the invention and USPTO workload. We guide you through each step including prior art searches, application drafting, responding to office actions, and final approval.'
      },
      {
        id: 16,
        question: 'What should I do if someone is infringing on my trademark?',
        answer: 'Contact us immediately to discuss enforcement options. We can send cease and desist letters, negotiate licensing agreements, or pursue litigation if necessary. Early action is important to protect your trademark rights.'
      }
    ],
    'Litigation': [
      {
        id: 17,
        question: 'What types of disputes do you handle?',
        answer: 'We handle commercial litigation, contract disputes, employment litigation, real estate disputes, intellectual property litigation, and general business disputes. We also provide arbitration and mediation services as alternatives to court proceedings.'
      },
      {
        id: 18,
        question: 'How long do litigation cases typically take?',
        answer: 'Case duration varies significantly based on complexity, court schedules, and whether parties are willing to settle. Simple matters may resolve in months, while complex commercial litigation can take 1-3 years or more. We provide realistic timelines for each case.'
      },
      {
        id: 19,
        question: 'Do you recommend alternative dispute resolution?',
        answer: 'Yes, we often recommend mediation or arbitration as they can be faster, less expensive, and more private than traditional litigation. We\'ll analyze your situation to determine the best approach for resolving your dispute.'
      }
    ],
    'Fees & Billing': [
      {
        id: 20,
        question: 'How do you structure your legal fees?',
        answer: 'We offer various fee structures depending on the matter: hourly rates for most services, flat fees for routine matters like business formation, contingency fees for certain litigation, and retainer agreements for ongoing legal services. We discuss fees upfront and provide detailed estimates.'
      },
      {
        id: 21,
        question: 'Do you require a retainer?',
        answer: 'For most matters, we require an initial retainer to begin work. The retainer amount varies based on the complexity and expected duration of your matter. Retainer funds are held in trust and applied against future billings as work is completed.'
      },
      {
        id: 22,
        question: 'How often will I receive billing statements?',
        answer: 'We typically send monthly billing statements that detail all time spent, expenses incurred, and payments received. Statements include descriptions of work performed so you understand exactly what services you\'re paying for.'
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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our legal services and how we can help you.
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
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Categories</h2>
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
                        ? 'bg-yellow-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-yellow-600'
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
                    ? `${filteredFAQs.length} result(s) found for "${searchQuery}"` 
                    : `Common questions about ${activeCategory.toLowerCase()}`
                  }
                </p>
              </div>

              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or browse other categories.</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Clear Search
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
                          <ChevronUp className="w-6 h-6 text-yellow-600 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Can't find the answer you're looking for? Our legal team is here to help you with personalized assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">Speak directly with our legal experts</p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                (234) 567-8900
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">Send us your questions anytime</p>
              <a
                href="mailto:info@shehablaw.com"
                className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                info@shehablaw.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Consultation</h3>
              <p className="text-gray-600 mb-6">Book a personalized meeting</p>
              <button className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Book Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif">Most Popular Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to the questions we hear most often from our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">How much do legal services cost?</h3>
              <p className="text-gray-300">
                Our fees vary based on the complexity and type of legal matter. We offer transparent pricing 
                and will provide a detailed estimate during your initial consultation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Do you handle cases nationwide?</h3>
              <p className="text-gray-300">
                We are licensed to practice in multiple states and can handle matters nationwide. We'll 
                work with local counsel when necessary to ensure proper representation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">How quickly can you respond to urgent matters?</h3>
              <p className="text-gray-300">
                We understand legal emergencies require immediate attention. We offer same-day consultations 
                for urgent matters and have an emergency contact line available 24/7.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">What makes your firm different?</h3>
              <p className="text-gray-300">
                Our combination of extensive experience, personalized service, and commitment to client 
                success sets us apart. We focus on building long-term relationships and achieving results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;