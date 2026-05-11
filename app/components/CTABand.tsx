'use client';

import Link from 'next/link';

export default function CTABand() {
  return (
    <div className="bg-gradient-to-br from-card-bg to-[#0D1520] border-t border-border-dark border-b border-border-dark px-6 md:px-[60px] py-[90px] grid md:grid-cols-[1fr_auto] items-center gap-[60px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-full bg-[radial-gradient(ellipse_at_right,rgba(232,160,32,0.06)_0%,transparent_70%)]" />
      
      <div>
        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
          Ready to Power Your <em className="not-italic text-amber-energy">Next Project?</em>
        </h2>
        <p className="text-grey-energy mt-3 text-[0.95rem] max-w-[480px]">
          Whether it&apos;s a small facility upgrade or a full EPC contract, Fiysam Energy is ready to deliver. Let&apos;s talk about your requirements.
        </p>
      </div>
      
      <div className="flex flex-col gap-3.5 items-center flex-shrink-0">
        <Link href="#contact" className="btn-primary w-[200px] text-center">Request a Quote</Link>
        <div className="text-[0.75rem] text-grey-energy text-center">Response within 24 hours</div>
      </div>
    </div>
  );
}