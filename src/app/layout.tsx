import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Inter, Montserrat, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '700', '900'], variable: '--font-display' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Ignition Portfolio System | Carl Anderson Saniel',
  description: 'A dark, high-impact engineering portfolio built with Next.js, TypeScript, and Supabase.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className} ${jetbrains.className}`}>
        <Navbar />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
