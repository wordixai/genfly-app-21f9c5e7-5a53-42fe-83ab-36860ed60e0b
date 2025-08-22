import React from 'react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&h=800&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Get started with our Early Stage Program today
        </h2>
        <Button className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
          Apply now
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;