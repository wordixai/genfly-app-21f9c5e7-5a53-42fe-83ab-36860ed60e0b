import React from 'react';

const CompanyLogos = () => {
  const companies = [
    'Anthropic', 'Lovable', 'Clay', 'Perplexity', 
    'Consensus', 'Gamma', 'Synthesia', 'ChatPRD'
  ];

  return (
    <div className="py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Join 10,000+ fast-growing startups using Intercom
        </h2>
        
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <span 
                key={index} 
                className="text-2xl md:text-3xl font-bold whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <button className="btn-intercom-primary px-8 py-3 rounded-md font-semibold">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;