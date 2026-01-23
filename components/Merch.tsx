import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Merch: React.FC = () => {
  const products = [
    { 
      name: "LLSA Signature T-Shirt", 
      price: "$35.00",
      href: "https://commerce.cashnet.com/03CLUB?itemcode=03CLUB-00114"
    },
    { 
      name: "LLSA Premium Hoodie", 
      price: "$50.00",
      href: "https://commerce.cashnet.com/03CLUB?itemcode=03CLUB-00185"
    }
  ];

  return (
    <section id="shop" className="py-[60px] md:py-[80px] lg:py-[120px] bg-white text-llsa-charcoal">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-[40px] md:mb-[60px]">
          <h2 className="text-[32px] md:text-[36px] lg:text-[48px] font-serif font-bold mb-4 leading-tight text-llsa-charcoal">
            Shop LLSA Merch
          </h2>
          <p className="text-[#A1A1A1] text-lg font-sans font-light">
            Support our community. Wear your pride.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {products.map((product, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] border border-gray-50 transition-transform duration-300 hover:-translate-y-1 group"
            >
              {/* Placeholder Box */}
              <div className="aspect-square w-full mb-8 bg-[#F5F5F5] border-2 border-dashed border-[#D1D5DB] flex items-center justify-center rounded-sm">
                <span className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest text-center px-4">
                  Product image coming soon
                </span>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h3 className="text-[24px] md:text-[28px] font-bold text-llsa-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-[20px] md:text-[24px] font-bold text-llsa-charcoal mb-8">
                  {product.price}
                </p>
                
                <a 
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[48px] px-6 inline-flex items-center justify-center border-2 border-llsa-charcoal text-llsa-charcoal text-[11px] font-bold uppercase tracking-label hover:bg-llsa-charcoal hover:text-white transition-all duration-300"
                >
                  <ShoppingBag size={14} className="mr-2" />
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-[#A1A1A1] text-[10px] uppercase tracking-label font-bold">
            All proceeds support the LLSA general fund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Merch;