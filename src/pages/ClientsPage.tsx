import React from 'react';
import { Star, Quote, Building, Users, TrendingUp } from 'lucide-react';

const ClientsPage: React.FC = () => {
  const clientCategories = [
    {
      icon: Building,
      title: 'Fortune 500 Companies',
      description: 'Leading multinational corporations trust us with their most complex legal matters.',
      count: '50+'
    },
    {
      icon: Users,
      title: 'Small & Medium Businesses',
      description: 'Growing companies rely on our expertise to navigate legal challenges and opportunities.',
      count: '500+'
    },
    {
      icon: TrendingUp,
      title: 'Startups & Entrepreneurs',
      description: 'Innovation-driven companies choose us for strategic legal guidance and support.',
      count: '200+'
    }
  ];

  const testimonials = [
    {
      quote: "Shehab Law Firm has been our trusted legal partner for over a decade. Their deep understanding of corporate law and strategic thinking have been invaluable to our success.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Global Manufacturing Corp",
      avatar: "SJ",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      quote: "The expertise and dedication of the Shehab team helped us navigate a complex merger that transformed our business. Their attention to detail and strategic guidance were exceptional.",
      author: "Michael Chen",
      position: "General Counsel",
      company: "Tech Innovations Inc",
      avatar: "MC",
      rating: 5,
      industry: "Technology"
    },
    {
      quote: "As a startup, we needed legal counsel who understood our vision and could help us scale efficiently. Shehab Law Firm delivered beyond our expectations.",
      author: "Emily Rodriguez",
      position: "Founder & CEO",
      company: "GreenTech Solutions",
      avatar: "ER",
      rating: 5,
      industry: "Clean Energy"
    },
    {
      quote: "Their employment law expertise saved us significant costs and helped us build a compliant, productive workplace. Highly recommended for any business.",
      author: "David Thompson",
      position: "HR Director",
      company: "Financial Services Group",
      avatar: "DT",
      rating: 5,
      industry: "Financial Services"
    },
    {
      quote: "The real estate transaction seemed impossible until Shehab Law Firm got involved. They turned a potential disaster into a successful deal.",
      author: "Lisa Wang",
      position: "Development Manager",
      company: "Premium Properties",
      avatar: "LW",
      rating: 5,
      industry: "Real Estate"
    },
    {
      quote: "Outstanding intellectual property services. They protected our innovations and helped us build a strong IP portfolio that drives our competitive advantage.",
      author: "James Martinez",
      position: "CTO",
      company: "Biotech Innovations",
      avatar: "JM",
      rating: 5,
      industry: "Biotechnology"
    }
  ];

  const clients = [
    { name: 'Global Manufacturing', logo: 'GM', industry: 'Manufacturing' },
    { name: 'Tech Innovations', logo: 'TI', industry: 'Technology' },
    { name: 'Financial Group', logo: 'FG', industry: 'Finance' },
    { name: 'Healthcare Systems', logo: 'HS', industry: 'Healthcare' },
    { name: 'Energy Solutions', logo: 'ES', industry: 'Energy' },
    { name: 'Retail Network', logo: 'RN', industry: 'Retail' },
    { name: 'Construction Corp', logo: 'CC', industry: 'Construction' },
    { name: 'Media Group', logo: 'MG', industry: 'Media' },
    { name: 'Transport Co', logo: 'TC', industry: 'Transportation' },
    { name: 'Education Partners', logo: 'EP', industry: 'Education' },
    { name: 'Pharma Industries', logo: 'PI', industry: 'Pharmaceuticals' },
    { name: 'Green Technologies', logo: 'GT', industry: 'Cleantech' }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Financial Services', 'Manufacturing',
    'Real Estate', 'Energy', 'Retail', 'Construction', 'Media & Entertainment',
    'Transportation', 'Education', 'Pharmaceuticals', 'Biotechnology',
    'Aerospace', 'Automotive', 'Telecommunications'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Our Clients</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Trusted by leading organizations across industries for exceptional legal services and strategic guidance.
          </p>
          <div className="flex justify-center space-x-8 text-yellow-500">
            <div className="text-center">
              <div className="text-3xl font-bold">750+</div>
              <div className="text-sm text-gray-300">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">16</div>
              <div className="text-sm text-gray-300">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From global corporations to emerging startups, we provide tailored legal solutions for organizations of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {clientCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{category.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about their experiences working with Shehab Law Firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-yellow-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>

                {/* Industry Tag */}
                <div className="mt-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Trusted Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of the organizations that trust us with their legal needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-yellow-600 group-hover:to-yellow-700 transition-all duration-300 mb-3">
                  <span className="text-white font-bold text-lg">{client.logo}</span>
                </div>
                <div className="text-sm text-gray-600 text-center">{client.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse expertise spans across multiple industries, allowing us to provide specialized legal solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white font-medium">{industry}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-6 font-serif">Ready to Join Our Client Family?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the difference that professional, dedicated legal representation can make for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn About Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;