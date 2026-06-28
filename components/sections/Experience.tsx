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
      "פעילויות חברתיות ייחודיות",
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
      "אנשים מעוררי השראה",
      "חברויות וחיבורים שנשארים",
      "קהילה שממשיכה גם אחרי",
    ],
  },
];

export default function Experience() {
  return (
    <section
      aria-label="The Experience"
      className="w-full px-3 md:px-5 py-1.5 md:py-2 bg-[#ECEEE9] flex flex-col gap-1.5 md:gap-2"
    >
      {/* Heading card + image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2 min-h-[300px] md:h-[44vh]">
        <div className="bg-[#2A3A33] p-6 md:p-10 flex flex-col justify-between min-h-[220px]">
          <p className="eyebrow !text-[#A7B8AC] mb-3">The experience</p>
          <div>
            <h2 className="font-heading text-[#ECEEE9] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.88] mb-3">
              עוד
              <br />
              מהריטריט
            </h2>
            <p className="font-assistant text-[#ECEEE9]/70 text-sm md:text-base max-w-sm">
              מעבר ליוגה ולוולנס — חופש, הרפתקאות, אוכל מעולה וקהילה שנשארת.
            </p>
          </div>
        </div>
        <div className="relative min-h-[220px] overflow-hidden">
          <Image
            src={IMAGES.ecstaticDance}
            alt="מעגל אקסטטיק דאנס בג'ונגל קופנגן"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Three pillar cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.eyebrow} delay={0.08 * i}>
            <div className="bg-[#DCE0D8] p-5 md:p-7 h-full">
              <h3 className="font-heading text-[#6E8A7F] text-lg md:text-2xl font-bold mb-3">
                {pillar.eyebrow}
              </h3>
              <ul className="space-y-2" role="list">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                    <span className="font-assistant text-[#28302C]/80 text-sm md:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
