'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Niger Delta Flow Station Upgrade',
    description: 'Complete engineering overhaul and capacity expansion of a 20,000 bopd flow station including gas flare reduction systems.',
    tag: 'Oil & Gas',
    icon: '🛢️',
    meta: '₦4.2B Contract Value',
    location: 'Delta State, 2023',
    bg: 'bg-gradient-to-br from-[#1a2530] to-[#0d1520]',
  },
  {
    title: '5MW Industrial Power Plant',
    description: 'Design and installation of gas-powered generation facility for a manufacturing complex in Ogun State.',
    tag: 'Power',
    icon: '⚡',
    meta: 'EPC Contract',
    location: 'Ogun State, 2022',
    bg: 'bg-gradient-to-br from-[#1a1e14] to-[#0d1208]',
  },
  {
    title: '12" Crude Trunk Line, 45km',
    description: 'Full pipeline design, procurement, and installation including cathodic protection and SCADA integration.',
    tag: 'Pipeline',
    icon: '🔧',
    meta: 'Integrity Certified',
    location: 'Rivers State, 2023',
    bg: 'bg-gradient-to-br from-[#1a1518] to-[#100c0e]',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 md:px-[60px] py-16 md:py-[10px] bg-deep">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
        <div>
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">Projects That Define Us</h2>
        </div>
        <Link href="/projects" className="btn-ghost text-sm">View All Projects →</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card-bg border border-border-dark rounded-lg overflow-hidden hover:-translate-y-1 hover:border-amber-energy/30 transition-all duration-300"
          >
            <div className={`relative h-[200px] md:h-[220px] ${index === 0 ? 'md:h-[320px]' : ''} ${project.bg} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-10">{project.icon}</div>
              <div className="absolute top-4 left-4 bg-obsidian/80 border border-amber-energy/30 px-3 py-1 rounded text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-amber-energy">
                {project.tag}
              </div>
            </div>
            <div className="p-5 md:p-7">
              <h3 className="text-[1rem] md:text-[1.05rem] font-bold mb-2">{project.title}</h3>
              <p className="text-[0.75rem] md:text-[0.82rem] text-grey-energy leading-[1.5] md:leading-[1.6] mb-3 md:mb-4">{project.description}</p>
              <div className="flex justify-between text-[0.7rem] md:text-[0.75rem] text-grey-energy border-t border-border-dark pt-3 md:pt-3.5">
                <span className="text-amber-energy font-medium">{project.meta}</span>
                <span>{project.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}