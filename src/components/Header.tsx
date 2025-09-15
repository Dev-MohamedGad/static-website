import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { key: 'home', label: t('nav.home'), href: 'home' },
    {
      key: 'about',
      label: t('nav.about'),
      href: 'about',
      dropdown: [
        { label: 'Who We Are', href: 'about' },
        { label: 'Our Values', href: 'about' },
        { label: 'Our Team', href: 'about' }
      ]
    },
    {
      key: 'expertise',
      label: t('nav.expertise'),
      href: 'expertise',
      dropdown: [
        { label: 'Dispute Resolution', href: 'expertise' },
        { label: 'Corporate & Commercial Law', href: 'expertise' },
        { label: 'Labor & Employment', href: 'expertise' },
        { label: 'Real Estate', href: 'expertise' },
        { label: 'Intellectual Property', href: 'expertise' },
        { label: 'Taxation', href: 'expertise' },
        { label: 'Capital Market & M&A', href: 'expertise' },
        { label: 'Arbitration', href: 'expertise' }
      ]
    },
    { key: 'clients', label: t('nav.clients'), href: 'clients' },
    { key: 'career', label: t('nav.career'), href: 'career' },
    {
      key: 'media',
      label: t('nav.media'),
      href: 'media',
      dropdown: [
        { label: 'News & Highlights', href: 'media' },
        { label: 'Photos & Videos', href: 'media' }
      ]
    },
    {
      key: 'library',
      label: t('nav.library'),
      href: 'library',
      dropdown: [
        { label: 'Blog', href: 'library' },
        { label: 'Publications', href: 'library' }
      ]
    },
    { key: 'faq', label: t('nav.faq'), href: 'faq' },
    { key: 'contact', label: t('nav.contact'), href: 'contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => setCurrentPage('home')} className="focus:outline-none">
              <Logo />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setCurrentPage(item.href)}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.href
                      ? 'text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => {
                          setCurrentPage(subItem.href);
                          setActiveDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-150"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium ${
                      currentPage === item.href
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                  
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => {
                            setCurrentPage(subItem.href);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <button
                onClick={toggleLanguage}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;