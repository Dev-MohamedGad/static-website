import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from '../icons';
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
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          setHoverTimeout(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [hoverTimeout]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleDropdownClick = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleMobileDropdownClick = (key: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === key ? null : key);
  };

  const handleMouseEnter = (key: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

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
                className="relative dropdown-container"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.key)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      handleDropdownClick(item.key);
                    } else {
                      setCurrentPage(item.href);
                    }
                  }}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    currentPage === item.href
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.key ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>

                {/* Enhanced Dropdown Menu with Better Hover Handling */}
                {item.dropdown && activeDropdown === item.key && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {/* Invisible bridge to prevent gap issues */}
                    <div className="absolute -top-1 left-0 right-0 h-1 bg-transparent"></div>
                    
                    {/* Dropdown Header */}
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {item.label}
                      </h3>
                    </div>
                    
                    {/* Dropdown Items */}
                    <div className="py-1">
                      {item.dropdown.map((subItem, index) => (
                        <button
                          key={subItem.label}
                          onClick={() => {
                            setCurrentPage(subItem.href);
                            setActiveDropdown(null);
                            if (hoverTimeout) {
                              clearTimeout(hoverTimeout);
                              setHoverTimeout(null);
                            }
                          }}
                          className="flex items-center justify-between w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-all duration-150 group"
                        >
                          <span>{subItem.label}</span>
                          <div className="w-2 h-2 bg-brand-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors duration-200"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.key} className="space-y-1">
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        handleMobileDropdownClick(item.key);
                      } else {
                        setCurrentPage(item.href);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      currentPage === item.href
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileActiveDropdown === item.key ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  {item.dropdown && mobileActiveDropdown === item.key && (
                    <div className="ml-4 mt-2 space-y-1 border-l-2 border-brand-200 pl-4">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => {
                            setCurrentPage(subItem.href);
                            setIsMobileMenuOpen(false);
                            setMobileActiveDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors duration-150"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors duration-200"
                >
                  <Globe className="h-4 w-4 mr-3" />
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;