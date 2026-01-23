import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Merch: React.FC = () => {
  const products = [
    {
      id: 'tshirt',
      name: 'LLSA Signature T-Shirt',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      link: 'https://commerce.cashnet.com/cashneti/static/storefront/03CLUB/catalog/LLSA'
    },
    {
      id: 'hoodie',
      name: 'LLSA Premium Hoodie',
      price: '$50.00',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      link: 'https://commerce.cashnet.com/cashneti/static/storefront/03CLUB/catalog/LLSA'
    }
  ];

  return (
    <section id="shop" className="py-24 bg-llsa-gray text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Shop LLSA Merch</h2>
          <p className="text-gray-400 font-sans tracking-label uppercase text-[10px] font-semibold">
            Support our community. Wear your pride.
          </p>
          <div className="w-12 h-[1px] bg-black mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {products.map((product) => (
            <a 
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-black text-white px-8 py-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center space-x-2 font-sans font-semibold uppercase tracking-label text-[10px]">
                    <ShoppingBag size={14} />
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white flex flex-col items-center text-center">
                <h3 className="text-xl font-sans font-semibold text-black mb-1 uppercase tracking-editorial">{product.name}</h3>
                <p className="text-gray-500 font-normal tracking-label mb-4 font-sans uppercase text-[10px]">{product.price}</p>
                <div className="flex items-center text-black font-semibold text-[10px] uppercase tracking-label border-b border-black pb-1 font-sans">
                  View Product <ArrowRight size={12} className="ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-[10px] uppercase tracking-label font-sans font-light max-w-sm mx-auto leading-relaxed">
            All proceeds support the LLSA general fund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Merch;