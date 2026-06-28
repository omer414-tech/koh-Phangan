"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type Slide = { src: string; alt: string };

const variants = {
  enter: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, scale: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, scale: 1.02, x: dir > 0 ? -40 : 40 }),
};

export default function Carousel({
  slides,
  autoMs = 5000,
}: {
  slides: Slide[];
  autoMs?: number;
}) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  const go = useCallback(
    (d: number) => setState(([i]) => [(i + d + n) % n, d]),
    [n]
  );
  const jump = useCallback(
    (target: number) => setState(([i]) => [target, target > i ? 1 : -1]),
    []
  );

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setInterval(() => setState(([i]) => [(i + 1) % n, 1]), autoMs);
    return () => clearInterval(t);
  }, [paused, n, autoMs]);

  return (
    <div
      className="relative w-full  overflow-hidden bg-[#223029] group"
      style={{ height: "clamp(340px, 56vw, 620px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/55 via-transparent to-transparent" aria-hidden="true" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4 pointer-events-none">
        <p className="font-assistant text-[#ECEEE9]/90 text-sm sm:text-base max-w-xs leading-snug">
          {slides[index].alt}
        </p>
        <span className="font-poppins text-[#ECEEE9]/70 text-sm tabular-nums tracking-widest">
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="הקודם"
        className="absolute top-1/2 -translate-y-1/2 start-4 w-11 h-11 rounded-full bg-[#ECEEE9]/15 hover:bg-[#ECEEE9]/30 backdrop-blur-sm text-[#ECEEE9] flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="הבא"
        className="absolute top-1/2 -translate-y-1/2 end-4 w-11 h-11 rounded-full bg-[#ECEEE9]/15 hover:bg-[#ECEEE9]/30 backdrop-blur-sm text-[#ECEEE9] flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute top-4 inset-x-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => jump(i)}
            aria-label={`תמונה ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-[#ECEEE9]" : "w-1.5 bg-[#ECEEE9]/40 hover:bg-[#ECEEE9]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
