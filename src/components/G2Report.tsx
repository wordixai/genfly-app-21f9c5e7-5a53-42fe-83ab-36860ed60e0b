import React from 'react';
import { Button } from '@/components/ui/button';

const G2Report = () => {
  const scores = [
    { company: 'Fin by Intercom', score: 89, isTop: true },
    { company: 'Zendesk AI Agent', score: 59, isTop: false },
    { company: 'Decagon', score: 54, isTop: false },
    { company: 'Forethought', score: 40, isTop: false },
    { company: 'Ada', score: 33, isTop: false },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-balance">
              It's official: Fin is the best AI agent on the market
            </h3>
            <p className="text-lg text-gray-700">
              In G2's most recent User Satisfaction Ratings for Customer Service, Intercom rates highest across the board. Based on over 19,000 reviews from real customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-intercom-primary">
                Read the G2 Report
              </Button>
              <Button variant="outline" className="btn-intercom-secondary">
                Read G2 Fin Reviews  
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-600 mb-4">G2's AI Agent score</p>
            <div className="space-y-3">
              {scores.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-32 text-sm font-medium truncate">
                    {item.company}
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="relative h-8 bg-gray-200 rounded">
                      <div 
                        className={`h-full rounded transition-all duration-1000 delay-${index * 200} ${
                          item.isTop ? 'g2-bar-full' : 'g2-bar-partial'
                        }`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold">
                        {item.score}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default G2Report;