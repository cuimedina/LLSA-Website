import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Events from './components/Events';
import Graduates from './components/Graduates';
import Merch from './components/Merch';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-llsa-black selection:bg-llsa-black selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Events />
        <Graduates />
        <Merch />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;