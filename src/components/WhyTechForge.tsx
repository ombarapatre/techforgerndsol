import { Award, Zap, Lightbulb, ShieldCheck } from 'lucide-react';

const strengths = [
  {
    icon: Lightbulb,
    title: 'Domain R&D Expertise',
    description: 'Deep technical knowledge across electronics, firmware, and industrial systems.'
  },
  {
    icon: Award,
    title: 'Engineering-First Approach',
    description: 'Practical solutions grounded in proven engineering principles and real-world testing.'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: 'Fast iteration cycles to get from concept to working prototype efficiently.'
  },
  {
    icon: ShieldCheck,
    title: 'Industry Compliance',
    description: 'Udyam registered with certified manufacturing and R&D capabilities.'
  }
];

export default function WhyTechForge() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why TechForge
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reliable engineering partner for your product development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
              >
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD6C8] rounded-full mb-4">
                  <Icon size={28} className="text-[#E46351]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}