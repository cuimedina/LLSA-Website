import React, { useState, useMemo, useEffect } from 'react';
import { Linkedin, X, GraduationCap, User, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

interface Graduate {
  id: string;
  firstName: string;
  lastName: string;
  graduationYear: string;
  concentration: string;
  bio: string;
  currentPosition?: string;
  image: string;
  linkedInUrl?: string;
}

const graduatesData: Graduate[] = [
  {
    id: '1',
    firstName: 'Maria',
    lastName: 'Gonzalez',
    graduationYear: '2024',
    image: '', 
    concentration: 'Immigration Law',
    bio: 'Maria served as LLSA President during her 2L year. She is passionate about advocating for immigrant rights and has clerked for the Sacramento Superior Court. She plans to join a non-profit dedicated to family reunification.',
    currentPosition: 'Immigration Associate at Martinez & Associates',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '2',
    firstName: 'Carlos',
    lastName: 'Rodriguez',
    graduationYear: '2025',
    image: '',
    concentration: 'Corporate Law',
    bio: 'Carlos focuses on business litigation and corporate compliance. He was an active member of the Moot Court Honors Board and is interested in the intersection of tech and civil rights.',
    currentPosition: 'Summer Associate at Big Law LLP',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '3',
    firstName: 'Elena',
    lastName: 'Martinez',
    graduationYear: '2024',
    image: '',
    concentration: 'Criminal Justice',
    bio: 'Elena is dedicated to criminal defense reform. She volunteered extensively with the Public Defender\'s office and aims to work in public interest law in the Central Valley.',
    currentPosition: 'Public Defender Fellow',
    linkedInUrl: 'https://linkedin.com'
  }
];

const Graduates: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialCount, setInitialCount] = useState(6);
  const [isLoaded, setIsLoaded] = useState(false);

  const sortedGraduates = useMemo(() => {
    return [...graduatesData].sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setInitialCount(2);
      else if (width < 1200) setInitialCount(4);
      else setInitialCount(6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    setIsLoaded(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleGraduates = isExpanded ? sortedGraduates : sortedGraduates.slice(0, initialCount);
  const selectedIndex = sortedGraduates.findIndex(g => g.id === selectedId);
  const selectedGraduate = sortedGraduates[selectedIndex];

  const navigate = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % sortedGraduates.length 
      : (selectedIndex - 1 + sortedGraduates.length) % sortedGraduates.length;
    setSelectedId(sortedGraduates[newIndex].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === 'Escape') setSelectedId(null);
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, selectedIndex]);

  return (
    <section id="graduates" className="py-24 md:py-32 bg-[#fafafa] text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Clase del 2026</h2>
          <p className="text-lg text-gray-600 font-normal max-w-2xl mx-auto mb-10 font-sans">
            The next generation of legal leaders para la comunidad.
          </p>

          <div className="flex flex-col items-center">
            <a 
              href="https://forms.google.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-black text-white text-[10px] font-sans font-semibold uppercase tracking-label hover:bg-gray-800 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Submit Profile
            </a>
            <p className="mt-4 text-[9px] text-gray-400 font-semibold uppercase tracking-label font-sans">
              Graduating soon? Share your story with us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {visibleGraduates.map((grad, index) => (
            <div 
              key={grad.id}
              onClick={() => setSelectedId(grad.id)}
              className={`group cursor-pointer flex flex-col items-center transition-all duration-500 transform ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-white shadow-md border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {grad.image ? (
                  <img 
                    src={grad.image} 
                    alt={`${grad.firstName} ${grad.lastName}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                     <User className="w-24 h-24 text-gray-200" strokeWidth={0.5} />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-center">
                  <h3 className="text-white text-2xl font-serif font-bold tracking-wide">
                    {grad.firstName} {grad.lastName}
                  </h3>
                  <p className="text-white/70 text-[9px] uppercase tracking-label mt-2 font-semibold font-sans">
                    Class of {grad.graduationYear}
                  </p>
                  
                  <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <span className="text-[8px] uppercase tracking-label text-white border-b border-white/50 pb-1 font-sans">View Profile</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGraduate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedId(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up">
            
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-30 p-2 bg-white/20 hover:bg-black/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <div className="w-full md:w-2/5 bg-gray-100 min-h-[300px] md:min-h-full">
              {selectedGraduate.image ? (
                <img src={selectedGraduate.image} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-200" strokeWidth={0.5} />
                </div>
              )}
            </div>

            <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-white relative">
              <span className="inline-block px-3 py-1 bg-gray-100 text-[9px] font-sans font-semibold uppercase tracking-label text-gray-500 mb-6 w-fit">
                Class of {selectedGraduate.graduationYear}
              </span>
              
              <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                {selectedGraduate.firstName}<br className="hidden md:block" /> {selectedGraduate.lastName}
              </h3>
              
              <div className="flex items-center text-gray-500 mb-8 border-b border-gray-100 pb-4">
                <GraduationCap className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-sans font-normal text-sm">{selectedGraduate.concentration}</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-10 text-base font-sans font-normal">
                {selectedGraduate.bio}
              </p>
              
              <div className="mt-auto space-y-6">
                {selectedGraduate.currentPosition && (
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 mr-3 text-gray-400 mt-1" />
                    <p className="text-black font-semibold text-[10px] uppercase tracking-editorial font-sans">
                      {selectedGraduate.currentPosition}
                    </p>
                  </div>
                )}
                
                {selectedGraduate.linkedInUrl && (
                  <a 
                    href={selectedGraduate.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-gray-600 font-sans font-semibold text-[9px] uppercase tracking-label transition-colors border-b border-black pb-1"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Graduates;