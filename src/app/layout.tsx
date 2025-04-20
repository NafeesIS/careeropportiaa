import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import './globals.css';
import { belanosima, inter, manrope, openSans, playfair } from './ui/font';

export const metadata: Metadata = {
  title: 'Careeropportia',
  description: 'Dreams Come true in Russia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${openSans.variable} ${manrope.variable} ${playfair.variable} ${inter.variable} ${belanosima.variable}`}
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <body className='font-manrope antialiased'>
        {children}
        <Toaster richColors position='top-center' />
      </body>
    </html>
  );
}
