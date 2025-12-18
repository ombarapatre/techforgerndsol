import { Award, Users, Target } from 'lucide-react';
import logo from '../assets/logo.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About TechForge R&D Solutions
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                TechForge R&D Solutions is a research and engineering company focused on practical product development for industrial and technology-driven clients. We blend R&D expertise with hands-on engineering to build reliable, real-world solutions.              </p>
              <p>
                Our team works across embedded electronics, firmware development, software integration, and small-scale manufacturing support. We help clients move from concept to prototype and onward to production with fast iteration and strong engineering validation.              </p>
              <p>
                We also support projects in drone technology, including flight electronics, sensor payloads, telemetry systems, and structural manufacturing guidance. This enables companies exploring UAV automation, inspection tools, and custom drone applications to bring their ideas to reality.              </p>
            </div>
          </div>

          {/* Right side: replaced image with logo card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center p-8">
            {/* logo centered with padding and white background to match card */}
            <img
              src={logo}
              alt="TechForge R&D Logo"
              className="w-full max-w-xs h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD6C8] rounded-full mb-4">
              <Target size={32} className="text-[#E46351]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform research into reliable products through practical engineering and validation
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD6C8] rounded-full mb-4">
              <Award size={32} className="text-[#E46351]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Credentials</h3>
            <p className="text-gray-600 leading-relaxed">
              Udyam registered with certified manufacturing and R&D capabilities for industrial projects
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD6C8] rounded-full mb-4">
              <Users size={32} className="text-[#E46351]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Team</h3>
            <p className="text-gray-600 leading-relaxed">
              Experienced engineers and researchers with expertise in electronics, firmware, and systems integration
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#F07E6B] to-[#E46351] rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to bring your product idea to life?
          </h3>
          <p className="text-lg mb-8 text-[#FFD6C8] max-w-2xl mx-auto">
            Let's discuss how we can help with research, prototyping, or manufacturing support for your next project
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-[#E46351] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
          >
            Connect Now
          </button>
        </div>
      </div>
    </section>
  );
}