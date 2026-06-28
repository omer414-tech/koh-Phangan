"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  MaskedCard,
  useMaskPositions,
  useImageWidth,
  useIsMobile,
} from "@/components/ui/MaskedCard";
import { IMAGES } from "@/lib/images";
import { APPLY_URL } from "@/lib/config";

const BG = IMAGES.villaPool;
const featureBars = [
  "וילות יוקרה במרכז האי",
  "יוגה ווולנס יומי",
  "שף פרטי וקהילה בינלאומית",
];

export default function MosaicIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const positions = useMaskPositions(sectionRef, cardRefs);
  const sectionHeight = positions[0]?.sh ?? 0;
  const imageWidth = useImageWidth(BG, sectionHeight);
  const isMobile = useIsMobile();
  const focalX = isMobile ? 0.7 : 0.8;

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="our-intro"
      aria-label="Welcome"
      className="h-screen w-full overflow-hidden flex flex-col pt-24 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2 bg-[#ECEEE9]"
    >
      {/* Feature bars */}
      {featureBars.map((t, i) => (
        <MaskedCard
          key={t}
          bgImage={BG}
          position={positions[i]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setRef(i)}
          className="w-full h-14 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[#ECEEE9]/55 backdrop-blur-[1px]" aria-hidden="true" />
          <span className="relative z-10 flex items-center justify-center h-full font-heading text-[#28302C] text-lg md:text-3xl font-bold text-center px-4">
            {t}
          </span>
        </MaskedCard>
      ))}

      {/* Main card */}
      <MaskedCard
        bgImage={BG}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setRef(3)}
        className="w-full flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/75 via-[#1E2723]/10 to-[#1E2723]/15" aria-hidden="true" />

        <p className="absolute top-4 start-4 md:top-7 md:start-7 text-[#ECEEE9] text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[320px] z-10">
          חוויה שלמה שמחברת התפתחות אישית, תנועה, חופש וקהילה — בלב קופנגן.
        </p>

        <div className="absolute bottom-5 start-3 md:bottom-8 md:start-5 z-10">
          <span className="block text-[#ECEEE9] text-xs md:text-sm font-semibold mb-1 md:mb-2">
            ריטריט יוקרה · 8–15 באוקטובר 2026
          </span>
          <h2 className="font-heading text-[#ECEEE9] text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight">
            ברוכים
            <br />
            הבאים
          </h2>
        </div>

        <Link
          href={APPLY_URL}
          className="absolute bottom-6 end-4 md:bottom-10 md:end-8 z-10 text-[#ECEEE9] text-xs md:text-sm font-semibold underline-offset-4 hover:underline"
        >
          להרשמה ←
        </Link>
      </MaskedCard>
    </section>
  );
}
