import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What does the Intercom Early Stage Program cover?',
      answer: `Get access to the best AI-first Intercom features for growing teams: like powerful automation tools and Fin AI Agent. Get all of these features at a 90% discount, from $65/month for your first year, 50% off your second year and then 25% off for the third year.

Here's a quick breakdown of what you have access to:
1. 6 Advanced Seats (Feature List)
2. 6 Copilot Seats
3. 20 Lite Seats
4. Proactive Support Plus: 500 messages per month (Product tours, checklists, surveys)
5. 300 Fin Resolutions per month

Your 90% discount applies to usage based costs for Email, Messages Sent over (500 per month) and additional Seats (over 6).

The discount does not apply to Fin (over 300 per month), Phone, SMS & WhatsApp which are charged at list price. Here is a full guide to Intercom's usage based costs.`,
      bgColor: 'bg-teal-50'
    },
    {
      question: 'What about Fin AI Agent pricing?',
      answer: '300 Fin Resolutions per month are included, after that they are charged at 99c per resolution. Read more about Fin pricing here.',
      bgColor: 'bg-pink-50'
    },
    {
      question: 'What happens after the first year?',
      answer: 'In the first year you get this program for $65 per month from the original list price of $903. That\'s over a 90% discount! Subsequently, in the second year, you\'ll get a 50% discount, followed by a 25% discount in the third year. If the costs are too high in the second year and beyond you can move to our Essential plan starting at $39/month.',
      bgColor: 'bg-yellow-50'
    },
    {
      question: 'What if we\'re larger than 15 employees?',
      answer: 'If your company is not eligible, you can start a trial of our regular plans on our pricing page or connect with our Sales team through Messenger for more options.',
      bgColor: 'bg-green-50'
    },
    {
      question: 'How can I become a partner and offer this discount to my portfolio companies?',
      answer: 'You can apply to be a partner here. Our team will review your application and get back to you.',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQs</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className={`px-6 py-4 ${faq.bgColor}`}>
                  <div className="prose prose-sm max-w-none">
                    {faq.answer.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;