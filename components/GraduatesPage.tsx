import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface GraduatesPageProps {
  onNavigate: (view: 'home' | 'graduates') => void;
}

const GraduatesPage: React.FC<GraduatesPageProps> = ({ onNavigate }) => {
  const grads = [
    { name: "Maria Gonzalez", year: "2024" },
    { name: "Elena Martinez", year: "2024" },
    { name: "Carlos Rodriguez", year: "2025" },
    { name: "Sofia Rivera", year: "2025" },
    { name: "Juan Hernandez", year: "2026" },
    { name: "Isabella Lopez", year: "2026" },
    { name: "Mateo Garcia", year: "2024" },
    { name: "Valentina Perez", year: "2025" },
    { name: "Sebastian Torres", year: "2026" },
    { name: "Camila Sanchez", year: "2024" },
    { name: "Diego Ramirez", year: "2025" },
    { name: "Lucia Morales", year: "2026" },
    { name: "Gabriel Flores", year: "2025" },
    { name: "Victoria Diaz", year: "2026" },
    { name: "Julian Ruiz", year: "2024" }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-12">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center hover:text-black transition-colors"
            >
              <Home size={12} className="mr-1" /> Home
            </button>
            <ChevronRight size={10} />
            <span className="text-black">Graduates</span>
          </nav>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-black">Clase del 2026</h1>
            <p className="text-xl text-gray-500 font-light">Meet the 15 graduates from LLSA.</p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100 mb-20">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Graduates</p>
              <p className="text-2xl font-bold text-black">15</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Class Years</p>
              <p className="text-2xl font-bold text-black">2026</p>
            </div>
          </div>

          {/* Full Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-16 mb-32">
            {grads.map((grad, i) => (
              <div key={i} className="group">
                <div className="placeholder-image aspect-square mb-6 group-hover:border-black transition-colors duration-500">
                  Profile photo placeholder for {grad.name}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-1">{grad.name}</h3>
                  <p className="text-base text-gray-400 font-light mb-6">Class of {grad.year}</p>
                  <button className="text-[10px] font-bold uppercase tracking-label text-black border border-black/20 px-6 py-2 hover:bg-black hover:text-white transition-all rounded-sm">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-llsa-offwhite p-12 md:p-20 text-center rounded-card border border-gray-100 mb-20">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join Our Alumni Network</h3>
            <p className="text-gray-500 font-light mb-10 max-w-xl mx-auto text-lg">
              Graduated from McGeorge? Share your journey with future LLSA members.
            </p>
            <a 
              href="https://forms.google.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-label hover:opacity-80 transition-all rounded-sm shadow-xl"
            >
              Submit Your Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraduatesPage;