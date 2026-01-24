import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GraduatesProps {
  onNavigate: (view: 'home' | 'graduates') => void;
}

const Graduates: React.FC<GraduatesProps> = ({ onNavigate }) => {
  const grads = [
    { name: "Maria Gonzalez", year: "2024" },
    { name: "Elena Martinez", year: "2024" },
    { name: "Carlos Rodriguez", year: "2025" },
    { name: "Sofia Rivera", year: "2025" },
    { name: "Juan Hernandez", year: "2026" },
    { name: "Isabella Lopez", year: "2026" }
  ];

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('graduates');
  };

  return (
    <section id="graduates" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        <div className="max-w-xl mx-auto mb-20">
          <span className="text-[10px] font-bold tracking-label uppercase text-black mb-4 block">Graduates</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Clase del 2026</h2>
          <p className="text-lg text-gray-500 font-light">The next generation of legal leaders para la comunidad.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {grads.map((grad, i) => (
            <div key={i} className="group text-left">
              <div className="placeholder-image aspect-square mb-6 group-hover:border-black transition-colors duration-500">
                Profile photo coming soon
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold text-black mb-1">{grad.name}</h3>
                <p className="text-base text-gray-400 font-light mb-6">Class of {grad.year}</p>
                <button className="text-[10px] font-bold uppercase tracking-label text-black border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button 
            onClick={handleViewAll}
            className="inline-flex items-center px-10 py-4 border border-black text-black text-[11px] font-bold uppercase tracking-label hover:bg-black hover:text-white transition-all rounded-sm mb-6"
          >
            View All 15 Clase del 2026 Graduates
            <ArrowRight size={14} className="ml-2" />
          </button>
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            Graduating soon? <a href="https://forms.google.com/" target="_blank" className="text-black border-b border-black/20 hover:border-black">Submit your profile</a> to be featured.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Graduates;