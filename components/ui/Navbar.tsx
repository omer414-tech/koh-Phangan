"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";

const links = [
  { label: "בית", href: "#hero" },
  { label: "המרחב", href: "#our-space" },
  { label: "התוכנית", href: "#included" },
  { label: "המארחים", href: "#team" },
  { label: "הרשמה", href: APPLY_URL },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-6 py-2 md:py-3 bg-[#ECEEE9]/80 backdrop-blur-md">
        {/* Logo */}
        <Link href="#hero" className="flex flex-col" aria-label="ריטריט קופנגן">
          <span className="font-heading text-[#28302C] text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none">
            Koh
          </span>
          <span className="font-heading text-[#28302C] text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none -mt-1.5 md:-mt-2">
            Phangan
          </span>
          <span className="font-assistant text-[#28302C]/70 text-[8px] md:text-[9px] font-medium leading-none mt-1.5 md:mt-2 tracking-[0.2em] uppercase">
            Retreat 2026
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.slice(0, 4).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-assistant text-sm font-semibold text-[#28302C] hover:text-[#6E8A7F] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            href={APPLY_URL}
            className="px-6 py-3 bg-[#6E8A7F] rounded-full text-[#ECEEE9] text-sm font-semibold hover:bg-[#586F66] transition-colors duration-200"
          >
            להרשמה
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          className="md:hidden w-10 h-10 flex items-center justify-center relative"
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#28302C] rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#28302C] rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#28302C] rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              open ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`md:hidden fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-0 end-0 h-full w-[85%] max-w-sm bg-[#ECEEE9] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-heading text-4xl font-bold text-[#28302C] hover:text-[#6E8A7F] py-1 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${100 + i * 60}ms` }}
              >
                {l.label}
              </a>
            ))}
            <div
              className="mt-8 pt-8 border-t border-[#28302C]/15 transition-all duration-500"
              style={{ transitionDelay: "450ms", opacity: open ? 1 : 0 }}
            >
              <p className="font-assistant text-sm font-semibold text-[#28302C] mb-4">
                מספר המקומות מוגבל
              </p>
              <Link
                href={APPLY_URL}
                onClick={() => setOpen(false)}
                className="block w-full text-center px-6 py-4 bg-[#6E8A7F] rounded-full text-[#ECEEE9] text-sm font-semibold hover:bg-[#586F66] transition-colors duration-200"
              >
                להרשמה
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
