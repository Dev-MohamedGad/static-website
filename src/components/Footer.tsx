import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from '../icons';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { label: t('footer.nav.home'), href: 'home' },
    { label: t('footer.nav.about'), href: 'about' },
    { label: t('footer.nav.expertise'), href: 'expertise' },
    { label: t('footer.nav.clients'), href: 'clients' },
    { label: t('footer.nav.career'), href: 'career' },
    { label: t('footer.nav.contact'), href: 'contact' }
  ];

  const practiceAreas = [
    { label: t('footer.practice.dispute'), key: 'dispute' },
    { label: t('footer.practice.corporate'), key: 'corporate' },
    { label: t('footer.practice.labor'), key: 'labor' },
    { label: t('footer.practice.realestate'), key: 'realestate' },
    { label: t('footer.practice.intellectual'), key: 'intellectual' },
    { label: t('footer.practice.taxation'), key: 'taxation' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white relative overflow-hidden">
      {/* Logo Background - Center */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-25 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/logo-law.png" 
          alt="Shehab Law Firm Logo Background" 
          className="w-full h-full object-contain filter blur-none"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-brand-600 to-accent-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r mx-2 from-brand-300 to-accent-300 bg-clip-text text-transparent">
                  {t('footer.companyName')}
                </div>
                <div className="text-sm mx-2 text-gray-300">{t('footer.tagline')}</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => setCurrentPage(link.href)}
                    className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.practiceAreas')}</h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.key}>
                  <button
                    onClick={() => setCurrentPage('expertise')}
                    className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm"
                  >
                    {area.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  123 Business District<br />
                  Legal Plaza, Suite 500<br />
                  City, State 12345
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-300 hover:text-brand-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <a href="mailto:info@shehablaw.com" className="text-sm text-gray-300 hover:text-brand-400 transition-colors">
                  info@shehablaw.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm mx-2 text-gray-400">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 mx-2 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-400 mx-2 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-brand-400 mx-2 transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-brand-400 mx-2 transition-colors">{t('footer.legal')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;