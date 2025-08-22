import React from 'react';

const EligibilityRequirements = () => {
  const requirements = [
    {
      category: 'Early stage',
      requirement: 'Up to $10M in funding.'
    },
    {
      category: 'Small team', 
      requirement: 'Fewer than 15 employees.'
    },
    {
      category: 'New customer',
      requirement: 'Not currently an Intercom customer.'
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Eligibility requirements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <div key={index} className="border border-black/40 p-6 h-full flex flex-col">
              <div className="mb-auto">
                <div className="border-b border-black/40 pb-4 mb-6">
                  <span className="text-sm font-bold">{req.category}</span>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold font-serif text-balance">
                    <span className="highlight">{req.requirement.split(' ').slice(0, -1).join(' ')}</span>{' '}
                    <span className="highlight">{req.requirement.split(' ').slice(-1)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityRequirements;