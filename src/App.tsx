import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import ClientsPage from './pages/ClientsPage';
import CareerPage from './pages/CareerPage';
import MediaPage from './pages/MediaPage';
import LibraryPage from './pages/LibraryPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-600 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="pt-20">
          {renderPage()}
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;