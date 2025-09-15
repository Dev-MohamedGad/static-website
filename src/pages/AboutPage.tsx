import React from 'react';
import { Users, Award, Scale, Target, Heart, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We prioritize integrity, efficiency, and responsiveness in all our dealings, maintaining the highest ethical standards.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to exceeding client expectations by providing transparent, determined, and credible legal services.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'We are deeply committed to our clients, driven by a thorough understanding of both local and international laws.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We employ innovative methods to keep pace with the evolving governmental and legal landscape.'
    }
  ];

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">About Shehab & El Awamy</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            An Egyptian law firm delivering innovative legal solutions with integrity and professional excellence.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Who We Are</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Shehab & El Awamy is an Egyptian law firm that brings together highly qualified legal 
                  professionals with diverse local and international backgrounds. Founded to provide both 
                  legal services and consultancy, we employ innovative methods to keep pace with the evolving 
                  governmental and legal landscape.
                </p>
                <p>
                  We serve clients across multiple sectors, including Sports, Construction, Energy, Banking, 
                  Oil and Gas, Heavy Industries, Hospitals, Information Technology, Communications, 
                  Pharmaceuticals, Media, and Transportation. Our firm operates through specialized teams 
                  covering various areas of legal practice, allowing us to deliver high-quality, reliable, 
                  and efficient legal services.
                </p>
                <p>
                  The success of Shehab & El Awamy is driven by the experience, dedication, and strong 
                  relationships of our team members with key judicial, administrative, and organizational 
                  authorities in Egypt. We are committed to delivering swift, strategic business solutions 
                  while building lasting relationships with our clients.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Law firm office"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-yellow-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Team</h2>
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
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {member.image}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-yellow-600 font-semibold mb-1">{member.position}</div>
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
            <h2 className="text-4xl font-bold mb-6 font-serif">Awards & Recognition</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading legal organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Best Law Firm 2023</h3>
              <p className="text-gray-300">Legal Excellence Awards</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Top 50 Law Firms</h3>
              <p className="text-gray-300">National Legal Directory</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-2xl">
              <Scale className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence in Corporate Law</h3>
              <p className="text-gray-300">Business Law Journal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;