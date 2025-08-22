import React from 'react';

const HelpfulResources = () => {
  const resources = [
    {
      number: '01',
      title: 'Exclusive deals on startup tools',
      description: 'Program members get credits and discounts worth $100K on Stripe, Notion and more.',
      link: 'Learn more'
    },
    {
      number: '02', 
      title: 'Early Stage Academy',
      description: 'Deep-dive courses from Intercom experts on topics like support, engagement, and sales.',
      link: 'Learn more'
    },
    {
      number: '03',
      title: 'Inside the Intercom Blog', 
      description: 'Our blog and podcast give you in-depth interviews, best practices, insights and more.',
      link: 'Learn more'
    },
    {
      number: '04',
      title: 'Intercom Community',
      description: 'Join our community forum to ask questions or connect with Intercom customers and partners.',
      link: 'Learn more'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Other helpful resources</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-4">
                <div className="text-2xl font-bold">{resource.number}</div>
                <div className="dotted-line"></div>
              </div>
              <div className="space-y-3">
                <h6 className="font-bold text-lg">{resource.title}</h6>
                <p className="text-sm text-gray-600">{resource.description}</p>
                <a href="#" className="text-sm font-semibold underline hover:no-underline">
                  {resource.link} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpfulResources;