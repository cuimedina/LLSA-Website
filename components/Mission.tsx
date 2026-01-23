import React from 'react';
import { Users, GraduationCap, Briefcase, Globe } from 'lucide-react';

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
      icon: <Globe className="w-6 h-6" />,
      title: "Community Awareness",
      description: "Bringing vital attention to socio-legal issues impacting the Latinx community."
    }
  ];

  return (
    <section id="mission" className="py-24 md:py-32 bg-white text-llsa-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-[10px] font-sans font-semibold tracking-label uppercase text-gray-400 mb-6">Our Mission</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10">Latinx Law Students Association (LLSA)</h3>
          <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed font-sans mb-10">
            LLSA’s mission is to serve as an on-campus social, cultural, and professional forum for students. 
            LLSA promotes the academic success and professional advancement of its members. 
            LLSA also brings awareness to issues affecting the Latinx community through networking mixers and diversity panels. 
            Look for our events advertised in The Docket and The WRIT and contact the LLSA co-presidents if you have any questions.
          </p>
          <div className="w-16 h-px bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col p-10 border border-gray-100 hover:border-black transition-all duration-500 group">
              <div className="mb-8 text-black group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h4 className="text-[11px] font-sans font-semibold uppercase tracking-label mb-4 text-black">
                {pillar.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans font-normal">
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