'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-5 md:px-[60px] pt-32 pb-16 md:pt-[140px] md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid-lines pointer-events-none" />
      
      <div className="max-w-full md:max-w-[50%]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[0.7rem] md:text-[0.75rem] font-medium tracking-[0.12em] uppercase text-amber-energy mb-4 md:mb-6 px-3.5 py-1.5 border border-amber-energy/30 rounded"
        >
          <span className="w-1.5 h-1.5 bg-amber-energy rounded-full animate-pulse-slow" />
          Nigeria's Premier Energy Services Partner
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.5rem] sm:text-[3rem] md:text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[1.1] md:leading-[1.05] tracking-[-0.03em] mb-4 md:mb-7"
        >
          Powering the
          <em className="not-italic text-amber-energy block">Infrastructure</em>
          of Tomorrow.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[0.95rem] md:text-[1.05rem] text-grey-energy leading-[1.6] md:leading-[1.7] mb-6 md:mb-11 font-light"
        >
          Fiysam Energy Services delivers end-to-end engineering, procurement, and construction solutions for the oil, gas, and power sectors across West Africa.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link href="#contact" className="btn-primary text-center">Start a Project →</Link>
          <Link href="#projects" className="btn-ghost text-center justify-center">View Our Work</Link>
        </motion.div>
      </div>

      {/* Hero Visual - hidden on mobile */}
      <div className="hidden md:block relative mt-12 md:mt-0">
        {/* ... keep existing hero visual code ... */}
      </div>
    </section>
  );
}