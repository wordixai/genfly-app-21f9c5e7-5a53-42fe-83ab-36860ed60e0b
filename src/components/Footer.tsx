import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Helpdesk features',
      links: [
        'Inbox', 'Copilot', 'Tickets', 'Omnichannel', 'Help Center',
        'Apps & Integrations', 'Reporting', 'Knowledge Hub', 'Outbound'
      ]
    },
    {
      title: 'Fin features',
      links: ['Fin overview', 'Capabilities', 'AI Engine']
    },
    {
      title: 'Pricing',
      links: ['Intercom Suite pricing', 'Fin pricing']
    },
    {
      title: 'Learn',
      links: ['Events', 'Intercom blog', 'Academy', 'YouTube']
    },
    {
      title: 'Evaluate', 
      links: ['Why choose Intercom', 'Safety & security', 'ROI calculator', 'Customer case studies']
    },
    {
      title: 'Support',
      links: ['Changes', 'Help Center', 'Developer hub', 'Intercom community', 'Status']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact Press']
    },
    {
      title: 'Programs',
      links: ['Solution partner', 'Technology partner', 'Early stage']
    },
    {
      title: 'Intercom in action',
      links: ['View demo', 'Free trial', 'Contact sales', 'Sign in']
    }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h6 className="font-semibold mb-4">{section.title}</h6>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <button className="hover:text-white">Your Privacy Choices</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;