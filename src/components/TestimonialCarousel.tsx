import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: 'Equals',
      quote: "Intercom's startup program is a game-changer for early-stage companies. Its customer service platform has powerful AI capabilities that let us scale up with demand, and delight our customers by delivering fast, proactive, and accurate support.",
      author: 'Bobby Pinero',
      role: 'CEO and Co-Founder at Equals',
      bgColor: 'bg-green-100'
    },
    {
      company: 'Passionfroot', 
      quote: "As a startup - every. customer. matters. When we had 10 customers, Intercom helped us deliver personal support. When we scaled to 1,000s of customers, Fin AI helped us delight them as if we still had 10 customers! Their startup program made picking them even more of a no-brainer.",
      author: 'Filip Mark',
      role: 'Chief Growth Officer',
      bgColor: 'bg-orange-100'
    },
    {
      company: 'Runna',
      quote: "Intercom allowed us to provide great customer outcomes at scale. With average weekly volumes of 3000+ we knew we needed a system that allowed us to speak to multiple customers concurrently.",
      author: 'Samuel Barrett', 
      role: 'Head of Customer Experience',
      bgColor: 'bg-blue-100'
    }
  ];

  const companyTabs = testimonials.map(t => t.company);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Company tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-6">
            {companyTabs.map((company, index) => (
              <button
                key={company}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 font-semibold text-sm relative transition-colors ${
                  activeIndex === index ? 'text-black' : 'text-gray-400'
                }`}
              >
                {company}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="relative h-80">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === activeIndex 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
              }`}
            >
              <div className={`${testimonial.bgColor} rounded-lg p-8 h-full flex flex-col justify-between`}>
                <div>
                  <div className="text-2xl font-bold mb-4">{testimonial.company}</div>
                  <blockquote className="text-lg mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="dotted-line mb-6"></div>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;