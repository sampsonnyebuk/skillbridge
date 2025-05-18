// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import HeaderWrapper from '../components/HeaderWrapper';

export const metadata: Metadata = {
  title: 'SkillBridge',
  description: 'Where Skills Meet Opportunities',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Shared Header */}
        <HeaderWrapper />

        {/* Page Content */}
        <main className="mt-6 px-6">{children}</main>
      </body>
    </html>
  );
}
