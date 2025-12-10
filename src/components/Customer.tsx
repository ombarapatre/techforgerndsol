import { Building2 } from 'lucide-react';

const customers = [
  {
    name: 'Bajaj Steel Industries Ltd.',
    location: 'Nagpur',
    category: 'Manufacturing'
  },
  {
    name: 'Ginning Training Centre',
    organization: 'ICAR-CIRCOT',
    category: 'Research & Training'
  }
];

export default function Customers() {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#E46351] mb-2 uppercase tracking-wide">
            Trusted By
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Industry Leaders Partner With Us
          </h2>
        </div>

        {/* Customer Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#F07E6B] transition-colors"
            >
              <div className="flex items-start gap-4">
                
                {/* Icon wrapper */}
                <div className="bg-white p-3 rounded-lg border border-gray-300">
                  <Building2 size={32} className="text-gray-700" />
                </div>

                {/* Customer info */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {customer.name}
                  </h3>

                  {customer.location && (
                    <p className="text-gray-600 text-sm mb-1">{customer.location}</p>
                  )}

                  {customer.organization && (
                    <p className="text-gray-600 text-sm mb-1">{customer.organization}</p>
                  )}

                  {/* Category badge */}
                  <span className="inline-block mt-2 text-xs font-medium text-[#E46351] bg-[#FFF0EB] px-3 py-1 rounded-full border border-[#F5A091]">
                    {customer.category}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Serving manufacturing, research, and industrial clients across India
          </p>
        </div>

      </div>
    </section>
  );
}