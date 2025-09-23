import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe, Calendar } from '../icons';
import { useLanguage } from '../context/LanguageContext';

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
      name: t('office.main'),
      address: '123 Business District\nLegal Plaza, Suite 500\nNew York, NY 10005',
      phone: '+1 (234) 567-8900',
      fax: '+1 (234) 567-8901',
      email: 'info@shehablaw.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
      parking: 'Garage parking available',
      publicTransit: 'Subway: 4, 5, 6 to Wall St'
    },
    {
      name: t('office.downtown'),
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
    { title: t('common.scheduleConsultation'), description: t('common.bookMeeting'), action: t('common.scheduleNow') },
    { title: t('common.emergencyHelp'), description: t('common.emergencyDesc'), action: t('common.callEmergency') },
    { title: t('common.clientPortal'), description: t('common.clientPortalDesc'), action: t('common.loginPortal') },
    { title: t('contact.paymentOptions'), description: t('contact.paymentDesc'), action: t('contact.manageBilling') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">{t('contact.contactUs')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="flex justify-center space-x-8 text-brand-500">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">{t('contact.emergencySupport')}</div>
            </div>
            <div className="text-center">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">{t('contact.visitOffices')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('page.interactiveMapNote')}
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <Globe className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{t('contact.interactiveMap')}</h3>
              <p className="text-gray-600 mb-4">
                {t('page.interactiveMapNote')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('office.directions.main')}
                </button>
                <button className="border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('office.directions.downtown')}
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
            <h2 className="text-4xl font-bold mb-6 font-serif">{t('contact.additionalResources')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.additionalResourcesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-brand-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{t('contact.onlineScheduling')}</h3>
              <p className="text-gray-300 mb-6">
                {t('common.bookMeeting')}
              </p>
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                {t('common.scheduleOnline')}
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Mail className="w-12 h-12 text-brand-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{t('contact.newsletter')}</h3>
              <p className="text-gray-300 mb-6">
                {t('news.newsletter.disclaimer')}
              </p>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                {t('news.newsletter.subscribe')}
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-brand-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{t('common.clientPortal')}</h3>
              <p className="text-gray-300 mb-6">
                {t('common.clientPortalDesc')}
              </p>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                {t('common.loginPortal')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;