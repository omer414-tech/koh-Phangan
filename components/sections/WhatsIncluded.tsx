import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const categories = [
  {
    title: "לינה",
    // Change 3d: new lodging text
    items: [
      "7 לילות בוילות יוקרתיות הממוקמות במרכז האי",
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
  return (
    <section aria-label="What's Included" className="bg-[#ECEEE9] py-section px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <p className="eyebrow mb-5">What&apos;s included</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#28302C] mb-16 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            מה כלול בריטריט
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <Reveal className="lg:col-span-5" delay={0.2} direction="right">
            <div className="relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(46,38,32,0.45)]">
              <Image
                src={IMAGES.meditationCircle}
                alt="מעגל מדיטציה ויוגה בריטריט קופנגן"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {categories.map((cat, ci) => (
              <Reveal key={cat.title} delay={0.15 + ci * 0.15}>
                <div className="space-y-5">
                  <h3
                    className="font-heading text-[#6E8A7F]"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                  >
                    {cat.title}
                  </h3>
                  <ul className="space-y-3" role="list">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                        <span className="font-assistant text-[#28302C]/80 leading-snug text-base">
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

        <Reveal delay={0.5}>
          <p
            className="font-poppins italic text-[#28302C]/50 text-center"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
          >
            וזו רק ההתחלה — הרבה מעבר לריטריט רגיל.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
