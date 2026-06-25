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
    <section aria-label="The Experience" className="py-[clamp(5rem,10vw,9rem)] px-6 bg-[#F2ECE0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sticky heading + images */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <Reveal delay={0.1}>
              <p className="font-frank font-light tracking-[0.3em] text-[#8FA48C] text-xs uppercase">
                The experience
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2
                className="font-frank text-[#2E4636] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400 }}
              >
                עוד
                <br />
                מהריטריט
              </h2>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="w-12 h-px bg-[#A86A45]" />
            </Reveal>

            <Reveal delay={0.4} direction="right">
              <div className="relative w-full aspect-[4/3] rounded-[0.75rem] overflow-hidden">
                <Image
                  src={IMAGES.ecstaticDance}
                  alt="מעגל אקסטטיק דאנס בג'ונגל קופנגן"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.5} direction="right">
              <div className="relative w-full aspect-[16/9] rounded-[0.75rem] overflow-hidden">
                <Image
                  src={IMAGES.jungleTemple}
                  alt="מקום טקסי בג'ונגל קופנגן עם מבוך ענק"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </Reveal>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-7 space-y-14">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.eyebrow} delay={0.1 + i * 0.1}>
                <div className="space-y-5 border-t border-[#8FA48C]/30 pt-8">
                  <h3
                    className="font-frank text-[#A86A45]"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 400 }}
                  >
                    {pillar.eyebrow}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2E4636] shrink-0" aria-hidden="true" />
                        <span className="font-assistant text-[#1F1B16]/75 text-base leading-snug">
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
      </div>
    </section>
  );
}
