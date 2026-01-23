import React from 'react';
import { Users, GraduationCap, Briefcase, Heart } from 'lucide-react';

const Mission: React.FC = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social & Cultural Forum",
      description: "Serving as an on-campus space for students to foster meaningful cultural connections."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Providing the essential resources and support for members to excel in their legal studies."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Advancement",
      description: "Bridging the gap between law school and career through mentorship and networking."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Awareness",
      description: "Bringing vital attention to socio-legal issues impacting the Latinx community."
    }
  ];

  return (
    <section id="mission" className="py-24 md:py-32 bg-white text-llsa-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold tracking-label uppercase text-llsa-accent mb-6 block">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Latinx Law Students Association</h2>
          <p className="text-lg text-gray-500 leading-relaxed font-sans font-light">
            LLSA’s mission is to serve as an on-campus social, cultural, and professional forum for students. 
            We promote academic success and professional advancement while bringing awareness to issues affecting the Latinx community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col p-10 border border-gray-100 hover:border-llsa-accent/30 hover:shadow-lg transition-all duration-500 bg-white group rounded-card">
              <div className="mb-8 text-llsa-accent group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest mb-4 text-llsa-charcoal">
                {pillar.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;