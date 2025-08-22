import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
            Early Stage Program
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Startups get 90% off Intercom + 1 year of Fin free
          </h1>
          
          {/* Dotted line separator */}
          <div className="dotted-line w-full"></div>
          
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Startups receive a 90% discount on the Intercom Customer Service Suite, including Fin—the #1 AI agent in customer service—free for a full year with 300 monthly resolutions. That's equivalent to having a full-time human support agent at no cost.
            </p>
            
            <div>
              <Button className="btn-intercom-primary text-lg px-8 py-3">
                Apply now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=800&fit=crop" 
              alt="Intercom dashboard"
              className="w-full h-full object-cover"
            />
            {/* Overlay chat interface mockup */}
            <div className="absolute inset-4 bg-white rounded-lg shadow-2xl p-4 max-w-xs">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">I</span>
                </div>
                <span className="font-semibold">Intercom</span>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 text-sm">
                  Hi there! How can I help you today?
                </div>
                <div className="bg-orange-500 text-white rounded-lg p-3 text-sm ml-8">
                  I'd like to learn more about your early stage program
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;