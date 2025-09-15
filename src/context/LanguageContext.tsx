import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.expertise': 'Expertise',
    'nav.clients': 'Clients',
    'nav.career': 'Career',
    'nav.media': 'Media',
    'nav.library': 'Library',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Shehab & El Awamy',
    'hero.subtitle': 'Your trusted legal partner',
    'hero.cta': 'Learn More About Us',
    
    // About Preview
    'about.title': 'About Our Firm',
    'about.description': 'Shehab & El Awamy is an Egyptian law firm that brings together highly qualified legal professionals with diverse local and international backgrounds, delivering innovative solutions across multiple sectors.',
    'about.cta': 'Learn More',
    
    // Expertise
    'expertise.title': 'Areas of Practice',
    'expertise.subtitle': 'Comprehensive legal services across multiple practice areas',
    
    // Statistics
    'stats.years': 'Years in Business',
    'stats.contracts': 'Contracts Closed',
    'stats.cases': 'Court Cases Won',
    'stats.clients': 'Clients Served',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our legal experts',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.expertise': 'خبراتنا',
    'nav.clients': 'عملاؤنا',
    'nav.career': 'الوظائف',
    'nav.media': 'الإعلام',
    'nav.library': 'المكتبة',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'شهاب والعوامي للمحاماة',
    'hero.subtitle': 'شريكك القانوني الموثوق',
    'hero.cta': 'تعرف علينا أكثر',
    
    // About Preview
    'about.title': 'عن مكتبنا',
    'about.description': 'شهاب والعوامي مكتب محاماة مصري يجمع بين المهنيين القانونيين المؤهلين تأهيلاً عالياً ذوي خلفيات محلية ودولية متنوعة، ويقدم حلولاً مبتكرة عبر قطاعات متعددة.',
    'about.cta': 'اعرف المزيد',
    
    // Expertise
    'expertise.title': 'مجالات الممارسة',
    'expertise.subtitle': 'خدمات قانونية شاملة عبر مجالات ممارسة متعددة',
    
    // Statistics
    'stats.years': 'سنوات في العمل',
    'stats.contracts': 'عقود تم إنجازها',
    'stats.cases': 'قضايا محكمة تم كسبها',
    'stats.clients': 'عملاء تم خدمتهم',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع خبرائنا القانونيين',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};