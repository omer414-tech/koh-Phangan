import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";
import { APPLY_URL } from "@/lib/config";

export default function Welcome() {
  return (
    <section aria-label="Welcome" className="bg-[#ECEEE9] overflow-hidden">
      {/* ── Block 1: Image hero (ARANYA-style) over the villa pool ── */}
      <div className="px-4 sm:px-6 pt-section">
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

      {/* ── Block 2: Why Koh Phangan — image + text (reversed), beige band ── */}
      <div className="py-section px-6 bg-[#DCE0D8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            <Reveal className="lg:col-span-6 lg:order-1 order-2" delay={0.3} direction="right">
              <div className="relative w-full aspect-[4/3]  overflow-hidden shadow-[0_30px_60px_-30px_rgba(46,38,32,0.45)]">
                <Image
                  src={IMAGES.villaPoolDusk}
                  alt="הוילה בשקיעה עם נוף לים"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:order-2 order-1 space-y-7">
              <Reveal delay={0.1}>
                <p className="eyebrow">Why Koh Phangan</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h2
                  className="font-heading text-[#28302C] leading-[1.05]"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                >
                  למה דווקא קופנגן?
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="rule" />
              </Reveal>
              <Reveal delay={0.4}>
                <p
                  className="font-assistant text-[#28302C]/80 leading-loose whitespace-pre-line"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
                >
                  {`קופנגן הוא אי של טבע פראי, מים בצבע טורקיז, חופים לבנים וג'ונגלים ירוקים שנפגשים עם הים.
יש בו אנרגיה שקשה להסביר במילים.
שילוב נדיר של שקט, חופש ופשטות שמאפשרים לגוף להירגע וללב להיפתח.
אבל מעבר לכל היופי שבו, קופנגן הפך בשנים האחרונות לבית של קהילה בינלאומית של יוגה, ריפוי והתפתחות אישית.
אנשים מכל העולם מגיעים אליו כדי לעצור, להתחבר לעצמם ולחוות דרך חיים קצת אחרת.
במשך כמה ימים גם אנחנו ניכנס לקצב של האי, ניתן לטבע להוביל אותנו, ונאפשר לעצמנו פשוט להיות.`}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
