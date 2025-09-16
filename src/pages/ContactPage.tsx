import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, Calendar } from '../icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'Normal',
    preferredContact: 'Email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        urgency: 'Normal',
        preferredContact: 'Email'
      });
    }, 3000);
  };

  const offices = [
    {
      name: 'Main Office',
      address: '123 Business District\nLegal Plaza, Suite 500\nNew York, NY 10005',
      phone: '+1 (234) 567-8900',
      fax: '+1 (234) 567-8901',
      email: 'info@shehablaw.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
      parking: 'Garage parking available',
      publicTransit: 'Subway: 4, 5, 6 to Wall St'
    },
    {
      name: 'Downtown Branch',
      address: '456 Corporate Center\nTower B, Floor 15\nNew York, NY 10006',
      phone: '+1 (234) 567-8901',
      fax: '+1 (234) 567-8902',
      email: 'downtown@shehablaw.com',
      hours: 'Monday - Friday: 8:30 AM - 5:30 PM\nSaturday: By appointment\nSunday: Closed',
      parking: 'Valet parking available',
      publicTransit: 'Subway: R, W to Cortlandt St'
    }
  ];

  const quickLinks = [
    { title: 'Schedule Consultation', description: 'Book a meeting with our legal experts', action: 'Schedule Now' },
    { title: 'Emergency Legal Help', description: '24/7 urgent legal assistance', action: 'Call Emergency Line' },
    { title: 'Client Portal', description: 'Access your case information and documents', action: 'Login to Portal' },
    { title: 'Payment Options', description: 'View billing and make payments online', action: 'Manage Billing' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to discuss your legal needs? Our experienced team is here to help you navigate complex legal challenges.
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-sm text-gray-300">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Same Day</div>
              <div className="text-sm text-gray-300">Response Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <button className="text-brand-600 hover:text-brand-700 font-semibold text-sm">
                  {link.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours. For urgent matters, 
                  please call our emergency line.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. A member of our team will review your message and 
                    respond within 24 hours.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <strong>What's Next?</strong><br />
                    • We'll review your case details<br />
                    • Assign the appropriate attorney<br />
                    • Contact you to schedule a consultation
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="Brief description of your legal matter"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="Normal">Normal</option>
                        <option value="Urgent">Urgent (within 48 hours)</option>
                        <option value="Emergency">Emergency (same day)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="Text">Text Message</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please describe your legal matter in detail, including any relevant dates, parties involved, and specific questions you have..."
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <strong>Privacy Notice:</strong> All information you provide is confidential and protected by attorney-client privilege. 
                    We will not share your information with third parties without your consent.
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">{office.name}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Address</div>
                        <div className="text-gray-600 text-sm whitespace-pre-line">{office.address}</div>
                        <div className="text-gray-500 text-xs mt-2">
                          {office.parking} • {office.publicTransit}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Phone & Fax</div>
                        <div className="space-y-1">
                          <a href={`tel:${office.phone}`} className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                            {office.phone} (Main)
                          </a>
                          <div className="text-gray-500 text-sm">{office.fax} (Fax)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Email</div>
                        <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-brand-600 transition-colors text-sm">
                          {office.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Business Hours</div>
                        <div className="text-gray-600 text-sm whitespace-pre-line">Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday: 9:00 AM - 2:00 PM\nSaturday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  Emergency Legal Assistance
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent legal matters that require immediate attention outside of business hours.
                </p>
                <div className="space-y-2">
                  <a href="tel:+1234567899" className="flex items-center text-red-800 font-semibold hover:text-red-900">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (234) 567-8999 (24/7 Emergency Line)
                  </a>
                <div className="text-gray-600 text-sm whitespace-pre-line">Legal Plaza, Downtown Cairo\nCairo, Egypt\nP.O. Box 12345</div>
                    Available for existing clients and urgent new matters requiring immediate legal intervention.
                  Metro accessible • Parking available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Visit Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the heart of New York's financial district with easy access to public transportation.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <Globe className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">
                Integrated Google Maps showing both office locations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Directions to Main Office
                </button>
                <button className="border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Directions to Downtown Branch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-serif">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore more ways to connect with our legal team and access helpful resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-brand-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Online Scheduling</h3>
              <p className="text-gray-300 mb-6">
                Use our online calendar to schedule consultations at your convenience.
              </p>
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Online
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Mail className="w-12 h-12 text-brand-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Stay informed with legal updates and insights delivered to your inbox.
              </p>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-brand-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Client Portal</h3>
              <p className="text-gray-300 mb-6">
                Access case updates, documents, and billing information securely online.
              </p>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Access Portal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;