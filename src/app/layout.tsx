import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Kiruthiga Giridharan — Operations Specialist & AI-Driven Process Automation',
  description:
    'Operations Specialist with 4+ years in EMEA enterprise environments. Expert in SQL, Power BI, Tableau, Azure Pipeline, and AI-driven process automation.',
  keywords: [
    'Operations Specialist',
    'Data Operations',
    'Business Intelligence',
    'SQL',
    'Power BI',
    'Tableau',
    'Azure',
    'AI Automation',
    'EMEA',
    'Kiruthiga Giridharan',
  ],
  authors: [{ name: 'Kiruthiga Giridharan' }],
  openGraph: {
    title: 'Kiruthiga Giridharan — Operations Specialist',
    description:
      'Operations Specialist bridging data, AI tools, and enterprise delivery across EMEA markets.',
    type: 'website',
    locale: 'en_IE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiruthiga Giridharan — Operations Specialist',
    description: 'Operations Specialist bridging data, AI tools, and enterprise delivery.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
