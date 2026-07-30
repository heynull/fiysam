'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 200, suffix: '+', label: 'Projects Delivered' },
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 2, suffix: '+', label: 'Countries Served' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark mx-5 md:mx-[60px] my-8 md:my-0 rounded-lg overflow-hidden">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card-bg p-6 md:p-10 lg:p-12 text-center md:text-left relative group">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-amber-energy transition-colors duration-300" />
          <div className="font-syne text-2xl md:text-[2.8rem] font-extrabold text-white-warm leading-none mb-1 md:mb-2">
            {inView ? (
              <CountUp end={stat.number} duration={2.5} />
            ) : (
              0
            )}
            <span className="text-amber-energy">{stat.suffix}</span>
          </div>
          <div className="text-[0.75rem] md:text-[0.85rem] text-grey-energy">{stat.label}</div>
        </div>
      ))}
      <div ref={ref} />
    </div>
  );
}