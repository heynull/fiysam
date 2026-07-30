"use client";

const tickerItems = [
  "Independent Power Production (IPP)",
  "Facility Engineering",
  "Power Generation",
  "Water Distribution Networks",
  "Operations & Maintenance (O&M)",
  "Potable Water Treatment Plants",
  "Desalination & Water Recycling",
  "Procurement & Logistics",
];

export default function Ticker() {
  return (
    <div className="border-t border-border-dark border-b border-border-dark bg-deep overflow-hidden py-3.5">
      <div className="flex gap-[60px] animate-ticker whitespace-nowrap">
        {/* Double the items for seamless looping */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-[0.78rem] font-medium tracking-[0.08em] uppercase text-grey-energy flex-shrink-0"
          >
            <span className="w-1 h-1 bg-amber-energy rounded-full flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
