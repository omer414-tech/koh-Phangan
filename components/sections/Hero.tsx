"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";
import Particles from "@/components/ui/Particles";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#FBF7EF]"
    >
      {/* Subtle floating particles */}
      <Particles color="120, 110, 95" />

      {/* Soft bottom fade so content sits on a calm base */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#EFE7D8] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Bottom-anchored content (Veldara composition) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pb-24">
        {/* Subtitle / eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="eyebrow mb-5"
        >
          ALOHA YOGA ✕ SAY LESS STUDIOS
        </motion.p>

        {/* Heading with underlined accent word */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="font-poppins text-[#2E2620] max-w-4xl leading-[1.1]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 600 }}
        >
          Koh Phangan{" "}
          <span className="relative inline-block">
            <span
              className="absolute left-0 bottom-1.5 w-full rounded-[2px] bg-[#A1906B]"
              style={{ height: "0.62rem" }}
              aria-hidden="true"
            />
            <span className="relative">Retreat</span>
          </span>
        </motion.h1>

        {/* Hebrew sub-info */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.45 }}
          className="font-assistant text-[#2E2620]/65 mt-6 text-base sm:text-lg tracking-wide"
        >
          8–15 באוקטובר 2026 · קופנגן, תאילנד
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <Link
            href={APPLY_URL}
            className="inline-flex items-center gap-2 bg-[#A1906B] hover:bg-[#8A7959] text-[#FBF7EF] font-assistant font-semibold rounded-lg px-8 py-3.5 text-sm tracking-wide transition-colors duration-300"
          >
            להרשמה <span aria-hidden="true">←</span>
          </Link>
          <p className="font-assistant text-[#2E2620]/45 text-xs tracking-[0.25em] uppercase">
            24 מקומות בלבד
          </p>
        </motion.div>
      </div>

      {/* Bouncing down arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-[#98A38C] animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
}
