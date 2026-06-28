"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";
import Particles from "@/components/ui/Particles";
import ScrollFlower from "@/components/ui/ScrollFlower";

const ease = [0.22, 1, 0.36, 1] as const;

// TODO: this is the Veldara reference video (3D flower). Replace with your own
// hosted clip for production — it's a third-party asset.
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Progress across the tall section: 0 at top, 1 when fully scrolled through.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Fade the text/CTA out as you scroll so it ends on the clean flower.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -40]);

  return (
    // Tall track gives the scroll distance for the scrub.
    <section ref={sectionRef} id="hero" aria-label="Hero" className="relative h-[260vh]">
      {/* Sticky full-screen pane stays put while you scroll the track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#3A352D] flex flex-col">
        {/* 3D flower — smooth canvas frame-scrub driven by scroll progress.
            The clip's blacks are lifted to a warm mid-tone (in ScrollFlower) so
            the hero is brighter than the original while the flower stays visible. */}
        <ScrollFlower src={HERO_VIDEO} progress={scrollYProgress} />

        {/* Grounding gradient for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#2A251F]/85 via-transparent to-[#2A251F]/15"
          aria-hidden="true"
        />

        {/* Subtle floating particles */}
        <Particles color="255, 255, 255" />

        {/* Bottom-anchored content — fades out as you scroll */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="eyebrow mb-5 !text-white/70"
          >
            ALOHA YOGA ✕ SAY LESS STUDIOS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.25 }}
            className="font-poppins uppercase text-white max-w-6xl leading-[0.92] tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.45)]"
            style={{ fontSize: "clamp(3rem, 11vw, 8rem)", fontWeight: 700 }}
          >
            Koh Phangan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="font-assistant text-white/75 mt-6 text-base sm:text-lg tracking-wide"
          >
            8–15 באוקטובר 2026 · קופנגן, תאילנד
          </motion.p>

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
            <p className="font-assistant text-white/45 text-xs tracking-[0.25em] uppercase">
              24 מקומות בלבד
            </p>
          </motion.div>
        </motion.div>

        {/* Bouncing down arrow — fades with the content */}
        <motion.div
          style={{ opacity: contentOpacity }}
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
      </div>
    </section>
  );
}
