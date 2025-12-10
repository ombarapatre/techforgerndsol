import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                From Research to Reliable Products — Practical R&D & Engineering
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                End-to-end R&D, embedded systems, product prototyping and small-scale manufacturing support for industry.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#F07E6B] text-white px-8 py-4 rounded-lg hover:bg-[#E46351] transition-all shadow-md hover:shadow-lg font-medium text-lg flex items-center justify-center gap-2"
              >
                Request a Consultation
                <ArrowRight size={20} />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-[#F07E6B] text-[#F07E6B] px-8 py-4 rounded-lg hover:bg-[#FFF0EB] transition-colors font-medium text-lg"
              >
                View Services
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Free 30-minute technical consultation available
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/src/assets/hero.png"
                alt="Engineering and prototyping workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-xs">
              <p className="text-sm text-gray-600 mb-2">Trusted by industry leaders</p>
              <p className="font-semibold text-gray-900">
                Bajaj Steel, ICAR-CIRCOT & more
              </p>
            </div>
          </div>
        </div>

        {/* Scroll-down button */}
        <button
          onClick={() => scrollToSection('services')}
          className="mx-auto mt-16 flex flex-col items-center text-gray-400 hover:text-[#F07E6B] transition-colors"
        >
          <span className="text-sm mb-2">Explore our capabilities</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}