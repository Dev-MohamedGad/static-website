import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from '../icons';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

interface NavigationItem {
  key: string;
  label: string;
  href: string;
  dropdown?: any[] | null;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Show header when at top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide header when scrolling down (after 50px) - reduced threshold for mobile
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 100); // Reduced delay for better mobile responsiveness
        setScrollTimeout(timeout);
      } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
        // Keep header hidden when scrolling up (after 50px)
        setIsVisible(false);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

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

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [hoverTimeout, scrollTimeout]);

  const handleDropdownClick = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
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

  const navigation: NavigationItem[] = [
    { key: 'home', label: t('nav.home'), href: 'home', dropdown: null },
    {
      key: 'expertise',
      label: t('nav.expertise'),
      href: 'expertise',
      dropdown: null
    },
    { key: 'clients', label: t('nav.clients'), href: 'clients', dropdown: null },
    { key: 'media', label: t('nav.media'), href: 'media', dropdown: null },
    { key: 'library', label: t('nav.library'), href: 'library', dropdown: null },
    { key: 'faq', label: t('nav.faq'), href: 'faq', dropdown: null },
    { key: 'contact', label: t('nav.contact'), href: 'contact', dropdown: null }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'bg-transparent  shadow-2xl border-b border-white/20' : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 bg-transparent">
            <button onClick={() => setCurrentPage('home')} className="focus:outline-none">
              <Logo />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden  rounded-xl px-2 mx-auto  lg:flex  items-center ">
            {navigation.map((item) => (
              <div
                key={item.key}
                className=""
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
                  className={`flex items-center px-4 py-2  font-extrabold transition-all duration-300 ease-out rounded-xl backdrop-blur-sm transform hover:scale-105 ${
                    currentPage === item.href
                      ? currentPage === 'home' 
                        ? 'text-white bg-white/20 shadow-lg border border-white/30 backdrop-blur-md'
                        : 'text-gray-800 bg-white/20 shadow-lg border border-white/30 backdrop-blur-md'
                      : currentPage === 'home'
                        ? 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-lg hover:border hover:border-white/20'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-white/10 hover:shadow-lg hover:border hover:border-white/20'
                  }`}
                  style={{
                    animation: `navItemSlide 0.6s ease-out ${0.2 + (navigation.indexOf(item) * 0.1)}s both`
                  }}
                >
                  {item.label}
                 
                </button>

                {/* Enhanced Dropdown Menu with Better Hover Handling */}
                {item.dropdown && activeDropdown === item.key && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-4 z-50 animate-in slide-in-from-top-2 duration-300"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {/* Invisible bridge to prevent gap issues */}
                    <div className="absolute -top-1 left-0 right-0 h-1 bg-transparent"></div>
                    
                    {/* Dropdown Header */}
                    <div className="px-6 py-3 border-b border-gray-200/50">
                      <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                        {item.label}
                      </h3>
                    </div>
                    
                    {/* Dropdown Items */}
                    <div className="py-2">
                      {item.dropdown && item.dropdown.map((subItem: any) => (
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
                          className="flex items-center justify-between w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-brand-50 hover:to-accent-50 hover:text-brand-600 transition-all duration-200 group transform hover:translate-x-1"
                        >
                          <span className="font-medium">{subItem.label}</span>
                          <div className="w-2 h-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110"></div>
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
              className={`flex items-center px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out rounded-xl backdrop-blur-sm hover:bg-white/10 hover:shadow-lg hover:border hover:border-white/20 transform hover:scale-105 ${
                currentPage === 'home' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <Globe className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
              <span className="font-semibold">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`inline-flex items-center justify-center p-3 rounded-xl hover:bg-gray-100/20 transition-all duration-300 ease-out transform hover:scale-110 focus:outline-none backdrop-blur-sm border border-gray-200/30 ${
                currentPage === 'home' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <Globe className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-4 rounded-xl hover:bg-gray-100/20 transition-all duration-300 ease-out transform hover:scale-110 focus:outline-none backdrop-blur-sm border border-gray-200/30 ${
                currentPage === 'home' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 animate-in fade-in-0 duration-200" />
                ) : (
                  <Menu className="h-6 w-6 animate-in fade-in-0 duration-200" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-300 rounded-b-2xl mx-4 mb-4">
            <div className="px-6 py-8 space-y-4">
              {navigation.map((item, index) => (
                <div key={item.key} className="space-y-1">
                  <button
                    onClick={() => {
                      setCurrentPage(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between w-full text-left px-6 py-5 text-lg font-bold rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 ${
                      currentPage === item.href
                        ? 'text-white bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg border border-gray-300'
                        : 'text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 hover:shadow-lg border border-gray-200'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="font-semibold">{item.label}</span>
                    {currentPage === item.href && (
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;