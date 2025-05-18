// components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SkillBridge
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/browse-jobs">Browse Jobs</Link>
          <Link href="/find-talent">Find Talent</Link>
          <Link href="/vetting">Vetting</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login" className="text-blue-600 font-medium">
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="md:hidden bg-white px-6 py-4 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/browse-jobs">Browse Jobs</Link>
          <Link href="/find-talent">Find Talent</Link>
          <Link href="/vetting">Vetting</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Log In</Link>
          <Link
            href="/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
}
