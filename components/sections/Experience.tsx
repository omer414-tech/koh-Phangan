import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const pillars = [
  {
    eyebrow: "חוויות והתפתחות",
    items: [
      "סדנאות נשימה ומעגלי שיח",
      "תכני התפתחות אישית",
      "טיולים, חופים נסתרים ותצפיות",
      "פעילויות חברתיות וחוויות ייחודיות",
    ],
  },
  {
    eyebrow: "אוכל",
    items: [
      "ארוחות בוקר יומיות בוילות",
      "ארוחות קבוצתיות נבחרות",
      "אוכל איכותי, התאמות לכולם",
    ],
  },
  {
    eyebrow: "קהילה",
    items: [
      "אנשים איכותיים ומעוררי השראה",
      "חברויות וחיבורים שנשארים",
      "קהילה שממשיכה גם אחרי",
    ],
  },
];

export default function Experience() {
  return (
    <section aria-label="The Experience" className="py-section px-6 bg-[#ECEEE9]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal delay={0.1}>
          <p className="eyebrow mb-3">The experience</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#28302C] leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            עוד מהריטריט
          </h2>
        </Reveal>

        {/* Two images side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
          <Reveal direction="right">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.ecstaticDance}
                alt="מעגל אקסטטיק דאנס בג'ונגל קופנגן"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.jungleTemple}
                alt="מקום טקסי בג'ונגל קופנגן עם מבוך ענק"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>

        {/* Pillars as 3 compact columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.eyebrow} delay={0.1 + i * 0.1}>
              <div className="space-y-3 border-t border-[#8DA293]/40 pt-4">
                <h3
                  className="font-heading text-[#6E8A7F]"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
                >
                  {pillar.eyebrow}
                </h3>
                <ul className="space-y-2" role="list">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                      <span className="font-assistant text-[#28302C]/75 text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
