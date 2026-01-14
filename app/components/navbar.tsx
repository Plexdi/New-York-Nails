"use client";

import Link from "next/link";
import { useState } from "react";
import { BookNowButton } from "./BookNowButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <h1 className="text-xl font-bold font-ponzu-light text-black md:text-2xl">
          New York Nails
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm text-black">
          <Link href="/#home">Home</Link>
          <Link href="/#service">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        {/* Desktop Appointment Button */}
        <BookNowButton target="_blank" className="bg-white px-4 py-2 rounded-md border border-[#edb3ff] hover:bg-[#edb3ff] transition-all duration-300">
          <span className="text-black hover:text-white">Appointments</span>
        </BookNowButton>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            <Link 
              href="/#home" 
              className="block py-2 text-sm text-black"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#service" 
              className="block py-2 text-sm text-black"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#about" 
              className="block py-2 text-sm text-black"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#gallery" 
              className="block py-2 text-sm text-black"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/#contact" 
              className="block py-2 text-sm text-black"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="block mt-4 rounded-md border border-[#edb3ff] px-4 py-2 text-sm text-center text-black hover:bg-[#edb3ff] hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
