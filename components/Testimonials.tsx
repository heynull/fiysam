'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Adebayo Okonkwo',
    role: 'VP Operations, PetroWest Nigeria',
    text: '"Fiysam delivered our flow station upgrade on time and under budget. Their engineering team is exceptional and their HSE record on-site was outstanding."',
    initials: 'AO',
  },
  {
    name: 'Chidi Ikenna',
    role: 'Project Director, Delta Power Corp',
    text: '"From concept to commissioning, Fiysam\'s integrated approach saved us months of coordination time. Truly a world-class team with Nigerian roots."',
    initials: 'CI',
  },
  {
    name: 'Fatima Mohammed',
    role: 'Head of Engineering, NigerPipe Ltd',
    text: '"Their pipeline integrity team identified issues our previous contractor missed entirely. Fiysam\'s technical depth is unmatched in the region."',
    initials: 'FM',
  },
];

export default function Testimonials() {
  return (
    <section className="px-5 md:px-[60px] py-16 md:py-[100px] bg-deep">
      <div className="text-center">
        <div className="section-label justify-center">Client Voices</div>
        <h2 className="section-title">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-[60px]">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card-bg border border-border-dark rounded-lg p-6 md:p-9"
          >
            <div className="flex items-center gap-0.5 text-amber-energy mb-4 md:mb-5" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, star) => (
                <Star key={star} className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p className="text-[0.85rem] md:text-[0.9rem] text-light-energy leading-[1.6] md:leading-[1.75] mb-6 md:mb-7 italic font-light">{testimonial.text}</p>
            <div className="flex items-center gap-3 md:gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-energy/5 border border-amber-energy/30 flex items-center justify-center font-syne font-bold text-[0.85rem] text-amber-energy">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-[0.8rem] md:text-[0.875rem] font-semibold">{testimonial.name}</div>
                <div className="text-[0.7rem] md:text-[0.75rem] text-grey-energy">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
