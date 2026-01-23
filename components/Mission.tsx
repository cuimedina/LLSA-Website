import React from 'react';
import { BookOpen, Users, Scale, Globe } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Forum",
      description: "Creating a welcoming space for cultural exchange and community building on campus."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Success",
      description: "Providing the resources and mentorship necessary to ensure academic excellence."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Professional Growth",
      description: "Advancing careers through networking, workshops, and alumni connections."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Community Awareness",
      description: "Highlighting critical social and legal issues affecting the Latinx community."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-sans font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">Our Purpose</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">"Para la comunidad, por la comunidad."</h3>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            The Latinx Law Students Association serves as an on-campus social, cultural, and professional forum. 
            We are dedicated to promoting the academic success and professional advancement of our members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-black group-hover:text-white transition-all duration-500">
                {value.icon}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3">{value.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;