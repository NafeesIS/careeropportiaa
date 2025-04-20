/* eslint-disable camelcase */
import {
  Belanosima,
  Inter,
  Manrope,
  Open_Sans,
  Playfair_Display,
} from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open_sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const belanosima = Belanosima({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-belanosima',
  weight: ['400', '600', '700'],
});
export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});
