import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    { name: 'Global Corp', logo: 'GC' },
    { name: 'Tech Solutions', logo: 'TS' },
    { name: 'Financial Partners', logo: 'FP' },
    { name: 'Real Estate Group', logo: 'REG' },
    { name: 'Manufacturing Co', logo: 'MC' },
    { name: 'Healthcare Systems', logo: 'HS' },
    { name: 'Energy Solutions', logo: 'ES' },
    { name: 'Retail Network', logo: 'RN' },
    { name: 'Investment Fund', logo: 'IF' },
    { name: 'Construction Ltd', logo: 'CL' },
    { name: 'Media Group', logo: 'MG' },
    { name: 'Transport Co', logo: 'TC' }
  ];

  const testimonials = [
    {
      quote: "Shehab Law Firm provided exceptional legal guidance during our merger. Their expertise and dedication were instrumental in achieving a successful outcome.",
      author: "Sarah Johnson",
      position: "CEO, Global Corp",
      avatar: "SJ"
    },
    {
      quote: "The team's deep understanding of corporate law and their strategic approach helped us navigate complex regulatory challenges with confidence.",
      author: "Michael Chen",
      position: "General Counsel, Tech Solutions",
      avatar: "MC"
    },
    {
      quote: "Outstanding service and results. They truly understand our business needs and provide practical, effective legal solutions.",
      author: "David Rodriguez",
      position: "CFO, Financial Partners",
      avatar: "DR"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve a diverse portfolio of clients across industries, 
            from startups to Fortune 500 companies.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-600/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-brand-600 group-hover:to-brand-700 transition-all duration-300">
                <span className="text-white font-bold text-lg">{client.logo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-600/20"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-brand-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-serif">
              Join Our Satisfied Clients
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the difference that professional legal representation can make 
              for your business or personal legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Become a Client
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;