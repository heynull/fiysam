'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackNavigationProps {
  label?: string; // Optional custom label
  className?: string; // Optional custom classes
}

export default function BackNavigation({ 
  label = 'Back to Home', 
  className = '' 
}: BackNavigationProps) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-2 text-grey-energy hover:text-white-warm transition-colors group ${className}`}
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}