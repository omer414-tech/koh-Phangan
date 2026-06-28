"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { APPLY_URL } from "@/lib/config";
import { useLang } from "@/components/ui/LanguageProvider";

const BG = IMAGES.villaSofa;

const services = [
  { he: "יוגה ומדיטציה", en: "Yoga & Meditation", num: "01", active: true },
  { he: "סדנאות ווולנס", en: "Workshops & Wellness", num: "02", active: false },
  { he: "שף פרטי", en: "Private Chef", num: "03", active: false },
  { he: "קהילה וחופש", en: "Community & Freedom", num: "04", active: false },
];

export default function MosaicSpace() {
  const { lang } = useLang();
  const t = (p: { he: string; en: string }) => p[lang];

  return (
    <section
      id="our-space"
      aria-label="Our Space"
      className="w-full px-3 md:px-5 py-1.5 md:py-2 bg-[#ECEEE9]"
    >
      {/* One large image filling the whole area */}
      <div className="relative w-full h-[70vh] min-h-[460px] overflow-hidden">
        <Image
          src={BG}
          alt="טרסת הוילה עם ספות פתוחות ונוף לים"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/75 via-[#1E2723]/10 to-[#1E2723]/25" aria-hidden="true" />

        {/* Heading */}
        <div className="absolute top-5 start-5 md:top-8 md:start-9 z-10">
          <h2 className="font-heading text-[#ECEEE9] text-3xl md:text-5xl font-bold">
            {t({ he: "המרחב שלנו", en: "Our Space" })}
          </h2>
          <p className="font-assistant text-[#ECEEE9]/85 text-sm md:text-base font-semibold mt-1">
            {t({ he: "שתי וילות יוקרה בלב קופנגן", en: "Two luxury villas in the heart of the island" })}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={APPLY_URL}
          className="absolute top-5 end-5 md:top-8 md:end-9 z-10 px-5 py-2.5 md:px-7 md:py-3.5 bg-[#ECEEE9] text-[#28302C] text-sm md:text-base font-bold hover:scale-105 transition-transform"
        >
          {t({ he: "להרשמה", en: "Apply" })}
        </Link>

        {/* Services row */}
        <div className="absolute inset-x-3 bottom-3 md:inset-x-5 md:bottom-5 z-10 grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
          {services.map((svc) => (
            <div
              key={svc.he}
              className={`p-3 md:p-5 flex items-center justify-between gap-2 ${
                svc.active ? "bg-[#ECEEE9]/90 backdrop-blur-md" : "bg-white/15 backdrop-blur-xl"
              }`}
            >
              <h3
                className={`font-heading text-sm md:text-xl font-bold leading-tight ${
                  svc.active ? "text-[#28302C]" : "text-[#ECEEE9]"
                }`}
              >
                {t(svc)}
              </h3>
              <span
                className={`shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full border flex items-center justify-center text-[10px] md:text-xs font-semibold ${
                  svc.active ? "border-[#28302C] text-[#28302C]" : "border-[#ECEEE9] text-[#ECEEE9]"
                }`}
              >
                {svc.num}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
