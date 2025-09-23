import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ExpertisePage = lazy(() => import('./pages/ExpertisePage'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading spinner component
const LoadingSpinner = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-6"></div>
          <div className="w-12 h-12 border-4 border-accent-200 border-t-accent-500 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="space-y-2">
          <p className="text-brand-800 text-lg font-medium">{t('common.loading')}</p>
          <p className="text-brand-600 text-sm">{t('common.loadingExperience')}</p>
        </div>
      </div>
    </div>
  );
};

// Page transition loading
const PageLoading = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-brand-600 text-sm">{t('common.loadingPage')}</p>
      </div>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    // Initial app loading
    const timer = setTimeout(() => setIsInitialLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Page transition handling
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'expertise':
        return <ExpertisePage />;
      case 'clients':
        return <ClientsPage />;
      case 'career':
        return <CareerPage />;
      case 'media':
        return <MediaPage />;
      case 'library':
        return <LibraryPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  if (isInitialLoading) {
    return <LoadingSpinner />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-50">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="pt-20">
          <Suspense fallback={<PageLoading />}>
            <div className={`transition-opacity duration-300 ${isPageTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              {renderPage()}
            </div>
          </Suspense>
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;