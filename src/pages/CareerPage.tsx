import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Award, BookOpen, Coffee, Heart } from 'lucide-react';

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance-based bonuses and comprehensive benefits package.'
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'Continuous learning opportunities, CLE credits, conference attendance, and career advancement programs.'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work alongside experienced attorneys in a supportive, team-oriented culture that values diverse perspectives.'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, generous PTO, and wellness programs to support your personal and professional well-being.'
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Clear partnership track, merit-based promotions, and recognition programs that reward excellence and innovation.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, 401(k) matching, and wellness stipends.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Associate - Corporate Law',
      department: 'Corporate & Commercial',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '$180,000 - $250,000',
      description: 'We are seeking a senior associate to join our growing corporate practice. The ideal candidate will have extensive experience in M&A transactions, corporate governance, and securities law.',
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
      title: 'Associate - Litigation',
      department: 'Dispute Resolution',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$160,000 - $200,000',
      description: 'Join our award-winning litigation team representing clients in complex commercial disputes, white-collar matters, and regulatory investigations.',
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
      title: 'Junior Associate - Real Estate',
      department: 'Real Estate',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$140,000 - $170,000',
      description: 'Excellent opportunity for a junior associate to join our dynamic real estate practice representing developers, investors, and financial institutions.',
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
      title: 'Paralegal - Corporate Department',
      department: 'Corporate & Commercial',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$70,000 - $85,000',
      description: 'We are looking for an experienced paralegal to support our corporate practice with entity formations, corporate governance, and transactional matters.',
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
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build your legal career with a firm that values excellence, integrity, and professional growth.
          </p>
          <div className="flex justify-center space-x-8 text-yellow-500">
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-gray-300">Legal Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm text-gray-300">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-gray-300">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Why Choose Shehab Law Firm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to creating an environment where legal professionals can thrive, grow, and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Current Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect opportunity to advance your legal career.
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
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">{job.department}</span>
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
                      View Details
                    </button>
                    <button className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                      Quick Apply
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best candidates while respecting your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application and resume through our career portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600">Our HR team reviews your qualifications and experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Interview with department leaders and team members</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-gray-600">Join our team and begin your career journey with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Ready to Start Your Career with Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see the perfect position? We're always interested in hearing from talented legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Send Resume
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact HR
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