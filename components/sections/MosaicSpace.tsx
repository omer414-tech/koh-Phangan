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

const BG = IMAGES.beachAerial;

const services = [
  { name: "יוגה\nומדיטציה", num: "01", active: true },
  { name: "סדנאות\nווולנס", num: "02", active: false },
  { name: "שף\nפרטי", num: "03", active: false },
  { name: "קהילה\nוחופש", num: null, active: false },
];

export default function MosaicSpace() {
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
      id="our-space"
      aria-label="Our Space"
      className="min-h-screen md:h-screen w-full overflow-hidden flex flex-col pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2 bg-[#ECEEE9]"
    >
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2">
        {/* Card 0 — top-left */}
        <MaskedCard
          {...maskProps}
          position={positions[0]}
          cardRef={setRef(0)}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0"
        >
          <div className="absolute inset-0 bg-[#1E2723]/35 md:bg-[#1E2723]/15" aria-hidden="true" />
          <h2 className="absolute top-4 start-5 md:top-6 md:start-7 font-heading text-[#ECEEE9] text-2xl md:text-4xl font-bold z-10">
            המרחב שלנו
          </h2>
          <p className="absolute bottom-4 start-5 md:bottom-6 md:start-7 font-assistant text-[#ECEEE9] text-xs md:text-sm font-semibold z-10">
            שתי וילות יוקרה בלב קופנגן
          </p>
        </MaskedCard>

        {/* Card 1 — top-right (2 rows) */}
        <MaskedCard
          {...maskProps}
          position={positions[1]}
          cardRef={setRef(1)}
          className="md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/70 to-transparent" aria-hidden="true" />
          <p className="absolute bottom-20 start-5 md:bottom-24 md:start-7 font-assistant text-[#ECEEE9] text-xs md:text-sm font-semibold leading-4 md:leading-5 z-10 max-w-[240px]">
            בריכות אינפיניטי, נוף פתוח לים וטבע טרופי
            <br />
            שמחזיק אתכם בעדינות לאורך כל המסע.
          </p>
          <Link
            href={APPLY_URL}
            className="absolute bottom-4 end-4 md:bottom-6 md:end-6 px-5 py-3 md:px-8 md:py-5 bg-[#ECEEE9] rounded-full text-[#28302C] text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform"
          >
            להרשמה
          </Link>
        </MaskedCard>

        {/* Card 2 — bottom-left */}
        <MaskedCard
          {...maskProps}
          position={positions[2]}
          cardRef={setRef(2)}
          className="rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0"
        >
          <div className="absolute inset-0 bg-[#1E2723]/30 md:bg-[#1E2723]/10" aria-hidden="true" />
          <h3 className="absolute top-4 start-5 md:top-6 md:start-7 font-heading text-[#ECEEE9] text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10">
            וילות
            <br />
            יוקרה
          </h3>
        </MaskedCard>

        {/* Card 3 — bottom full-width: services */}
        <MaskedCard
          {...maskProps}
          position={positions[3]}
          cardRef={setRef(3)}
          className="col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0"
        >
          <div className="absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3">
            {services.map((svc) => (
              <div
                key={svc.name}
                className={`flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between ${
                  svc.active ? "bg-[#ECEEE9]/90 backdrop-blur-md" : "bg-white/20 backdrop-blur-xl"
                }`}
              >
                <h3
                  className={`font-heading text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line ${
                    svc.active ? "text-[#28302C]" : "text-[#ECEEE9]"
                  }`}
                >
                  {svc.name}
                </h3>
                {svc.num && (
                  <span
                    className={`self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold ${
                      svc.active ? "border-[#28302C] text-[#28302C]" : "border-[#ECEEE9] text-[#ECEEE9]"
                    }`}
                  >
                    {svc.num}
                  </span>
                )}
              </div>
            ))}
          </div>
        </MaskedCard>
      </div>
    </section>
  );
}
