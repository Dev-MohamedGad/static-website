import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from '../icons';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About Us', href: 'about' },
    { label: 'Expertise', href: 'expertise' },
    { label: 'Clients', href: 'clients' },
    { label: 'Career', href: 'career' },
    { label: 'Contact', href: 'contact' }
  ];

  const practiceAreas = [
    'Dispute Resolution',
    'Corporate & Commercial Law',
    'Labor & Employment',
    'Real Estate',
    'Intellectual Property',
    'Taxation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">Shehab & El Awamy</div>
                <div className="text-sm text-gray-400">Legal Excellence</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              An Egyptian law firm bringing together highly qualified legal professionals 
              with diverse local and international backgrounds, serving clients across multiple sectors.
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
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <button
                    onClick={() => setCurrentPage('expertise')}
                    className="text-gray-300 hover:text-brand-400 transition-colors duration-200 text-sm"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
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
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shehab Law Firm. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Legal Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;