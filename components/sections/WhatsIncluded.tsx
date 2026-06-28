"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { WordsPullUpMultiStyle } from "@/components/ui/WordsPullUp";

const cards = [
  {
    num: "01",
    title: "לינה",
    items: [
      "7 לילות בוילות יוקרה במרכז האי",
      "נוף לים ובריכות אינפיניטי",
      "שף פרטי",
      "ניקיון יומי",
    ],
  },
  {
    num: "02",
    title: "תנועה ווולנס",
    items: [
      "יוגה ומדיטציות יומיות",
      "אקסטטיק דאנס וריקוד קונטקט",
      "מוי טאי וקרוספיט",
      "נשימה וחשיפה לקור",
    ],
  },
  {
    num: "03",
    title: "חוויות וקהילה",
    items: [
      "סדנאות ומעגלי שיח",
      "טיולים וחופים נסתרים",
      "אנשים מעוררי השראה",
    ],
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#DEDBC8" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 rotate-[-45deg]" style={{ color: "#DEDBC8" }}>
    <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhatsIncluded() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="included" aria-label="What's Included" className="relative min-h-screen bg-black px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="font-almarai text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-10 md:mb-14 max-w-2xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "כל מה שצריך כדי פשוט להיות.", className: "" },
              { text: "בנוי לנוכחות, מונע מאהבה.", className: "" },
            ]}
            style={{ color: "#E1E0CC" }}
          />
        </h2>

        {/* Card grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:h-[480px]">
          {/* Card 1 — image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl min-h-[260px]"
          >
            <Image src={IMAGES.villaPool} alt="המרחב שלך" fill className="object-cover" sizes="(max-width:1024px) 100vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 start-5 font-almarai text-lg font-bold" style={{ color: "#E1E0CC" }}>
              המרחב שלך.
            </p>
          </motion.div>

          {/* Cards 2-4 */}
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: (i + 1) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#212121] rounded-2xl p-5 md:p-6 flex flex-col min-h-[260px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#DEDBC8]/10 flex items-center justify-center mb-5">
                <span className="font-serif-italic text-xl" style={{ color: "#DEDBC8" }}>{card.num}</span>
              </div>
              <h3 className="font-almarai text-xl md:text-2xl font-bold mb-4" style={{ color: "#E1E0CC" }}>
                {card.title}
              </h3>
              <ul className="space-y-2.5 flex-1" role="list">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check />
                    <span className="font-almarai text-sm text-gray-400 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="mt-5 flex items-center gap-2 font-almarai text-sm" style={{ color: "#DEDBC8" }}>
                עוד <Arrow />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
