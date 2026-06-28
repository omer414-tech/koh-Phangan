"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <Image
        src={IMAGES.hero}
        alt="נוף אוירי של חוף קופנגן, תאילנד"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#2E4636]/50 via-[#2E4636]/30 to-[#2E4636]/75"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
        {/* Co-brand eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-poppins tracking-[0.35em] text-xs text-[#F2ECE0]/70 uppercase"
        >
          ALOHA YOGA ✕ SAY LESS STUDIOS
        </motion.p>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="flex flex-col items-center gap-1"
        >
          <h1
            className="font-poppins text-[#F2ECE0] leading-none drop-shadow-lg"
            style={{ fontSize: "clamp(4rem, 14vw, 10rem)", fontWeight: 300 }}
          >
            Koh Phangan
          </h1>
          <span
            className="font-poppins text-[#F2ECE0]/90 tracking-[0.6em]"
            style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.5rem)", fontWeight: 300 }}
          >
            R E T R E A T
          </span>
        </motion.div>

        {/* Sub-info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="font-poppins font-light italic text-[#F2ECE0]/80 text-lg tracking-widest">
            8 – 15 October 2026
          </p>
          <p className="font-assistant text-[#98A38C] text-base tracking-[0.3em]">
            קופנגן · תאילנד
          </p>
        </motion.div>

        {/* CTA → /apply */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        >
          <Link href={APPLY_URL} className="btn-primary mt-4">
            להרשמה
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-assistant text-[#F2ECE0]/50 text-xs tracking-widest uppercase"
        >
          24 מקומות בלבד
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-poppins text-[#F2ECE0]/40 text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#F2ECE0]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
