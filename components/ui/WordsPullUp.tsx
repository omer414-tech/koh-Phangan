"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/** Splits text by spaces; each word slides up with a staggered delay. */
export function WordsPullUp({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease }}
          className="inline-block"
          style={{ marginInlineEnd: "0.25em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export type Segment = { text: string; className?: string };

/** Multiple styled segments, split into words, same staggered pull-up. */
export function WordsPullUpMultiStyle({
  segments,
  className = "",
  style,
}: {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const words: { w: string; cn?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => words.push({ w, cn: seg.className }));
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((item, i) => (
        <motion.span
          key={`${item.w}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease }}
          className={`inline-block ${item.cn ?? ""}`}
          style={{ marginInlineEnd: "0.25em" }}
        >
          {item.w}
        </motion.span>
      ))}
    </span>
  );
}
