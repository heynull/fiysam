'use client';

import { motion } from 'framer-motion';

const services = [
  { icon: '⚙️', title: 'Engineering & Design', description: 'FEED studies, detailed engineering, and technical design for upstream, midstream, and downstream energy infrastructure.' },
  { icon: '🏗️', title: 'EPC Contracting', description: 'End-to-end engineering, procurement, and construction for oil & gas processing facilities, flow stations, and power plants.' },
  { icon: '🔧', title: 'Pipeline Services', description: 'Pipeline design, installation, integrity inspection, repair, and corrosion management for onshore and offshore systems.' },
  { icon: '⚡', title: 'Power Solutions', description: 'Design and installation of diesel, gas, and hybrid power generation systems for industrial and commercial clients.' },
  { icon: '🛡️', title: 'HSE & Compliance', description: 'Health, Safety & Environment management, regulatory compliance, risk assessment, and site safety supervision.' },
  { icon: '📦', title: 'Procurement & Logistics', description: 'Global sourcing, procurement, supply chain management, and logistics coordination for critical energy equipment.' },
];

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-[60px] py-16 md:py-[100px] bg-deep">
      <div className="grid md:grid-cols-2 gap-6 md:gap-[60px] items-end mb-10 md:mb-[60px]">
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title text-left">Integrated Energy Services, Built to Last</h2>
        </div>
        <p className="section-sub text-sm md:text-base">
          From initial engineering studies to full-scale construction and maintenance, we deliver complete energy solutions with precision and accountability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-px bg-border-dark md:border md:border-border-dark md:rounded-lg md:overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card-bg p-6 md:p-9 cursor-default relative overflow-hidden hover:bg-[#141E28] transition-colors duration-300 rounded-lg md:rounded-none"
          >
            <div className="w-12 h-12 bg-amber-energy/5 border border-amber-energy/20 rounded-md flex items-center justify-center mb-4 md:mb-6 text-[1.4rem]">
              {service.icon}
            </div>
            <h3 className="text-[1rem] md:text-[1.15rem] font-bold mb-2 md:mb-3 tracking-[-0.01em]">{service.title}</h3>
            <p className="text-[0.8rem] md:text-[0.875rem] text-grey-energy leading-[1.5] md:leading-[1.65] font-light">{service.description}</p>
            <span className="block mt-4 md:mt-6 text-amber-energy text-[1.2rem] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}