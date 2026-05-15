'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Consultation', description: 'Understanding your project goals, site conditions, and constraints' },
  { num: '02', title: 'Engineering', description: 'FEED and detailed design with full technical documentation' },
  { num: '03', title: 'Procurement', description: 'Global sourcing of certified equipment and materials' },
  { num: '04', title: 'Construction', description: 'On-site execution with HSE oversight and quality control' },
  { num: '05', title: 'Handover', description: 'Commissioning, testing, and full documentation handover' },
];

export default function Process() {
  return (
    <section className="px-5 md:px-[60px] py-16 md:py-[100px]">
      <div className="text-center mb-8 md:mb-0">
        <div className="section-label justify-center">How We Work</div>
        <h2 className="section-title max-w-[500px] mx-auto mb-3">Our Proven Project Process</h2>
        <p className="section-sub mx-auto text-center text-sm md:text-base">Structured delivery from brief to handover — with full transparency at every stage.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-0 mt-8 md:mt-[60px] relative">
        {/* Desktop connector line - hidden on mobile */}
        <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-border-dark via-amber-dim to-border-dark" />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center px-3 md:px-4 relative bg-card-bg lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-card-bg border border-border-dark rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 font-syne text-[0.85rem] font-bold text-amber-energy relative z-10 hover:bg-amber-energy hover:text-obsidian hover:border-amber-energy transition-all duration-300">
              {step.num}
            </div>
            <h4 className="text-[0.9rem] md:text-[0.95rem] font-bold mb-2 md:mb-2.5">{step.title}</h4>
            <p className="text-[0.75rem] md:text-[0.8rem] text-grey-energy leading-[1.5] md:leading-[1.6]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}