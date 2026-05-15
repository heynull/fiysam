'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}