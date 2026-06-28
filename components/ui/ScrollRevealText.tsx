"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function Char({
  char,
  start,
  end,
  progress,
}: {
  char: string;
  start: number;
  end: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

/** Progressive character-by-character opacity reveal, scroll-linked. */
export default function ScrollRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={ref} className={`whitespace-pre-wrap ${className}`}>
      {chars.map((c, i) => {
        const cp = i / total;
        return (
          <Char
            key={i}
            char={c}
            start={Math.max(0, cp - 0.1)}
            end={Math.min(1, cp + 0.05)}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}
