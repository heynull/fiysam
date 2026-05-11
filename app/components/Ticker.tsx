'use client';

const tickerItems = [
  'Pipeline Construction', 'Facility Engineering', 'Power Generation', 
  'HSE Compliance', 'Well Services', 'EPC Contracting', 
  'Mechanical Integrity', 'Procurement & Logistics'
];

export default function Ticker() {
  return (
    <div className="border-t border-border-dark border-b border-border-dark bg-deep overflow-hidden py-3.5">
      <div className="flex gap-[60px] animate-ticker whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.08em] uppercase text-grey-energy flex-shrink-0">
            <span className="w-1 h-1 bg-amber-energy rounded-full flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}