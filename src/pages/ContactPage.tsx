import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, Calendar, ArrowRight } from '../icons';
import { useLanguage } from '../context/LanguageContext';
import GoogleMap from '../components/GoogleMap';
import emailjs from '../utils/emailjs';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
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
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    try {
      // Prepare template parameters
      const templateParams = {
        ...EMAILJS_CONFIG.TEMPLATE_PARAMS,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        urgency: formData.urgency,
        preferred_contact: formData.preferredContact,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setIsSubmitted(true);
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

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const offices = [
    {
      name: t('office.main'),
      address: '123 Business District\nLegal Plaza, Suite 500\nNew York, NY 10005',
      phone: '+1 (234) 567-8900',
      fax: '+1 (234) 567-8901',
      email: 'info@shehablaw.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
      parking: 'Garage parking available',
      publicTransit: 'Subway: 4, 5, 6 to Wall St'
    }
  ];

  const quickLinks = [
    { title: t('common.scheduleConsultation'), description: t('common.bookMeeting'), action: t('common.scheduleNow') },
    { title: t('common.emergencyHelp'), description: t('common.emergencyDesc'), action: t('common.callEmergency') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Logo Background - Center */}
        <div className="absolute top-1/2  left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="/logo-law.png" 
            alt="Shehab Law Firm Logo Background" 
            className="w-full h-full object-contain filter blur-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">{t('contact.contactUs')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center mx-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">{t('contact.emergencySupport')}</div>
            </div>
            <div className="text-center mx-6">
              <div className="text-2xl font-bold">{t('contact.free')}</div>
              <div className="text-sm text-gray-300">{t('contact.initialConsultation')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{t('contact.sameDay')}</div>
              <div className="text-sm text-gray-300">{t('contact.responseGuarantee')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{t('contact.quickActions')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact.quickActionsDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickLinks.map((link, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col">
                {/* Icon and Content */}
                <div className="text-center mb-6 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Calendar className="w-8 h-8 text-white" />}
                    {index === 1 && <Phone className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{link.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Logo Background - Center */}
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{t('form.message')}</h2>
                <p className="text-gray-600">
                  {t('contact.form.instructions')}
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('page.messageSentSuccess')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('page.messageSentThankYou')}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <strong>{t('page.whatsNext')}</strong><br />
                    • {t('page.whatsNext.review')}<br />
                    • {t('page.whatsNext.assign')}<br />
                    • {t('page.whatsNext.contact')}
                  </div>
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
                        placeholder={t('form.placeholder.johnSmith')}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('form.placeholder.companyName')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder={t('form.placeholder.briefDescription')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.urgency')}
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="Normal">{t('form.priority.normal')}</option>
                        <option value="Urgent">{t('form.priority.urgent')}</option>
                        <option value="Emergency">{t('form.priority.emergency')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.preferredContact')}
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="Email">{t('form.contact.email')}</option>
                        <option value="Phone">{t('form.contact.phone')}</option>
                        <option value="Text">{t('form.contact.text')}</option>
                      </select>
                    </div>
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
                      placeholder={t('form.placeholder.detailedDescription')}
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <strong>{t('contact.privacy.title')}</strong> {t('contact.privacy.body')}
                  </div>

                  {submitError && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-white ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-slate-900 hover:bg-slate-800 transform hover:scale-105'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.form.submit')}
                      </>
                    )}
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
                        <div className="font-medium text-gray-900 mb-1">{t('contact.address')}</div>
                        <div className="text-gray-600 text-sm whitespace-pre-line">{office.address}</div>
                        <div className="text-gray-500 text-xs mt-2">
                          {office.parking} • {office.publicTransit}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">{t('contact.phoneAndFax')}</div>
                        <div className="space-y-1">
                          <a href={`tel:${office.phone}`} className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                            {office.phone}
                          </a>
                          <div className="text-gray-500 text-sm">{office.fax}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">{t('contact.email')}</div>
                        <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-brand-600 transition-colors text-sm">
                          {office.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-brand-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">{t('contact.businessHours')}</div>
                        <div className="text-gray-600 text-sm whitespace-pre-line">{t('contact.businessHoursValue')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  {t('common.emergencyHelp')}
                </h3>
                <p className="text-red-700 mb-4">
                  {t('office.emergencyDesc')}
                </p>
                <div className="space-y-2">
                  <a href="tel:+1234567899" className="flex items-center text-red-800 font-semibold hover:text-red-900">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (234) 567-8999 ({t('office.emergency')})
                  </a>
                <div className="text-gray-600 text-sm whitespace-pre-line">{t('office.address.main')}</div>
                    {t('office.emergencyDesc')}
                  {t('office.accessibility')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('contact.visitOffices')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('page.interactiveMapNote')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <GoogleMap height="500px" className="w-full" />
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ContactPage;