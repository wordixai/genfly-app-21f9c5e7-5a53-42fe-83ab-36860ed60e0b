import React, { useState } from 'react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('inbox');

  const tabs = [
    {
      id: 'inbox',
      title: 'Inbox',
      description: 'Work smarter and collaborate faster with our configurable, AI-enhanced Inbox designed for speed and efficiency—with a fully integrated ticketing system.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop'
    },
    {
      id: 'fin-ai-agent',
      title: 'Fin AI Agent', 
      description: 'Your free AI agent for a full year. Includes 300 resolutions a month—just like having a full-time human support agent on your team.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&h=400&fit=crop'
    },
    {
      id: 'outbound',
      title: 'Outbound',
      description: 'Onboard, educate, and notify your customers with in-context, automated messages—cutting support volume and keeping customers happy.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&h=400&fit=crop'
    },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get a direct line to customers with best-in-class support</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tab Navigation */}
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-6 rounded-md border border-transparent transition-all relative ${
                  activeTab === tab.id 
                    ? 'bg-gray-50 tab-trigger-active' 
                    : 'hover:bg-gray-25'
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{tab.title}</h3>
                  <p className="text-sm text-gray-600">{tab.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={activeTabData?.image}
                alt={activeTabData?.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;