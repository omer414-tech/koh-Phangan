"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import Particles from "@/components/ui/Particles";

const ease = [0.22, 1, 0.36, 1] as const;
const TITLE = "Koh Phangan".split("");

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-screen w-full overflow-hidden bg-[#2A3A33] flex flex-col"
    >
      {/* Beach photo background */}
      <Image
        src={IMAGES.beachAerial}
        alt="נוף אוירי של חוף קופנגן עם מים טורקיזים וסלעים"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/85 via-[#1E2723]/25 to-[#1E2723]/45"
        aria-hidden="true"
      />

      {/* Twinkling particles */}
      <Particles color="255, 255, 255" />

      {/* Content — centered */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <h1
          dir="ltr"
          className="font-poppins uppercase text-white whitespace-nowrap leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(2rem, 11.5vw, 8rem)", fontWeight: 700, perspective: 700 }}
        >
          {TITLE.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: "0.6em", rotateX: -55 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.05 }}
              className="inline-block"
              style={{ transformOrigin: "bottom", width: ch === " " ? "0.3em" : undefined }}
            >
              {ch === " " ? "" : ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="font-assistant text-white/75 mt-6 text-base sm:text-lg tracking-wide"
        >
          8–16 באוקטובר 2026 · קופנגן, תאילנד
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.85 }}
          className="mt-10"
        >
          <Link
            href={APPLY_URL}
            className="inline-flex items-center gap-2 bg-[#6E8A7F] hover:bg-[#586F66] text-[#ECEEE9] font-assistant font-semibold rounded-lg px-8 py-3.5 text-sm tracking-wide transition-colors duration-300"
          >
            להרשמה <span aria-hidden="true">←</span>
          </Link>
        </motion.div>
      </div>

      {/* Bouncing down arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white/60 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
}
