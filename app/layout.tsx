import { Patua_One } from '@next/font/google';

import '@styles/globals.css';

const patuaOne = Patua_One({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={patuaOne.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
