"use client";

import { useRef } from "react";
import {
  MaskedCard,
  useMaskPositions,
  useImageWidth,
  useIsMobile,
} from "@/components/ui/MaskedCard";
import { IMAGES } from "@/lib/images";

const BG = IMAGES.villaPool;

const categories = [
  {
    title: "לינה",
    items: [
      "7 לילות בוילות יוקרתיות במרכז האי",
      "נוף מטורף לים ובריכות אינפיניטי",
      "שף פרטי וניקיון יומי",
    ],
  },
  {
    title: "תנועה, כושר ווולנס",
    items: [
      "יוגה ומדיטציות יומיות",
      "אקסטטיק דאנס וריקוד קונטקט",
      "מוי טאי וקרוספיט",
      "נשימה וחשיפה לקור",
      "טקס קקאו וסאונד הילינג",
    ],
  },
];

export default function WhatsIncluded() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const positions = useMaskPositions(sectionRef, cardRefs);
  const sectionHeight = positions[0]?.sh ?? 0;
  const imageWidth = useImageWidth(BG, sectionHeight);
  const isMobile = useIsMobile();
  const focalX = isMobile ? 0.65 : 0.8;
  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[i] = el;
  };
  const maskProps = { bgImage: BG, imageWidth, focalX };

  return (
    <section
      ref={sectionRef}
      id="included"
      aria-label="What's Included"
      className="min-h-screen md:h-screen w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2 bg-[#ECEEE9]"
    >
      {/* Heading band */}
      <MaskedCard
        {...maskProps}
        position={positions[0]}
        cardRef={setRef(0)}
        className="w-full h-28 md:h-44 shrink-0 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[#1E2723]/45" aria-hidden="true" />
        <div className="absolute bottom-4 start-5 md:bottom-6 md:start-7 z-10">
          <p className="eyebrow !text-[#A7B8AC] mb-1">What&apos;s included</p>
          <h2 className="font-heading text-[#ECEEE9] text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.9]">
            מה כלול בריטריט
          </h2>
        </div>
      </MaskedCard>

      {/* Two category cards */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        {categories.map((cat, i) => (
          <MaskedCard
            key={cat.title}
            {...maskProps}
            position={positions[i + 1]}
            cardRef={setRef(i + 1)}
            className="relative overflow-hidden min-h-[220px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/90 via-[#1E2723]/55 to-[#1E2723]/30" aria-hidden="true" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-7">
              <h3 className="font-heading text-[#A7B8AC] text-xl md:text-3xl font-bold mb-3">
                {cat.title}
              </h3>
              <ul className="space-y-1.5" role="list">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                    <span className="font-assistant text-[#ECEEE9] text-sm md:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </MaskedCard>
        ))}
      </div>
    </section>
  );
}
