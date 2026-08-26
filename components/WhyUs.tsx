'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const points = [
  { num: '01', title: 'Local Knowledge, Global Standards', description: 'We understand Nigerian terrain, regulations, and stakeholders while applying internationally benchmarked engineering standards on every project.' },
  { num: '02', title: 'Integrated Service Delivery', description: 'One company, one contract, zero coordination gaps. We handle engineering through to handover — reducing your risk and administrative burden.' },
  { num: '03', title: 'Safety is Non-Negotiable', description: 'Our HSE record speaks for itself. We operate with zero-LTI targets and robust safety management systems on every site, every day.' },
];

const checklist = [
  'ISO-certified engineering processes',
  'In-country Nigerian expertise & workforce',
  'End-to-end project management',
  '24/7 operations & emergency response',
  'Transparent reporting & client communication',
];

export default function WhyUs() {
  return (
    <section id="about" className="px-5 md:px-[60px] py-16 md:py-[100px]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left Visual */}
        <div className="relative order-2 md:order-1">
          <div className="bg-card-bg border border-border-dark rounded-xl p-6 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(232,160,32,0.07)_0%,transparent_70%)]" />
            <div className="font-syne text-[1.2rem] md:text-[1.6rem] font-bold leading-[1.3] mb-6 md:mb-8 tracking-[-0.02em]">
              &ldquo;We don&apos;t just build energy <em className="not-italic text-amber-energy">infrastructure</em> — we build the trust to power it.&rdquo;
            </div>
            <ul className="flex flex-col gap-2 md:gap-3.5 list-none">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3 text-[0.8rem] md:text-[0.9rem] text-light-energy">
                  <span className="w-5 h-5 bg-amber-energy/5 rounded-full flex items-center justify-center text-amber-energy flex-shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-deep border border-amber-energy/30 rounded-lg p-4 md:p-6"
          >
            <div className="font-syne text-[1.5rem] md:text-[2rem] font-extrabold text-amber-energy leading-none mb-1">A+</div>
            <div className="text-[0.65rem] md:text-[0.75rem] text-grey-energy">Client retention rate</div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2">
          <div className="section-label">Why Fiysam</div>
          <h2 className="section-title">Engineering Excellence, African Scale</h2>
          <p className="section-sub text-sm md:text-base mb-8 md:mb-12">
            We combine global standards with deep local knowledge to deliver projects that work — on time, on budget, and beyond expectation.
          </p>

          <div className="flex flex-col gap-6 md:gap-9">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 md:gap-5 items-start"
              >
                <div className="font-syne text-[0.75rem] font-bold text-amber-energy tracking-[0.06em] pt-1 flex-shrink-0">{point.num}</div>
                <div>
                  <h4 className="text-[0.9rem] md:text-base font-bold mb-1 md:mb-2 tracking-[-0.01em]">{point.title}</h4>
                  <p className="text-[0.8rem] md:text-[0.875rem] text-grey-energy leading-[1.5] md:leading-[1.65] font-light">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
