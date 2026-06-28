import Reveal from "@/components/ui/Reveal";
import Carousel, { Slide } from "@/components/ui/Carousel";
import { IMAGES } from "@/lib/images";

const features = [
  { icon: "∞", text: "בריכות אינפיניטי ונוף פתוח לים" },
  { icon: "◇", text: "חללים משותפים מפנקים ופרטיות מלאה" },
  { icon: "⌖", text: "במרכז האי — קרוב לכל החוויות" },
];

const gallery: Slide[] = [
  { src: IMAGES.villaPool, alt: "בריכת אינפיניטי של הוילה עם נוף פתוח לים" },
  { src: IMAGES.villaTerrace, alt: "טרסת הוילה עם ספות ונוף לים בשקיעה" },
  { src: IMAGES.villaInterior, alt: "הסלון המפנק של הוילה עם נוף לים" },
  { src: IMAGES.villaPoolGolden, alt: "בריכת הוילה בשעת הזהב עם בית העץ המפנק" },
  { src: IMAGES.villaPoolDusk, alt: "הוילה בשעת בין הערביים" },
];

export default function Villas() {
  return (
    <section aria-label="The Villas" className="bg-[#2A3A33] py-section px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header — Change 4: new eyebrow, heading, body */}
        <Reveal delay={0.1}>
          <p className="eyebrow block text-center mb-5">Our space</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#ECEEE9] text-center mb-6 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            המרחב שלנו
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p
            className="font-assistant text-[#ECEEE9]/70 text-center max-w-2xl mx-auto mb-16 leading-loose"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
          >
            בחרנו שתי וילות בלב קופנגן — לא רק יפות, אלא כאלה שמרגישים בהן. עטופות בטבע ובנוף
            פתוח אל הים, עם בריכות אינפיניטי וטבע טרופי שמחזיקים אתכם בעדינות לאורך כל המסע.
            כל פינה כאן נועדה להאט את הקצב ולהזמין נוכחות — מרחב שקט ומקודש שאליו חוזרים בסוף
            כל יום כדי לנוח, להתחבר ולהרגיש בבית. כאן היופי החיצוני פוגש את השקט הפנימי.
          </p>
        </Reveal>

        {/* Interactive slide gallery */}
        <Reveal delay={0.2}>
          <div className="mb-16">
            <Carousel slides={gallery} />
          </div>
        </Reveal>

        {/* Feature list — bullets kept as-is per spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Reveal key={f.text} delay={0.15 * i}>
              <div className="flex flex-col items-center text-center gap-3">
                <span className="text-[#6E8A7F] text-2xl font-light">{f.icon}</span>
                <p className="font-assistant text-[#ECEEE9]/80 text-base">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
