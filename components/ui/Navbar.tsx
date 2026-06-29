"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";
import { useLang } from "@/components/ui/LanguageProvider";

const links = [
  { he: "בית", en: "Home", href: "#hero" },
  { he: "המרחב", en: "Space", href: "#our-space" },
  { he: "התוכנית", en: "Program", href: "#included" },
  { he: "המארחים", en: "Hosts", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = (l: { he: string; en: string }) => l[lang];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const applyLabel = lang === "he" ? "להרשמה" : "Apply";

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch language"
      className={`font-assistant text-xs font-bold tracking-widest text-[#28302C] border border-[#28302C]/30 rounded-full px-3 py-2 hover:bg-[#28302C] hover:text-[#ECEEE9] transition-colors ${className}`}
    >
      {lang === "he" ? "EN" : "עב"}
    </button>
  );

  return (
    <>
      {/* flex-row-reverse → menu on the right, logo on the left */}
      <nav className="fixed top-0 inset-x-0 z-50 flex flex-row-reverse items-center justify-between px-4 md:px-6 py-2 md:py-3 bg-[#ECEEE9]/80 backdrop-blur-md">
        {/* Logo (left) */}
        <Link href="#hero" className="flex flex-col items-start text-left" aria-label="Koh Phangan Retreat">
          <span className="font-heading text-[#28302C] text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none">
            Koh
          </span>
          <span className="font-heading text-[#28302C] text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none -mt-1.5 md:-mt-2">
            Phangan
          </span>
        </Link>

        {/* Desktop menu (right) */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-assistant text-sm font-semibold text-[#28302C] hover:text-[#6E8A7F] transition-colors"
            >
              {t(l)}
            </a>
          ))}
          <LangToggle />
          <Link
            href={APPLY_URL}
            className="px-6 py-3 bg-[#6E8A7F] rounded-full text-[#ECEEE9] text-sm font-semibold hover:bg-[#586F66] transition-colors duration-200"
          >
            {applyLabel}
          </Link>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="w-10 h-10 flex items-center justify-center relative"
          >
            <span className={`absolute h-0.5 w-6 bg-[#28302C] rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "rotate-45 translate-y-0" : "-translate-y-2"}`} />
            <span className={`absolute h-0.5 w-6 bg-[#28302C] rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`} />
            <span className={`absolute h-0.5 w-6 bg-[#28302C] rounded-full transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "-rotate-45 translate-y-0" : "translate-y-2"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`md:hidden fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute top-0 end-0 h-full w-[85%] max-w-sm bg-[#ECEEE9] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col justify-center h-full px-8 gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-heading text-4xl font-bold text-[#28302C] hover:text-[#6E8A7F] py-1 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${100 + i * 60}ms` }}
              >
                {t(l)}
              </a>
            ))}
            <div className="mt-8 pt-8 border-t border-[#28302C]/15 transition-all duration-500" style={{ transitionDelay: "450ms", opacity: open ? 1 : 0 }}>
              <p className="font-assistant text-sm font-semibold text-[#28302C] mb-4">
                {lang === "he" ? "מספר המקומות מוגבל" : "Limited spots available"}
              </p>
              <Link
                href={APPLY_URL}
                onClick={() => setOpen(false)}
                className="block w-full text-center px-6 py-4 bg-[#6E8A7F] rounded-full text-[#ECEEE9] text-sm font-semibold hover:bg-[#586F66] transition-colors duration-200"
              >
                {applyLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
