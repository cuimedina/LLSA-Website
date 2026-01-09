import React from 'react';
import { Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-black">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Have questions about membership, events, or how to get involved? 
              Reach out to our leadership team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded-none">
                   <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-gray-600">mcgeorge.llsa@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">Co-Presidents</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-white p-3 rounded-none">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-gray-600">
                    McGeorge School of Law<br/>
                    3200 Fifth Ave<br/>
                    Sacramento, CA 95817
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
             <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
             <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">Name</label>
                  <input type="text" id="name" className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">Email</label>
                  <input type="email" id="email" className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;