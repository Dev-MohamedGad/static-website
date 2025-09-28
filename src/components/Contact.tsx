import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from '../icons';
import { useLanguage } from '../context/LanguageContext';
import GoogleMap from './GoogleMap';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const officeLocations = [
    {
      name: t('office.main'),
      address: '123 Business District\nLegal Plaza, Suite 500\nCity, State 12345',
      phone: '+1 (234) 567-8900',
      email: 'info@shehablaw.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM'
    },
    {
      name: t('office.downtown'),
      address: '456 Corporate Center\nTower B, Floor 15\nCity, State 12346',
      phone: '+1 (234) 567-8901',
      email: 'downtown@shehablaw.com',
      hours: 'Mon-Fri: 8:30 AM - 5:30 PM'
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
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-brand-200">
              <img
                src="/logo-law.png"
                alt="Shehab Law Firm Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                {t('form.message')}
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('page.messageSent')}</h4>
                  <p className="text-gray-600">{t('page.messageSentThankYou')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('form.placeholder.fullName')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('form.placeholder.johnExample')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder={t('form.placeholder.phoneNumber')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder={t('form.placeholder.legalNeeds')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {officeLocations.map((office, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden ${office.name === t('office.main') ? 'bg-gradient-to-br from-brand-50 to-white' : ''}`}>
                {/* Logo Background for Main Office */}
                {office.name === t('office.main') && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 opacity-15">
                    <img 
                      src="/logo-law.png" 
                      alt="Shehab Law Firm Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-brand-600 mt-1 mr-3 flex-shrink-0" />
                    <div className="text-gray-600 text-sm whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-gray-600 hover:text-brand-600 transition-colors text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-gray-600 hover:text-brand-600 transition-colors text-sm"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-brand-600 mt-1 mr-3 flex-shrink-0" />
                    <div className="text-gray-600 text-sm whitespace-pre-line">
                      {office.hours}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">{t('page.emergencyContact')}</h3>
              <p className="text-red-700 text-sm mb-4">
                {t('office.emergencyDesc')}
              </p>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-3" />
                <a 
                  href="tel:+1234567899"
                  className="text-red-800 font-semibold hover:text-red-900"
                >
                  +1 (234) 567-8999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-serif">
              {t('contact.visitOffices')}
            </h3>
            <GoogleMap height="500px" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;