import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

export default function Welcome() {
  return (
    <section aria-label="Welcome" className="py-[clamp(5rem,10vw,9rem)] px-6 bg-[#F2ECE0] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delay={0.1}>
              <p className="font-frank font-light tracking-[0.3em] text-[#8FA48C] text-xs uppercase mb-4">
                Welcome
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2
                className="font-frank text-[#2E4636] leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 400 }}
              >
                ברוכים הבאים
                <br />
                <span className="text-[#A86A45]">לריטריט קופנגן</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p
                className="font-assistant text-[#1F1B16] leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
              >
                ריטריט קופנגן נולד מתוך חיבור טבעי בין יעלי לעומר. יחד יצרנו חוויה שמחברת שני
                עולמות — מצד אחד התפתחות אישית, תנועה, כושר ווולנס; ומצד שני חופש, הרפתקאות,
                חיי חברה, אוכל מעולה וכל מה שהופך את קופנגן למקום כל כך מיוחד. זו לא חופשה
                רגילה וזה לא ריטריט שקט — זו חוויה שלמה.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="border-r-2 border-[#A86A45] pr-6">
                <h3
                  className="font-frank text-[#2E4636] mb-4"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400 }}
                >
                  למה דווקא קופנגן?
                </h3>
                <p
                  className="font-assistant text-[#1F1B16]/80 leading-relaxed"
                  style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
                >
                  קופנגן הוא הרבה יותר מאי טרופי. מקום שמושך אליו אנשים מכל העולם שמחפשים
                  חופש, השראה, קהילה וחוויות — עם חופים מהיפים בעולם, טבע טרופי, תרבות וולנס
                  ברמה עולמית, אוכל מעולה וקהילה בינלאומית. עבור רבים, קופנגן הופך מיעד —
                  לבית שני.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image column */}
          <Reveal className="lg:col-span-6" delay={0.3} direction="left">
            <div className="relative w-full aspect-[4/5] rounded-[0.75rem] overflow-hidden">
              <Image
                src={IMAGES.beachAerial}
                alt="נוף אוירי של חוף קופנגן עם מים טורקיזים וסלעים"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
