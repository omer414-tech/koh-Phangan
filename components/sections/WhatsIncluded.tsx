import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const categories = [
  {
    title: "לינה",
    items: [
      "7 לילות בשתי וילות יוקרה פרטיות",
      "נוף מטורף לים ובריכות אינפיניטי",
      "ניקיון יומי וחללים מפנקים",
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
    <section aria-label="What's Included" className="bg-[#2E4636] py-[clamp(5rem,10vw,9rem)] px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <p className="font-frank font-light tracking-[0.3em] text-[#8FA48C] text-xs uppercase mb-4">
            What&apos;s included
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-frank text-[#F2ECE0] mb-16 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
          >
            מה כלול בריטריט
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <Reveal className="lg:col-span-5" delay={0.2} direction="right">
            <div className="relative w-full aspect-[4/3] rounded-[0.75rem] overflow-hidden">
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
                    className="font-frank text-[#A86A45]"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 400 }}
                  >
                    {cat.title}
                  </h3>
                  <ul className="space-y-3" role="list">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A86A45] shrink-0" aria-hidden="true" />
                        <span className="font-assistant text-[#F2ECE0]/80 leading-snug text-base">
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
            className="font-frank font-light italic text-[#F2ECE0]/60 text-center"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
          >
            וזו רק ההתחלה — הרבה מעבר לריטריט רגיל.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
