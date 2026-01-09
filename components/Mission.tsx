import React from 'react';
import { BookOpen, Users, Scale, Globe } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Forum",
      description: "Creating a welcoming space for cultural exchange and community building on campus."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Success",
      description: "Providing resources, mentorship, and support to ensure academic excellence for all members."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Advancing careers through networking opportunities, workshops, and alumni connections."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Community Awareness",
      description: "Highlighting critical issues affecting the Latinx community through open dialogue."
    }
  ];

  return (
    <section id="mission" className="py-20 md:py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Mission</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-700 font-light">
            "To serve as an on-campus social, cultural, and professional forum for students. 
            We are dedicated to promoting the academic success and professional advancement of our members, 
            while bringing awareness to issues affecting the Latinx community."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full bg-gray-50 border border-gray-100 text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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