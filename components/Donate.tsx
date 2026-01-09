import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section id="donate" className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Support Our Cause</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Your contribution directly supports student scholarships, event programming, and community outreach initiatives. Help us empower the next generation of Latinx legal professionals.
        </p>

        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[25, 50, 100, 250].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`py-4 px-6 text-lg font-bold transition-all duration-200 border ${
                  selectedAmount === amount
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/30 hover:border-white'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="mb-8">
             <div className="relative max-w-xs mx-auto">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  placeholder="Other Amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-white text-center text-lg transition-colors"
                />
             </div>
          </div>

          <button className="w-full md:w-auto px-12 py-4 bg-white text-black text-lg font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300">
            Donate Now
          </button>
          
          <p className="mt-6 text-xs text-gray-500">
            *All donations are tax-deductible. A receipt will be sent to your email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;