import Link from 'next/link';

const footerLinks = {
  services: ['Engineering & Design', 'EPC Contracting', 'Pipeline Services', 'Power Solutions', 'HSE & Compliance'],
  company: ['About Fiysam', 'Projects', 'Careers', 'Partners', 'News'],
  contact: ['Port Harcourt Office', 'Lagos Liaison Office', 'Request a Quote', 'Emergency Line'],
};

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-border-dark px-5 md:px-[60px] pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-[60px] mb-10 md:mb-[60px]">
        {/* Brand */}
        <div>
          <div className="font-syne font-extrabold text-[1.2rem] md:text-[1.35rem] tracking-[-0.02em] text-white-warm">
            FIYSAM <span className="text-amber-energy">ENERGY</span>
          </div>
          <p className="text-[0.8rem] md:text-[0.875rem] text-grey-energy leading-[1.6] md:leading-[1.7] mt-3 md:mt-4 max-w-[280px] font-light">
            Nigeria&apos;s integrated energy services company — engineering, construction, and solutions for the oil, gas, and power sectors.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h5 className="text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-grey-energy mb-4 md:mb-5">Services</h5>
          <ul className="list-none flex flex-col gap-2 md:gap-3">
            {footerLinks.services.map((link, index) => (
              <li key={index}>
                <Link href="#" className="text-[0.8rem] md:text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h5 className="text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-grey-energy mb-4 md:mb-5">Company</h5>
          <ul className="list-none flex flex-col gap-2 md:gap-3">
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <Link href="#" className="text-[0.8rem] md:text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h5 className="text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-grey-energy mb-4 md:mb-5">Contact</h5>
          <ul className="list-none flex flex-col gap-2 md:gap-3">
            {footerLinks.contact.map((link, index) => (
              <li key={index}>
                <Link href="#" className="text-[0.8rem] md:text-[0.875rem] text-light-energy font-light hover:text-amber-energy transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border-dark pt-6 md:pt-7 text-[0.7rem] md:text-[0.78rem] text-grey-energy">
        <span>© 2025 Fiysam Energy Services Ltd. All rights reserved.</span>
        
        {/* Social Media Links - Updated with real URLs */}
        <div className="flex gap-3 md:gap-4">
          <a 
            href="https://linkedin.com/company/fiysam-energy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 bg-card-bg border border-border-dark rounded flex items-center justify-center text-[0.8rem] hover:border-amber-energy hover:text-amber-energy transition-colors"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a 
            href="https://twitter.com/fiysamenergy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 bg-card-bg border border-border-dark rounded flex items-center justify-center text-[0.8rem] hover:border-amber-energy hover:text-amber-energy transition-colors"
            aria-label="Twitter"
          >
            𝕏
          </a>
          <a 
            href="https://facebook.com/fiysamenergy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 bg-card-bg border border-border-dark rounded flex items-center justify-center text-[0.8rem] hover:border-amber-energy hover:text-amber-energy transition-colors"
            aria-label="Facebook"
          >
            f
          </a>
        </div>
      </div>
    </footer>
  );
}