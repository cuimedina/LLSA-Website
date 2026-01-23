import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Merch: React.FC = () => {
  const products = [
    {
      id: 'tshirt',
      name: 'LLSA Signature T-Shirt',
      price: '$35.00',
      image: 'merch-tshirt.jpg', // Placeholder for your local image
      link: 'https://commerce.cashnet.com/cashneti/static/storefront/03CLUB/catalog/LLSA'
    },
    {
      id: 'hoodie',
      name: 'LLSA Premium Hoodie',
      price: '$50.00',
      image: 'merch-hoodie.jpg', // Placeholder for your local image
      link: 'https://commerce.cashnet.com/cashneti/static/storefront/03CLUB/catalog/LLSA'
    }
  ];

  return (
    <section id="shop" className="py-24 bg-llsa-gray text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Shop LLSA Merch</h2>
          <p className="text-gray-500 font-sans tracking-widest uppercase text-xs font-bold">
            Support our community. Wear your pride.
          </p>
          <div className="w-12 h-1 bg-black mx-auto mt-6"></div>
        </div>

        {/* Product Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {products.map((product) => (
            <a 
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to a placeholder style if image isn't found locally yet
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800';
                    if (product.id === 'hoodie') target.src = 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                
                {/* Shop Now Button Overlay (Mobile always visible, Desktop on hover) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-black text-white px-8 py-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center space-x-2 font-bold uppercase tracking-widest text-[10px]">
                    <ShoppingBag size={14} />
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>

              {/* Product Info Overlay */}
              <div className="p-6 bg-white flex flex-col items-center text-center">
                <h3 className="text-xl font-serif font-bold text-black mb-1">{product.name}</h3>
                <p className="text-gray-500 font-medium tracking-wider mb-4">{product.price}</p>
                <div className="flex items-center text-black font-bold text-[10px] uppercase tracking-[0.2em] border-b border-black pb-1">
                  View Product <ArrowRight size={12} className="ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-xs italic max-w-sm mx-auto leading-relaxed">
            All proceeds go directly to the LLSA general fund to support scholarships and community events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Merch;