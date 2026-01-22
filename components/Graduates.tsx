import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Linkedin, X, ChevronLeft, ChevronRight, GraduationCap, User, Briefcase } from 'lucide-react';

// Interface for Graduate Data
interface Graduate {
  id: string;
  firstName: string;
  lastName: string;
  graduationYear: string;
  concentration: string;
  bio: string;
  currentPosition?: string;
  postGradPlans?: string; // Keeping for backward compatibility or alias to currentPosition
  image: string;
  linkedInUrl?: string;
}

// Mock Data
const graduatesData: Graduate[] = [
  {
    id: '1',
    firstName: 'Maria',
    lastName: 'Gonzalez',
    graduationYear: '2024',
    image: '', 
    concentration: 'Immigration Law',
    bio: 'Maria served as LLSA President during her 2L year. She is passionate about advocating for immigrant rights and has clerked for the Sacramento Superior Court. She plans to open her own firm serving the Central Valley community.',
    currentPosition: 'Immigration Associate at Martinez & Associates',
    linkedInUrl: '#'
  },
  {
    id: '2',
    firstName: 'Carlos',
    lastName: 'Rodriguez',
    graduationYear: '2025',
    image: '',
    concentration: 'Corporate Law',
    bio: 'Carlos focuses on business litigation and corporate compliance. He was an active member of the Moot Court Honors Board and mentored 1L students. He is interested in the intersection of technology and law.',
    currentPosition: 'Summer Associate at Big Law LLP',
    linkedInUrl: '#'
  },
  {
    id: '3',
    firstName: 'Elena',
    lastName: 'Martinez',
    graduationYear: '2024',
    image: '',
    concentration: 'Criminal Justice',
    bio: 'Elena is dedicated to criminal defense reform. She volunteered extensively with the Public Defender\'s office and organized community know-your-rights workshops. She hopes to work in policy advocacy.',
    currentPosition: 'Public Defender Fellow',
    linkedInUrl: '#'
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Silva',
    graduationYear: '2026',
    image: '',
    concentration: 'Environmental Law',
    bio: 'David combines his passion for policy and the environment. He is currently working on water rights research and serves as the LLSA Treasurer. He enjoys hiking and outdoor photography in his spare time.',
    currentPosition: 'Seeking Clerkship',
    linkedInUrl: '#'
  },
  {
    id: '5',
    firstName: 'Sofia',
    lastName: 'Lopez',
    graduationYear: '2025',
    image: '',
    concentration: 'Intellectual Property',
    bio: 'Sofia has a background in engineering and is pursuing patent law. She founded the IP Law Society student chapter and tutors 1L contracts. She is excited to bring diversity to the tech legal field.',
    currentPosition: 'IP Specialist',
    linkedInUrl: '#'
  },
  {
    id: '6',
    firstName: 'Alejandro',
    lastName: 'Torres',
    graduationYear: '2024',
    image: '',
    concentration: 'Family Law',
    bio: 'Alejandro is committed to serving families in crisis. He worked in the campus legal clinic providing pro bono services to low-income residents. He is fluent in Spanish and Portuguese.',
    currentPosition: 'Family Law Practitioner',
    linkedInUrl: '#'
  },
  {
    id: '7',
    firstName: 'Gabriela',
    lastName: 'Hernandez',
    graduationYear: '2025',
    image: '',
    concentration: 'Civil Rights',
    bio: 'Gabriela has interned with the ACLU and is passionate about voting rights. She served as a research assistant for the Constitutional Law department.',
    currentPosition: 'Legal Fellow',
    linkedInUrl: '#'
  },
  {
    id: '8',
    firstName: 'Mateo',
    lastName: 'Ramirez',
    graduationYear: '2026',
    image: '',
    concentration: 'Labor Law',
    bio: 'Mateo worked as a union organizer before law school. He is dedicated to protecting workers\' rights and ensuring fair labor practices in the agricultural sector.',
    currentPosition: 'Law Clerk',
    linkedInUrl: '#'
  },
  {
    id: '9',
    firstName: 'Isabella',
    lastName: 'Garcia',
    graduationYear: '2025',
    image: '',
    concentration: 'Health Law',
    bio: 'Isabella is exploring the intersection of healthcare policy and patient advocacy. She spent her summer externing with a major hospital network\'s general counsel.',
    currentPosition: 'Healthcare Compliance Intern',
    linkedInUrl: '#'
  },
  {
    id: '10',
    firstName: 'Diego',
    lastName: 'Vasquez',
    graduationYear: '2024',
    image: '',
    concentration: 'Entertainment Law',
    bio: 'Diego aims to represent Latinx talent in the entertainment industry. He has written extensively on copyright reform for digital media and served as Vice President of the Sports & Entertainment Law Society.',
    currentPosition: 'Associate at Talent Agency Legal Affairs',
    linkedInUrl: '#'
  },
  {
    id: '11',
    firstName: 'Valentina',
    lastName: 'Ruiz',
    graduationYear: '2026',
    image: '',
    concentration: 'International Law',
    bio: 'Valentina is fluent in three languages and interested in cross-border transactions. She is currently a research assistant for the International Law Review.',
    currentPosition: 'Summer Intern at The Hague',
    linkedInUrl: '#'
  },
  {
    id: '12',
    firstName: 'Lucas',
    lastName: 'Mendoza',
    graduationYear: '2025',
    image: '',
    concentration: 'Tax Law',
    bio: 'Lucas provides volunteer income tax assistance to the local community. He enjoys simplifying complex tax codes for small business owners and plans to specialize in corporate tax.',
    currentPosition: 'Tax Consultant Intern',
    linkedInUrl: '#'
  },
  {
    id: '13',
    firstName: 'Camila',
    lastName: 'Ortiz',
    graduationYear: '2024',
    image: '',
    concentration: 'Real Estate Law',
    bio: 'Camila is focused on affordable housing development. She worked with a non-profit developer to secure zoning permits for a new community center.',
    currentPosition: 'Associate Attorney - Real Estate Group',
    linkedInUrl: '#'
  },
  {
    id: '14',
    firstName: 'Javier',
    lastName: 'Castillo',
    graduationYear: '2026',
    image: '',
    concentration: 'Sports Law',
    bio: 'A former collegiate athlete, Javier understands the legal needs of sports organizations. He is currently organizing a symposium on NIL (Name, Image, Likeness) rights.',
    currentPosition: 'Legal Intern - Professional Sports Team',
    linkedInUrl: '#'
  },
  {
    id: '15',
    firstName: 'Natalia',
    lastName: 'Romero',
    graduationYear: '2025',
    image: '',
    concentration: 'Technology Policy',
    bio: 'Natalia is interested in data privacy and cybersecurity regulations. She founded a student group focused on AI ethics in the legal profession.',
    currentPosition: 'Policy Analyst Fellow',
    linkedInUrl: '#'
  }
];

