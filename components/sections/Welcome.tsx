import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

export default function Welcome() {
  return (
    <section aria-label="Welcome" className="bg-[#F4EEE3] overflow-hidden">
      {/* ── Block 1: Intro — text + image ── */}
      <div className="py-section px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-7">
              <Reveal delay={0.1}>
                <p className="eyebrow">Welcome</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h2
                  className="font-heading text-[#2E2620] leading-[1.05]"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                >
                  ברוכים הבאים לריטריט קופנגן
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="rule" />
              </Reveal>
              <Reveal delay={0.4}>
                <p
                  className="font-assistant text-[#2E2620]/80 leading-loose whitespace-pre-line"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
                >
                  {`יש מקומות שפשוט מרגישים אחרת.
כבר מהרגע שמגיעים אליהם משהו בפנים מתחיל להאט.
הנשימה נעשית עמוקה יותר, הראש נהיה שקט יותר, והלב נפתח בלי להתאמץ.
בחרנו את קופנגן כי זו לא רק חופשה.
זו הזמנה לעצור לרגע, להתנתק מהרעש, ולהיזכר איך זה מרגיש להיות באמת נוכחים.`}
                </p>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-6" delay={0.3} direction="left">
              <div className="relative w-full aspect-[4/5] rounded-[1rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(46,38,32,0.45)]">
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
      </div>

      {/* ── Block 2: Why Koh Phangan — image + text (reversed), beige band ── */}
      <div className="py-section px-6 bg-[#EBE3D4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <Reveal className="lg:col-span-6 lg:order-1 order-2" delay={0.3} direction="right">
              <div className="relative w-full aspect-[4/5] rounded-[1rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(46,38,32,0.45)]">
                <Image
                  src={IMAGES.jungleTemple}
                  alt="ג'ונגל ירוק וטבע טרופי בקופנגן"
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
                  className="font-heading text-[#2E2620] leading-[1.05]"
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
                  className="font-assistant text-[#2E2620]/80 leading-loose whitespace-pre-line"
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
