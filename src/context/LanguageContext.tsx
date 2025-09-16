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
    'hero.title.primary': 'Shehab',
    'hero.title.secondary': '& El Awamy',
    'hero.subtitle': 'Your trusted legal partner',
    'hero.description': 'An Egyptian law firm bringing together highly qualified legal professionals with diverse local and international backgrounds, delivering innovative solutions across multiple sectors.',
    'hero.cta': 'Learn More About Us',
    'hero.cta.secondary': 'Schedule Consultation',
    'hero.stats.years': 'Years Experience',
    'hero.stats.cases': 'Cases Won',
    'hero.stats.clients': 'Clients Served',
    'hero.stats.success': 'Success Rate',
    
    // About Preview
    'about.title': 'About Our Firm',
    'about.description': 'Shehab & El Awamy is an Egyptian law firm that brings together highly qualified legal professionals with diverse local and international backgrounds, delivering innovative solutions across multiple sectors.',
    'about.cta': 'Learn More',
    'about.p1': 'Shehab & El Awamy is an Egyptian law firm that brings together highly qualified legal professionals with diverse local and international backgrounds. Founded to provide both legal services and consultancy, we employ innovative methods to keep pace with the evolving governmental and legal landscape.',
    'about.p2': 'We are fully attuned to the daily challenges faced by corporations and are committed to delivering swift, strategic business solutions. Our lawyers work closely with clients, building trust, commitment, and loyalty by offering innovative solutions that drive success across multiple sectors including Banking, Oil and Gas, Heavy Industries, Healthcare, Information Technology, Communications, and Media.',
    'about.stats.years': 'Years',
    'about.stats.cases': 'Cases',
    
    // Expertise
    'expertise.title': 'Areas of Practice',
    'expertise.subtitle': 'Comprehensive legal services across multiple practice areas',
    'expertise.learnMore': 'Learn More',
    'expertise.cta.title': 'Need Legal Assistance?',
    'expertise.cta.text': 'Our experienced legal team is ready to help you navigate complex legal challenges and achieve the best possible outcomes.',
    'expertise.cta.schedule': 'Schedule Consultation',
    'expertise.cta.contact': 'Contact Our Team',

    // Expertise areas
    'expertise.dispute.title': 'Dispute Resolution',
    'expertise.dispute.desc': 'Comprehensive litigation services covering civil, commercial, and criminal cases with expertise in Egyptian courts.',
    'expertise.dispute.f1': 'Civil & Commercial Litigation',
    'expertise.dispute.f2': 'Criminal Defense',
    'expertise.dispute.f3': 'Alternative Dispute Resolution',

    'expertise.corporate.title': 'Corporate & Commercial Law',
    'expertise.corporate.desc': 'Fast and customized incorporation services for all types of commercial companies in Egypt and abroad.',
    'expertise.corporate.f1': 'Company Formation',
    'expertise.corporate.f2': 'Corporate Secretarial Services',
    'expertise.corporate.f3': 'Commercial Transactions',

    'expertise.employment.title': 'Employment Law',
    'expertise.employment.desc': 'Expert advice on employment laws, contract drafting, and regulatory compliance for Egyptian labor regulations.',
    'expertise.employment.f1': 'Employment Contracts',
    'expertise.employment.f2': 'Labor Policy Development',
    'expertise.employment.f3': 'Regulatory Compliance',

    'expertise.realestate.title': 'Real Estate',
    'expertise.realestate.desc': 'Real estate registration, sale and purchase agreements, and legal advice for commercial, residential, and touristic projects.',
    'expertise.realestate.f1': 'Property Registration',
    'expertise.realestate.f2': 'Sale & Purchase Agreements',
    'expertise.realestate.f3': 'Title Verification',

    'expertise.tmt.title': 'Technology, Media & Telecommunications',
    'expertise.tmt.desc': 'Specialized services in technology, media, and telecommunications with focus on licensing and regulatory compliance.',
    'expertise.tmt.f1': 'TMT Licensing',
    'expertise.tmt.f2': 'Regulatory Compliance',
    'expertise.tmt.f3': 'E-commerce Law',

    'expertise.tax.title': 'Taxation',
    'expertise.tax.desc': 'Comprehensive tax services including dispute resolution, compliance, and financial reporting in accordance with Egyptian tax law.',
    'expertise.tax.f1': 'Tax Dispute Resolution',
    'expertise.tax.f2': 'Tax Compliance',
    'expertise.tax.f3': 'Financial Reporting',

    'expertise.mna.title': 'Capital Market & M&A',
    'expertise.mna.desc': 'Expertise in public and private mergers, acquisitions, joint ventures, and restructuring with comprehensive due diligence.',
    'expertise.mna.f1': 'M&A Transactions',
    'expertise.mna.f2': 'Due Diligence',
    'expertise.mna.f3': 'Corporate Restructuring',

    'expertise.additional.title': 'Additional Services',
    'expertise.additional.desc': 'Certified translation services, due diligence investigations, and specialized business support services.',
    'expertise.additional.f1': 'Certified Translation',
    'expertise.additional.f2': 'Due Diligence',
    'expertise.additional.f3': 'Business Licensing',

    // News
    'news.title': 'Latest News & Insights',
    'news.subtitle': 'Stay informed with the latest legal developments, industry insights, and expert analysis from our legal team.',
    'news.featured': 'Featured Article',
    'news.readFull': 'Read Full Article',
    'news.readMore': 'Read More',
    
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
    'contact.form.placeholder.name': 'Your full name',
    'contact.form.placeholder.message': 'Tell us about your legal needs...',
    
    // Clients
    'clients.title': 'Our Valued Clients',
    'clients.subtitle': 'Trusted by leading organizations across various industries',
    'clients.cta.title': 'Join Our Satisfied Clients',
    'clients.cta.description': 'Experience the difference that professional legal representation can make for your business or personal legal matters.',
    'clients.cta.become': 'Become a Client',
    'clients.cta.studies': 'View Case Studies',
    
    // About Features
    'about.feature1.title': 'Expert Legal Team',
    'about.feature1.desc': 'Highly qualified lawyers with extensive experience in Egyptian and international law.',
    'about.feature2.title': 'Innovative Solutions',
    'about.feature2.desc': 'Cutting-edge legal strategies tailored to meet modern business challenges.',
    'about.feature3.title': '24/7 Support',
    'about.feature3.desc': 'Round-the-clock legal support for urgent matters and emergency consultations.',
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
    'hero.title.primary': 'شهاب',
    'hero.title.secondary': '& العوامي',
    'hero.subtitle': 'شريكك القانوني الموثوق',
    'hero.cta': 'تعرف علينا أكثر',
    
    // About Preview
    'about.title': 'عن مكتبنا',
    'about.description': 'شهاب والعوامي مكتب محاماة مصري يجمع بين المهنيين القانونيين المؤهلين تأهيلاً عالياً ذوي خلفيات محلية ودولية متنوعة، ويقدم حلولاً مبتكرة عبر قطاعات متعددة.',
    'about.cta': 'اعرف المزيد',
    'about.p1': 'شهاب والعوامي مكتب محاماة مصري يجمع بين خبراء قانونيين ذوي كفاءة عالية وخلفيات محلية ودولية متنوعة. تأسس لتقديم خدمات قانونية واستشارية، ونعتمد أساليب مبتكرة لمواكبة التطورات الحكومية والتشريعية.',
    'about.p2': 'ندرك التحديات اليومية التي تواجه الشركات ونسعى لتقديم حلول عملية وسريعة. يعمل محامونا عن قرب مع العملاء لبناء الثقة والالتزام والولاء، وتقديم حلول مبتكرة تدعم النجاح في قطاعات عديدة مثل البنوك، النفط والغاز، الصناعات الثقيلة، الرعاية الصحية، تكنولوجيا المعلومات، الاتصالات، والإعلام.',
    'about.stats.years': 'سنوات',
    'about.stats.cases': 'قضايا',
    
    // Expertise
    'expertise.title': 'مجالات الممارسة',
    'expertise.subtitle': 'خدمات قانونية شاملة عبر مجالات ممارسة متعددة',
    'expertise.learnMore': 'اعرف المزيد',
    'expertise.cta.title': 'هل تحتاج إلى مساعدة قانونية؟',
    'expertise.cta.text': 'فريقنا القانوني ذو الخبرة جاهز لمساعدتك في تجاوز التحديات القانونية المعقدة وتحقيق أفضل النتائج الممكنة.',
    'expertise.cta.schedule': 'احجز استشارة',
    'expertise.cta.contact': 'تواصل مع فريقنا',

    // Expertise areas
    'expertise.dispute.title': 'تسوية المنازعات',
    'expertise.dispute.desc': 'خدمات تقاضي شاملة تغطي القضايا المدنية والتجارية والجنائية مع خبرة في المحاكم المصرية.',
    'expertise.dispute.f1': 'التقاضي المدني والتجاري',
    'expertise.dispute.f2': 'الدفاع الجنائي',
    'expertise.dispute.f3': 'الوسائل البديلة لتسوية المنازعات',

    'expertise.corporate.title': 'القانون التجاري والشركات',
    'expertise.corporate.desc': 'خدمات تأسيس سريعة ومخصصة لجميع أنواع الشركات التجارية داخل مصر وخارجها.',
    'expertise.corporate.f1': 'تأسيس الشركات',
    'expertise.corporate.f2': 'خدمات الأمانة العامة للشركات',
    'expertise.corporate.f3': 'المعاملات التجارية',

    'expertise.employment.title': 'قانون العمل',
    'expertise.employment.desc': 'استشارات متخصصة في قوانين العمل، صياغة العقود، والامتثال للوائح العمل المصرية.',
    'expertise.employment.f1': 'عقود العمل',
    'expertise.employment.f2': 'تطوير سياسات العمل',
    'expertise.employment.f3': 'الامتثال التنظيمي',

    'expertise.realestate.title': 'العقارات',
    'expertise.realestate.desc': 'تسجيل العقارات، اتفاقيات البيع والشراء، واستشارات قانونية للمشروعات التجارية والسكنية والسياحية.',
    'expertise.realestate.f1': 'تسجيل الأملاك',
    'expertise.realestate.f2': 'اتفاقيات البيع والشراء',
    'expertise.realestate.f3': 'التحقق من الملكية',

    'expertise.tmt.title': 'التكنولوجيا والإعلام والاتصالات',
    'expertise.tmt.desc': 'خدمات متخصصة في مجالات التكنولوجيا والإعلام والاتصالات مع التركيز على التراخيص والامتثال التنظيمي.',
    'expertise.tmt.f1': 'تراخيص TMT',
    'expertise.tmt.f2': 'الامتثال التنظيمي',
    'expertise.tmt.f3': 'قانون التجارة الإلكترونية',

    'expertise.tax.title': 'الضرائب',
    'expertise.tax.desc': 'خدمات ضريبية شاملة تشمل حل المنازعات والامتثال والتقارير المالية وفقًا للقانون الضريبي المصري.',
    'expertise.tax.f1': 'تسوية المنازعات الضريبية',
    'expertise.tax.f2': 'الامتثال الضريبي',
    'expertise.tax.f3': 'التقارير المالية',

    'expertise.mna.title': 'أسواق المال والاندماجات والاستحواذات',
    'expertise.mna.desc': 'خبرة في عمليات الاندماج والاستحواذ العامة والخاصة والمشاريع المشتركة وإعادة الهيكلة مع عناية واجبة شاملة.',
    'expertise.mna.f1': 'عمليات الاندماج والاستحواذ',
    'expertise.mna.f2': 'العناية الواجبة',
    'expertise.mna.f3': 'إعادة الهيكلة',

    'expertise.additional.title': 'خدمات إضافية',
    'expertise.additional.desc': 'خدمات الترجمة المعتمدة، التحقيقات في العناية الواجبة، وخدمات دعم الأعمال المتخصصة.',
    'expertise.additional.f1': 'ترجمة معتمدة',
    'expertise.additional.f2': 'العناية الواجبة',
    'expertise.additional.f3': 'تراخيص الأعمال',

    // News
    'news.title': 'آخر الأخبار والرؤى',
    'news.subtitle': 'ابقَ على اطلاع على أحدث التطورات القانونية ورؤى الصناعة والتحليلات المتخصصة من فريقنا القانوني.',
    'news.featured': 'مقال مميز',
    'news.readFull': 'اقرأ المقال كاملًا',
    'news.readMore': 'اقرأ المزيد',
    
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