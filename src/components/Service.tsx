import { FlaskConical, Cpu, Code, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FlaskConical,
    title: 'R&D & Product Engineering',
    shortDesc: 'Concept to prototype and validation.',
    description:
      'Transform ideas into market-ready products through systematic research, design, and validation.',
    deliverables: [
      'Feasibility studies and technical research',
      'Product design and CAD modeling',
      'Prototype development and testing',
      'Design validation and documentation',
    ],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems & Firmware',
    shortDesc: 'Electronics, microcontrollers, real-time firmware.',
    description:
      'Complete embedded solutions from circuit design to firmware implementation for industrial applications.',
    deliverables: [
      'Circuit design and PCB layout',
      'Microcontroller programming',
      'Real-time firmware development',
      'Sensor integration and testing',
    ],
  },
  {
    icon: Code,
    title: 'Software & Data Solutions',
    shortDesc: 'Custom software, device integration, UI/UX.',
    description:
      'Build software solutions that connect devices, process data, and provide intuitive user interfaces.',
    deliverables: [
      'Custom application development',
      'Device integration and APIs',
      'Data processing and analytics',
      'User interface design',
    ],
  },
  {
    icon: Factory,
    title: 'Small-Scale Manufacturing Support',
    shortDesc: 'PCB sourcing, assembly partners, testing.',
    description:
      'Bridge the gap from prototype to production with manufacturing guidance and quality assurance.',
    deliverables: [
      'PCB fabrication coordination',
      'Component sourcing and BOM management',
      'Assembly partner connections',
      'Quality testing and validation',
    ],
  },

  // ⭐ NEW SINGLE COMBINED CARD
  {
    icon: Factory,
    title: 'Custom & Stock Material Solutions',
    shortDesc: 'Tailored materials + reliable stock availability.',
    description:
      'We provide specialized material development for engineering needs along with ready-to-dispatch stock materials for rapid deployment.',
    deliverables: [
      // Custom Material Development
      'Custom material formulation & prototyping',
      'Mechanical and thermal performance testing',
      'Small-batch production and validation',

      // Stock Material Supply
      'Industrial-grade plastics, metals, and composites',
      'Bulk ordering and logistics coordination',
      'Material quality inspection and traceability',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end engineering solutions that take your product from concept to reality
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <div
                key={index}
                className={`
                  bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-200
                  ${isLast ? 'md:col-span-2 md:w-1/2 mx-auto' : ''}
                `}
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#F07E6B] text-white p-3 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.shortDesc}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6">{service.description}</p>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <ArrowRight
                          size={16}
                          className="text-[#E46351] mt-1 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}