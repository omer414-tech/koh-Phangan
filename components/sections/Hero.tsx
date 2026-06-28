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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#F4EEE3] flex flex-col">
        {/* 3D flower — smooth canvas frame-scrub driven by scroll progress.
            mix-blend-lighten drops the clip's black so the flower floats on the
            bright cream backdrop. */}
        <ScrollFlower src={HERO_VIDEO} progress={scrollYProgress} />

        {/* Soft cream grounding gradient for text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#F4EEE3] via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Subtle floating particles (dark dots on the light backdrop) */}
        <Particles color="120, 110, 95" />

        {/* Bottom-anchored content — fades out as you scroll */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="eyebrow mb-5"
          >
            ALOHA YOGA ✕ SAY LESS STUDIOS
          </motion.p>

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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="font-assistant text-[#2E2620]/70 mt-6 text-base sm:text-lg tracking-wide"
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
            <p className="font-assistant text-[#2E2620]/50 text-xs tracking-[0.25em] uppercase">
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
            className="w-6 h-6 text-[#98A38C] animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
