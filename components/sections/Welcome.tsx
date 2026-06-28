import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";
import { APPLY_URL } from "@/lib/config";

export default function Welcome() {
  return (
    <section aria-label="Welcome" className="bg-[#ECEEE9] overflow-hidden">
      {/* ── Block 1: Image hero (ARANYA-style) over the villa pool ── */}
      <div className="px-4 sm:px-6 py-section">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[58vh] min-h-[400px]  overflow-hidden">
            <Image
              src={IMAGES.villaPool}
              alt="בריכת אינפיניטי של הוילה עם נוף פתוח לים"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/85 via-[#1E2723]/15 to-[#1E2723]/35" aria-hidden="true" />

            {/* Giant translucent word behind */}
            <div className="absolute inset-x-0 top-[6%] flex justify-center pointer-events-none">
              <span
                className="font-heading uppercase text-[#ECEEE9]/15 leading-none select-none"
                style={{ fontSize: "clamp(4.5rem, 22vw, 20rem)" }}
              >
                שלווה
              </span>
            </div>

            {/* Top eyebrow */}
            <div className="absolute top-7 inset-x-0 px-6 sm:px-10 flex justify-center">
              <Reveal delay={0.1}>
                <p className="eyebrow !text-[#ECEEE9]/70">Welcome</p>
              </Reveal>
            </div>

            {/* Bottom content: heading (start) + paragraph & CTA (end) */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <Reveal delay={0.2}>
                  <h2
                    className="font-heading text-[#ECEEE9] leading-[0.95] max-w-xl"
                    style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                  >
                    ברוכים הבאים לריטריט קופנגן
                  </h2>
                </Reveal>

                <Reveal delay={0.35} direction="left">
                  <div className="max-w-md space-y-6">
                    <p className="font-assistant text-[#ECEEE9]/85 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                      {`יש מקומות שפשוט מרגישים אחרת.
כבר מהרגע שמגיעים אליהם משהו בפנים מתחיל להאט.
הנשימה נעשית עמוקה יותר, הראש נהיה שקט יותר, והלב נפתח בלי להתאמץ.
בחרנו את קופנגן כי זו לא רק חופשה.
זו הזמנה לעצור לרגע, להתנתק מהרעש, ולהיזכר איך זה מרגיש להיות באמת נוכחים.`}
                    </p>
                    <Link
                      href={APPLY_URL}
                      className="inline-flex items-center gap-2 bg-[#ECEEE9] text-[#28302C] font-assistant font-semibold rounded-full px-7 py-3 text-sm tracking-wide hover:bg-white transition-colors duration-300"
                    >
                      גלו עוד <span aria-hidden="true">←</span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Block 2: Why Koh Phangan — bold mosaic grid ── */}
      <div className="px-3 md:px-5 pb-1.5 md:pb-2 bg-[#ECEEE9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2 min-h-[70vh] md:h-[80vh]">
          {/* Heading + copy card */}
          <div className="bg-[#DCE0D8] p-6 md:p-10 flex flex-col justify-between min-h-[320px]">
            <p className="eyebrow mb-4">Why Koh Phangan</p>
            <div>
              <h2 className="font-heading text-[#28302C] text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.88] tracking-tight mb-6">
                למה דווקא
                <br />
                קופנגן?
              </h2>
              <p className="font-assistant text-[#28302C]/75 text-sm md:text-base leading-relaxed whitespace-pre-line max-w-xl">
                {`קופנגן הוא אי של טבע פראי, מים בצבע טורקיז, חופים לבנים וג'ונגלים ירוקים שנפגשים עם הים.
יש בו אנרגיה שקשה להסביר במילים — שילוב נדיר של שקט, חופש ופשטות שמאפשרים לגוף להירגע וללב להיפתח.
מעבר לכל היופי, קופנגן הפך לבית של קהילה בינלאומית של יוגה, ריפוי והתפתחות אישית.
במשך כמה ימים גם אנחנו ניכנס לקצב של האי, ניתן לטבע להוביל אותנו, ונאפשר לעצמנו פשוט להיות.`}
              </p>
            </div>
          </div>

          {/* Image card */}
          <div className="relative min-h-[320px] overflow-hidden">
            <Image
              src={IMAGES.villaSunset}
              alt="הוילה בשקיעה עם נוף לים"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
