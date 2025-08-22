import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex z-50">
      <nav className="fixed top-0 left-0 z-50 w-full font-sans" role="navigation" aria-label="Main Navigation">
        <div className="absolute inset-0 z-40 h-full w-full border-b border-black/25 bg-white/90 backdrop-blur-sm md:bg-white/95"></div>
        
        <div className="mx-auto flex w-full items-center justify-between px-4 py-3 md:py-2">
          <div className="max-w-7xl mx-auto flex w-full items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative z-50 md:w-[84px]">
                <button className="flex w-full cursor-pointer items-center justify-between md:px-2 md:py-2 font-semibold text-black rounded-md border border-transparent bg-transparent group-hover:opacity-80">
                  <div className="relative w-full text-base leading-none tracking-tight">
                    <svg width="32" height="32" viewBox="0 0 32 32" className="text-orange-500">
                      <circle cx="16" cy="16" r="16" fill="currentColor"/>
                      <text x="16" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">I</text>
                    </svg>
                  </div>
                  <ChevronDown className="h-6 w-6 flex-none" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <ul className="z-40 hidden space-x-1 md:flex md:items-center">
                <li><a href="#" className="px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">Home</a></li>
                <li className="group relative">
                  <button className="flex items-center px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">
                    Product <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </li>
                <li><a href="#" className="px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">Customers</a></li>
                <li className="group relative">
                  <button className="flex items-center px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">
                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </li>
                <li><a href="#" className="px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Desktop Actions */}
            <ul className="z-40 hidden items-center space-x-4 md:flex">
              <li><a href="#" className="px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">Contact sales</a></li>
              <li><a href="#" className="px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">Sign in</a></li>
              <li><a href="#" className="px-2 py-2 text-sm font-semibold hover:text-black/80 transition-colors">View demo</a></li>
              <li>
                <Button className="btn-intercom-primary">
                  Apply now
                </Button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="z-40 flex md:hidden">
              <button 
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none text-black"
              >
                <Menu className="size-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 z-30 h-screen w-full bg-white/95 backdrop-blur-sm md:hidden">
            <div className="relative flex h-full w-full flex-col justify-between pt-16">
              <ul className="space-y-2 px-4 pt-2 pb-4">
                <li className="p-3 text-xl font-bold"><a href="#">Home</a></li>
                <li className="p-3 text-xl font-bold">
                  <button className="flex w-full items-center justify-between font-bold">
                    Product <ChevronDown className="h-6 w-6" />
                  </button>
                </li>
                <li className="p-3 text-xl font-bold"><a href="#">Customers</a></li>
                <li className="p-3 text-xl font-bold">
                  <button className="flex w-full items-center justify-between font-bold">
                    Resources <ChevronDown className="h-6 w-6" />
                  </button>
                </li>
                <li className="p-3 text-xl font-bold"><a href="#">Pricing</a></li>
              </ul>
              
              <ul className="space-y-2 px-4 pb-4">
                <li className="p-3 font-semibold"><a href="#">Contact sales</a></li>
                <li className="p-3 font-semibold"><a href="#">Sign in</a></li>
                <li className="p-3 font-semibold">
                  <Button variant="outline" className="w-full">View demo</Button>
                </li>
                <li className="p-3 w-full">
                  <Button className="w-full btn-intercom-primary">Apply now</Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;