const Graduates: React.FC = () => {
  const [selectedGraduateId, setSelectedGraduateId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Determine initial count based on screen size
  useEffect(() => {
    const handleResize = () => {
      // If already expanded, don't reset
      if (isExpanded) return;

      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: 2 items (1 per row usually, prompt asked for 2 graduates total)
        setVisibleCount(2);
      } else if (width < 1024) {
        // Tablet: 4 items (2 per row)
        setVisibleCount(4);
      } else {
        // Desktop: 6 items (3 per row)
        setVisibleCount(6);
      }
    };

    // Set initial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  // Sort Alphabetically by Last Name
  const sortedGraduates = useMemo(() => {
    return [...graduatesData].sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, []);

  const visibleGraduates = sortedGraduates.slice(0, visibleCount);
  const hasMore = visibleCount < sortedGraduates.length;

  const handleLoadMore = () => {
    setIsExpanded(true);
    setVisibleCount(sortedGraduates.length);
  };

  // Modal Handlers
  const selectedGraduate = sortedGraduates.find(g => g.id === selectedGraduateId);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedGraduateId) return;
    const currentIndex = sortedGraduates.findIndex(g => g.id === selectedGraduateId);
    const nextIndex = (currentIndex + 1) % sortedGraduates.length;
    setSelectedGraduateId(sortedGraduates[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedGraduateId) return;
    const currentIndex = sortedGraduates.findIndex(g => g.id === selectedGraduateId);
    const prevIndex = (currentIndex - 1 + sortedGraduates.length) % sortedGraduates.length;
    setSelectedGraduateId(sortedGraduates[prevIndex].id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGraduateId) return;
      if (e.key === 'Escape') setSelectedGraduateId(null);
      if (e.key === 'ArrowRight') {
         const currentIndex = sortedGraduates.findIndex(g => g.id === selectedGraduateId);
         const nextIndex = (currentIndex + 1) % sortedGraduates.length;
         setSelectedGraduateId(sortedGraduates[nextIndex].id);
      }
      if (e.key === 'ArrowLeft') {
         const currentIndex = sortedGraduates.findIndex(g => g.id === selectedGraduateId);
         const prevIndex = (currentIndex - 1 + sortedGraduates.length) % sortedGraduates.length;
         setSelectedGraduateId(sortedGraduates[prevIndex].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGraduateId, sortedGraduates]);

  return (
    <section id="graduates" ref={sectionRef} className="py-20 md:py-32 bg-white text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Meet Our Graduates</h2>
          <p className="text-lg md:text-xl text-gray-600 font-light mb-8">
            Building the next generation of Latinx legal leaders
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <a 
              href="https://forms.google.com/" // Replace with actual Google Form URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-black text-white text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Submit Your Graduate Profile
            </a>
            <p className="mt-4 text-xs text-gray-400 font-medium">
              Graduating soon? Share your story with us.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-16 max-w-xs mx-auto"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {visibleGraduates.map((grad, index) => (
            <div 
              key={grad.id}
              onClick={() => setSelectedGraduateId(grad.id)}
              className="group cursor-pointer flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && setSelectedGraduateId(grad.id)}
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                {grad.image ? (
                  <img 
                    src={grad.image} 
                    alt={`${grad.firstName} ${grad.lastName}`} 
                    className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-500">
                     <User className="w-20 h-20 text-gray-300" strokeWidth={1} />
                  </div>
                )}
                
                {/* Overlay Name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 flex flex-col items-start justify-end transition-all duration-300">
                  <h3 className="text-white text-xl font-serif font-bold tracking-wide">
                    {grad.firstName} {grad.lastName}
                  </h3>
                  <p className="text-white/80 text-xs uppercase tracking-widest mt-1">
                    Class of {grad.graduationYear}
                  </p>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 border border-gray-300 text-gray-600 font-medium text-xs uppercase tracking-[0.2em] hover:border-black hover:text-black hover:bg-white transition-all duration-300 focus:outline-none"
            >
              View All {sortedGraduates.length} Graduates
            </button>
          </div>
        )}

        {/* Empty State */}
        {sortedGraduates.length === 0 && (
          <div className="text-center py-20">
             <p className="text-gray-500">No graduates found.</p>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedGraduate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedGraduateId(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"></div>

          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedGraduateId(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-black hover:text-white rounded-full transition-colors md:text-black"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons (Desktop) */}
            <button 
              onClick={handlePrev}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 hover:bg-white items-center justify-center shadow-md rounded-full text-black transition-all hover:scale-110"
              aria-label="Previous graduate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 hover:bg-white items-center justify-center shadow-md rounded-full text-black transition-all hover:scale-110"
              aria-label="Next graduate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-100 flex items-center justify-center flex-shrink-0">
              {selectedGraduate.image ? (
                <img 
                  src={selectedGraduate.image} 
                  alt={`${selectedGraduate.firstName} ${selectedGraduate.lastName}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-24 h-24 text-gray-300" strokeWidth={1} />
              )}
            </div>

            {/* Modal Text */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-2">
                 <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                   Class of {selectedGraduate.graduationYear}
                 </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-black">
                {selectedGraduate.firstName} {selectedGraduate.lastName}
              </h3>
              
              <div className="flex items-center text-gray-600 mb-8">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium italic">{selectedGraduate.concentration}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Biography</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {selectedGraduate.bio}
                  </p>
                </div>

                {selectedGraduate.currentPosition && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Current Position / Plans</h4>
                    <div className="flex items-start">
                       <Briefcase className="w-4 h-4 mr-2 mt-1 text-gray-400" />
                       <p className="text-gray-900 font-medium">
                         {selectedGraduate.currentPosition}
                       </p>
                    </div>
                  </div>
                )}
              </div>

              {selectedGraduate.linkedInUrl && (
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <a 
                    href={selectedGraduate.linkedInUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-[#0077b5] transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    <span className="text-sm font-bold uppercase tracking-wider group-hover:underline">Connect on LinkedIn</span>
                  </a>
                </div>
              )}
            </div>
            
            {/* Mobile Navigation Footer */}
            <div className="md:hidden flex border-t border-gray-100">
               <button onClick={handlePrev} className="flex-1 p-4 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 border-r border-gray-100 text-sm font-bold uppercase tracking-wider text-gray-500">
                  <ChevronLeft className="w-5 h-5 mr-2" /> Previous
               </button>
               <button onClick={handleNext} className="flex-1 p-4 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 text-sm font-bold uppercase tracking-wider text-gray-500">
                  Next <ChevronRight className="w-5 h-5 ml-2" />
               </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Graduates;