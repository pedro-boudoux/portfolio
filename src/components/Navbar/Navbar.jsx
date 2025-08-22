"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="flex items-center justify-center p-5">
        <nav className="glass w-full max-w-5xl min-w-[300px] md:min-w-[80vw]">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between text-xl">
          {/* Left: Logo */}
          <a href="/" className="transition-transform duration-200 hover:-translate-y-[3px] flex-shrink-0 flex items-center gap-2">
          
            <img
              src="/images/logo_white_750.png"
              alt="logo"
              className="h-6 w-auto"
            />
          </a>

          {/* Center: Desktop links (truly centered) */}
          <div className={`${styles.link} pointer-events-auto absolute left-1/2 -translate-x-1/2 transform flex items-center gap-8 text-white `}>
  <a href="#skills" className="transition-transform duration-200 hover:-translate-y-[3px]"> <span className="text-yellow-500">❯ </span>skills</a>
  <a href="#projects" className="transition-transform duration-200 hover:-translate-y-[3px]"><span className="text-blue-500">❯ </span>projects</a>
  <a href="#about-me" className="transition-transform duration-200 hover:-translate-y-[3px]"><span className="text-red-500">❯ </span>about-me </a>
</div>

          {/* Right: Contact (desktop) + Hamburger (mobile) */}
          <div className="link flex items-center gap-3">
            <a
  href="#contact-me"
  className={` ${styles.link} px-4 py-2 rounded text-white transition-transform duration-200 hover:-translate-y-[3px]`}
>
  <span className="text-green-500 ">❯ </span>contact-me
</a>

            <button
              className="inline-flex items-center justify-center p-2 md:hidden text-white"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown (transparent by default; navbar grows smoothly) */}
      <div
        id="mobile-menu"
        className={`${styles.collapse} md:hidden ${open ? styles.open : ""}`}
      >
        <div className="px-4 pb-4 pt-2">
          <a href="#skills" className="block px-2 py-2 text-white"><span className="text-yellow-500">❯ </span>skills </a>
          <a href="#projects" className="block px-2 py-2 text-white"> <span className="text-blue-500">❯ </span>projects</a>
          <a href="#about-me" className="block px-2 py-2 text-white"><span className="text-red-500">❯ </span>about-me </a>
          <a href="#contact-me" className="block px-2 py-2 text-white"><span className="text-green-500 ">❯ </span>contact-me</a>
        </div>
      </div>
        </nav>
      </div>
    </div>
  );
}