import './ui/global.css';
import { inter } from './ui/fonts';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge('antialiased', inter.className)}>
        {children}
      </body>
    </html>
  );
}
