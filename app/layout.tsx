import './globals.css';
import type { Metadata } from 'next';
import { MantineProviderWrapper } from '@/components/MantineProviderWrapper';

export const metadata: Metadata = {
  title: 'Nathaniel Binkley - Software Engineer',
  description: 'Backend / Full Stack Software Engineer specializing in API development, fintech, and cloud infrastructure',
  icons: {
    icon: '/NB.svg',
    shortcut: '/NB.svg',
    apple: '/NB.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProviderWrapper>
          {children}
        </MantineProviderWrapper>
      </body>
    </html>
  );
}

