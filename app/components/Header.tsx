// app/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur px-4 py-3 md:px-6 md:py-4 shadow-sm sticky top-0 z-40">
      {/* Top row */}
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://placehold.co/150x44/0A1F44/FFFFFF?text=YOUR+LOGO"
            alt="KINDJOE Logo"
            className="h-10 w-auto rounded-md"
          />
        </Link>

        {/* Right-side nav */}
        <nav className="hidden sm:flex items-center gap-4">
          <Link href="/games" className="text-sm md:text-[15px] hover:underline">
            Games
          </Link>
          <Link href="/newsletters" className="text-sm md:text-[15px] hover:underline">
            Newsletters
          </Link>

          {/* Search (placeholder) */}
          <button
            aria-label="Search"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
          >
            🔍
          </button>

          {/* Menu */}
          <button
            aria-label="Menu"
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-5xl mt-3 h-px bg-gray-200" />

      {/* Bottom row */}
      <nav className="mx-auto max-w-5xl mt-3 flex flex-wrap justify-center sm:justify-between items-center gap-2 text-sm md:text-[15px]">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="hidden md:block w-px h-5 bg-gray-300" aria-hidden="true" />
          <Link href="/about" className="hover:underline">About</Link>
          <span className="hidden md:block w-px h-5 bg-gray-300" aria-hidden="true" />
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Link href="/business" className="hover:underline">Business</Link>
          <span className="hidden md:block w-px h-5 bg-gray-300" aria-hidden="true" />
          <Link href="/tech" className="hover:underline">Tech</Link>
          <span className="hidden md:block w-px h-5 bg-gray-300" aria-hidden="true" />
          <Link href="/lifestyle" className="hover:underline">Lifestyle</Link>
          <span className="hidden md:block w-px h-5 bg-gray-300" aria-hidden="true" />
          <Link href="/politics" className="hover:underline">Politics</Link>
          <span className="hidden md:block w-px h-5 bg-gray-300" aria-hidden="true" />
          <Link href="/local-news" className="hover:underline">Local</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
