import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Events from './components/Events';
import Graduates from './components/Graduates';
import GraduatesPage from './components/GraduatesPage';
import GalaPage from './components/GalaPage';
import Merch from './components/Merch';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Use state to manage the view for instant transitions and reliability
  const [view, setView] = useState<'home' | 'graduates' | 'gala'>('home');

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path.includes('gala-2026.html') || hash === '#gala') {
        setView('gala');
        document.title = "LLSA Gala 2026 | Latinx Law Students Association";
      } else if (path.includes('graduates.html') || hash === '#graduates') {
        setView('graduates');
        document.title = "Graduates | LLSA McGeorge School of Law";
      } else {
        setView('home');
        document.title = "LLSA | McGeorge School of Law";
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (newView: 'home' | 'graduates' | 'gala') => {
    setView(newView);
    if (newView === 'graduates') {
      window.history.pushState({}, '', '#graduates');
      window.scrollTo(0, 0);
    } else if (newView === 'gala') {
      window.history.pushState({}, '', '#gala');
      window.scrollTo(0, 0);
    } else {
      window.history.pushState({}, '', 'index.html');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-llsa-black selection:bg-llsa-black selection:text-white">
      <Navbar onNavigate={navigateTo} currentView={view} />
      <main className="flex-grow">
        {view === 'gala' ? (
          <GalaPage />
        ) : view === 'graduates' ? (
          <GraduatesPage onNavigate={navigateTo} />
        ) : (
          <>
            <Hero />
            <Mission />
            <Events onNavigate={navigateTo} />
            <Graduates onNavigate={navigateTo} />
            <Merch />
            <Donate />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;