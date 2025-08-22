import React from 'react';

const PricingTiers = () => {
  const tiers = [
    {
      year: 'Year 1',
      discount: '90%',
      description: 'for the 1st year—300 free Fin resolutions included monthly. Fin, Phone, SMS, and WhatsApp are charged at list price.',
    },
    {
      year: 'Year 2', 
      discount: '50%',
      description: 'for the 2nd year—Fin, Phone, SMS, and WhatsApp are charged at list price.',
    },
    {
      year: 'Year 3',
      discount: '25%', 
      description: 'for the 3rd year—Fin, Phone, SMS, and WhatsApp are charged at list price.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Save year on year</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div key={index} className="border border-black/40 p-6 h-full flex flex-col">
              <div className="mb-auto">
                <div className="border-b border-black/40 pb-4 mb-6">
                  <span className="text-sm font-bold">{tier.year}</span>
                </div>
                <div className="mb-6">
                  <p className="text-2xl md:text-3xl font-bold font-serif">
                    <span className="highlight">{tier.discount}</span> discount
                  </p>
                </div>
              </div>
              <p className="text-sm text-black/80 mb-6">
                {tier.description}
              </p>
              <a href="#" className="text-sm font-semibold underline hover:no-underline">
                View pricing →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTiers;