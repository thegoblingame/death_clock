import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Death Clock',
  description: 'A countdown timer showing how much time you have left.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
