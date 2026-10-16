import { SERVICES_DATA } from '../data/portfolioData';
import { Check, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#7a7269] font-semibold mb-2">
            Scope of Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#221f1d]">
            Tailored Administrative Support for Growing Operations
          </h2>
          <p className="text-sm sm:text-base text-[#5c5650] mt-3 leading-relaxed">
            Focused, dependable assistance designed to eliminate repetitive administrative burdens, protect founder bandwidth, and maintain spotless business documentation.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-[#fcfbfa] border border-[#e2dcd2] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#b8ae9f] hover:shadow-xs transition-all ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Clean unboxed index & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#8c847a]">
                    {service.number}
                  </span>
                  <a
                    href="#contact"
                    className="text-[#8c847a] hover:text-[#221f1d] transition-colors p-1"
                    title="Inquire about this service"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#221f1d] tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5c5650] mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-[#ede7de] space-y-2.5">
                  <div className="text-xs font-semibold text-[#8c847a] uppercase tracking-wider mb-2">
                    Key Deliverables
                  </div>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4a4540]">
                      <Check className="w-3.5 h-3.5 text-[#2c2825] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede7de] flex items-center justify-between text-xs text-[#8c847a]">
                <span>Standardized SOPs</span>
                <span>Prompt Execution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
