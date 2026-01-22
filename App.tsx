import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Events from './components/Events';
import Graduates from './components/Graduates';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Events />
        <Graduates />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;