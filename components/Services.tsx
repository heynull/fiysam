'use client';

import { motion } from 'framer-motion';
import { Droplets, Flame, HardHat, Package, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  { 
    icon: Zap,
    title: 'Power Solutions', 
    description: 'Independent and embedded power generation, gas-fired and hybrid power plants, captive power solutions, and renewable energy integration.' 
  },
  { 
    icon: Droplets,
    title: 'Water Solutions', 
    description: 'Potable and industrial water treatment, water distribution networks, desalination, wastewater treatment, recycling, and reuse.' 
  },
  { 
    icon: Flame,
    title: 'Gas Solutions', 
    description: 'Natural gas supply and aggregation, CNG and LNG solutions, gas-to-power projects, and gas infrastructure development.' 
  },
  { 
    icon: HardHat,
    title: 'EPC Contracting', 
    description: 'End-to-end engineering, procurement, and construction for power, water, and gas infrastructure projects.' 
  },
  { 
    icon: Wrench,
    title: 'Operations & Maintenance', 
    description: 'Comprehensive O&M services for power plants, water facilities, and gas infrastructure with 24/7 support.' 
  },
  { 
    icon: Package,
    title: 'Procurement & Logistics', 
    description: 'Global sourcing, procurement, supply chain management, and logistics coordination for critical infrastructure equipment.' 
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-[60px] py-16 md:py-[100px] bg-deep">
      <div className="grid md:grid-cols-2 gap-6 md:gap-[60px] items-end mb-10 md:mb-[60px]">
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title text-left">Integrated Power, Water & Gas Solutions</h2>
        </div>
        <p className="section-sub text-sm md:text-base">
          We develop, finance, build, and operate critical infrastructure that supports industrial growth, urban development, and improved quality of life across Nigeria and West Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-px bg-border-dark md:border md:border-border-dark md:rounded-lg md:overflow-hidden">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card-bg p-6 md:p-9 cursor-default relative overflow-hidden hover:bg-[#141E28] transition-colors duration-300 rounded-lg md:rounded-none"
          >
            <div className="w-12 h-12 bg-amber-energy/5 border border-amber-energy/20 rounded-md flex items-center justify-center mb-4 md:mb-6">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-[1rem] md:text-[1.15rem] font-bold mb-2 md:mb-3 tracking-[-0.01em]">{service.title}</h3>
            <p className="text-[0.8rem] md:text-[0.875rem] text-grey-energy leading-[1.5] md:leading-[1.65] font-light">{service.description}</p>
            <span className="block mt-4 md:mt-6 text-amber-energy text-[1.2rem] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </motion.div>
          );
        })}
      </div>

      {/* View All Services Button - ADD THIS */}
      <div className="text-center mt-12">
        <Link href="/services" className="btn-primary inline-flex items-center gap-2">
          View All Services <span>→</span>
        </Link>
      </div>
    </section>
  );
}
