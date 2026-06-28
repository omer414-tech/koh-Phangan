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
import { useLang } from "@/components/ui/LanguageProvider";

const BG = IMAGES.villaPool;
const STRIP_WORDS = ["Breathe", "Relax", "Renew"];

export default function MosaicIntro() {
  const { lang } = useLang();
  const t = (p: { he: string; en: string }) => p[lang];

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
      className="h-screen w-full overflow-hidden flex flex-col pt-24 px-3 md:px-5 pb-1 md:pb-1.5 gap-1 md:gap-1.5 bg-[#ECEEE9]"
    >
      {/* Image strips, each with one subtle English word */}
      {STRIP_WORDS.map((word, i) => (
        <MaskedCard
          key={word}
          bgImage={BG}
          position={positions[i]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setRef(i)}
          className="w-full h-12 md:h-16 shrink-0 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[#1E2723]/20" aria-hidden="true" />
          <span className="relative z-10 flex items-center justify-center h-full font-assistant text-[#ECEEE9] text-xs md:text-sm font-light tracking-[0.5em] uppercase">
            {word}
          </span>
        </MaskedCard>
      ))}

      {/* Main row: green panel (heading) + image slice */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-1 md:gap-1.5">
        {/* Green gradient panel — heading lives here only, never over the photo */}
        <div className="md:w-[38%] shrink-0 bg-gradient-to-br from-[#8DA293] via-[#A7B8AC] to-[#DCE0D8] flex items-end p-6 md:p-8">
          <h2 className="font-heading text-[#28302C] text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[0.82] tracking-tight whitespace-pre-line">
            {t({ he: "ברוכים\nהבאים", en: "Welcome\nin" })}
          </h2>
        </div>

        {/* Image slice */}
        <MaskedCard
          bgImage={BG}
          position={positions[3]}
          imageWidth={imageWidth}
          focalX={focalX}
          cardRef={setRef(3)}
          className="flex-1 min-h-0 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/55 via-transparent to-transparent" aria-hidden="true" />
          <p className="absolute top-4 start-4 md:top-7 md:start-7 text-[#ECEEE9] text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[300px] z-10">
            {t({
              he: "חוויה שלמה שמחברת התפתחות אישית, תנועה, חופש וקהילה — בלב קופנגן.",
              en: "A complete experience blending growth, movement, freedom and community — in the heart of Koh Phangan.",
            })}
          </p>
          <Link
            href={APPLY_URL}
            className="absolute bottom-5 end-4 md:bottom-7 md:end-7 z-10 text-[#ECEEE9] text-xs md:text-sm font-semibold underline-offset-4 hover:underline"
          >
            {t({ he: "להרשמה ←", en: "Apply ←" })}
          </Link>
        </MaskedCard>
      </div>
    </section>
  );
}
