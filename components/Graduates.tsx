import React, { useState, useMemo, useEffect } from 'react';
import { Linkedin, X, GraduationCap, User, Briefcase } from 'lucide-react';

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
    bio: 'Maria served as LLSA President during her 2L year. She is passionate about advocating for immigrant rights and has clerked for the Sacramento Superior Court.',
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
    bio: 'Carlos focuses on business litigation and corporate compliance. He was an active member of the Moot Court Honors Board.',
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
    bio: 'Elena is dedicated to criminal defense reform. She volunteered extensively with the Public Defender\'s office.',
    currentPosition: 'Public Defender Fellow',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Silva',
    graduationYear: '2026',
    image: '',
    concentration: 'Environmental Law',
    bio: 'David combines his passion for policy and the environment. He currently serves as the LLSA Treasurer.',
    currentPosition: 'Seeking Clerkship',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '5',
    firstName: 'Sofia',
    lastName: 'Lopez',
    graduationYear: '2025',
    image: '',
    concentration: 'Intellectual Property',
    bio: 'Sofia has a background in engineering and is pursuing patent law. She founded the IP Law Society student chapter.',
    currentPosition: 'IP Specialist',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: '6',
    firstName: 'Alejandro',
    lastName: 'Torres',
    graduationYear: '2024',
    image: '',
    concentration: 'Family Law',
    bio: 'Alejandro is committed to serving families in crisis. He worked in the campus legal clinic providing pro bono services.',
    currentPosition: 'Family Law Practitioner',
    linkedInUrl: 'https://linkedin.com'
  }
];

const Graduates: React.FC = () => {
  const [selectedGraduateId, setSelectedGraduateId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small timeout to trigger animation after mounting
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sortedGraduates = useMemo(() => {
    return [...graduatesData].sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, []);

  const visibleGraduates = sortedGraduates.slice(0, visibleCount);
  const selectedGraduate = sortedGraduates.find(g => g.id === selectedGraduateId);

  return (
    <section id="graduates" className="py-24 md:py-32 bg-[#fafafa] text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Clase del 2026</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            The next generation of legal leaders para la comunidad.
          </p>

          <div className="mt-10">
            <a 
              href="https://forms.google.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl"
            >
              Submit Profile
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {visibleGraduates.map((grad, index) => (
            <div 
              key={grad.id}
              onClick={() => setSelectedGraduateId(grad.id)}
              className={`group cursor-pointer flex flex-col items-center transition-all duration-500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-white shadow-md border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-serif font-bold tracking-wide">
                    {grad.firstName} {grad.lastName}
                  </h3>
                  <p className="text-white/70 text-xs uppercase tracking-widest mt-2 font-bold">
                    Class of {grad.graduationYear}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedGraduate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedGraduateId(null)}
          ></div>
          <div className="relative bg-white w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up">
            <button 
              onClick={() => setSelectedGraduateId(null)}
              className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-black/5 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-gray-100">
              {selectedGraduate.image ? (
                <img src={selectedGraduate.image} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-200" strokeWidth={0.5} />
                </div>
              )}
            </div>

            <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 w-fit">
                Class of {selectedGraduate.graduationYear}
              </span>
              <h3 className="text-4xl font-serif font-bold mb-4">{selectedGraduate.firstName} {selectedGraduate.lastName}</h3>
              <div className="flex items-center text-gray-500 mb-8 border-b border-gray-100 pb-4">
                <GraduationCap className="w-5 h-5 mr-3" />
                <span className="font-medium italic">{selectedGraduate.concentration}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-10 text-lg">{selectedGraduate.bio}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {selectedGraduate.currentPosition && (
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-3 text-gray-400" />
                    <p className="text-black font-semibold">{selectedGraduate.currentPosition}</p>
                  </div>
                )}
                {selectedGraduate.linkedInUrl && (
                  <a 
                    href={selectedGraduate.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-bold text-sm uppercase tracking-widest"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
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