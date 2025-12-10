import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              TechForge R&D Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Practical R&D and engineering solutions for industrial clients. From concept to prototype to production.
            </p>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={16} />
              <a
                href="mailto:techforgernd@gmail.com"
                className="hover:text-[#F07E6B] transition-colors"
              >
                techforgernd@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#F07E6B] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="hover:text-[#F07E6B] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#F07E6B] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#F07E6B] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>R&D & Product Engineering</li>
              <li>Embedded Systems</li>
              <li>Software Solutions</li>
              <li>Manufacturing Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {currentYear} TechForge R&D Solutions. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <button className="hover:text-[#F07E6B] transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-[#F07E6B] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Udyam registered with certified manufacturing and R&D capabilities
          </p>
        </div>

      </div>
    </footer>
  );
}