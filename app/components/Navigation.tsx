'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-[60px] py-4 md:py-5 transition-all duration-300 ${
        isScrolled ? 'bg-obsidian/85 backdrop-blur-[14px] border-b border-border-dark' : 'bg-transparent'
      }`}>
        <Link href="/" className="font-syne font-extrabold text-[1.1rem] md:text-[1.35rem] tracking-[-0.02em] text-white-warm">
          FIYSAM <span className="text-amber-energy">ENERGY</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-9 list-none">
          <li><Link href="#services" className="text-grey-energy text-sm font-medium tracking-[0.04em] uppercase hover:text-white-warm transition-colors">Services</Link></li>
          <li><Link href="#projects" className="text-grey-energy text-sm font-medium tracking-[0.04em] uppercase hover:text-white-warm transition-colors">Projects</Link></li>
          <li><Link href="#about" className="text-grey-energy text-sm font-medium tracking-[0.04em] uppercase hover:text-white-warm transition-colors">About</Link></li>
          <li><Link href="#contact" className="text-grey-energy text-sm font-medium tracking-[0.04em] uppercase hover:text-white-warm transition-colors">Contact</Link></li>
          <li><Link href="#contact" className="bg-amber-energy text-obsidian px-5 py-2.5 rounded font-bold text-sm hover:bg-[#f0b030] transition-colors">Get a Quote</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white-warm z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-deep z-40 transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link href="#services" className="text-white-warm text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="#projects" className="text-white-warm text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link href="#about" className="text-white-warm text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="#contact" className="text-white-warm text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="#contact" className="bg-amber-energy text-obsidian px-8 py-3 rounded font-bold" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
        </div>
      </div>
    </>
  );
}