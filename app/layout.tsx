import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
export const metadata: Metadata = { title: 'Clément Ozor — Software Engineer | Backend & AI', description: 'CV de Clément Ozor, Software Engineer spécialisé Backend & GenAI.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={GeistSans.variable}><body>{children}</body></html>;
}
