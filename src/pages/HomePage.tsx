import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Expertise from '../components/Expertise';
import Statistics from '../components/Statistics';
import Clients from '../components/Clients';
import News from '../components/News';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <Expertise />
      <Statistics />
      <Clients />
      <News />
      <Contact />
    </div>
  );
};

export default HomePage;