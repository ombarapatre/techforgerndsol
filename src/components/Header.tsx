import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Company */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-xl font-bold text-gray-900 focus:outline-none"
              aria-label="Go to top / Home"
            >
              <img
                src={logo}
                alt="TechForge R&D logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-[1.125rem] leading-none">
                TechForge R&D Solution
              </span>
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#E46351] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#E46351] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#E46351] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#F07E6B] text-white px-6 py-2 rounded-lg hover:bg-[#E46351] transition-colors font-medium shadow-sm"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu content */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-[#FFF0EB] rounded-md"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection('case-studies')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-[#FFF0EB] rounded-md"
            >
              {/* Projects
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-[#FFF0EB] rounded-md"
            > */}
              About
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-[#FFF0EB] rounded-md"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-[#F07E6B] text-white px-6 py-2 rounded-lg hover:bg-[#E46351] transition-colors font-medium"
            >
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}