import React from 'react';
import { UserPlus } from 'lucide-react';

const Graduates: React.FC = () => {
  const grads = [
    { name: "Maria Gonzalez", year: "2024" },
    { name: "Elena Martinez", year: "2024" },
    { name: "Carlos Rodriguez", year: "2025" }
  ];

  return (
    <section id="graduates" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-label uppercase text-llsa-accent mb-4 block">Alumni</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Clase del 2026</h2>
            <p className="text-lg text-gray-500 font-light">The next generation of legal leaders para la comunidad.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="https://forms.google.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 border-2 border-llsa-accent text-llsa-accent text-[11px] font-bold uppercase tracking-label hover:bg-llsa-accent hover:text-white transition-all rounded-sm"
            >
              <UserPlus size={14} className="mr-3" />
              Submit Profile
            </a>
            <p className="mt-4 text-[10px] text-gray-400 font-medium uppercase tracking-widest">Graduating soon? Share your story.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {grads.map((grad, i) => (
            <div key={i} className="group">
              <div className="placeholder-image aspect-square mb-6 group-hover:border-llsa-accent transition-colors duration-500">
                Profile photo coming soon
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-llsa-charcoal mb-1">{grad.name}</h3>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Class of {grad.year}</p>
                <button className="text-[10px] font-bold uppercase tracking-label text-llsa-accent border-b-2 border-llsa-accent/20 hover:border-llsa-accent pb-1 transition-all">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graduates;