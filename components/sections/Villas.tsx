import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const features = [
  { icon: "∞", text: "בריכות אינפיניטי ונוף פתוח לים" },
  { icon: "◇", text: "חללים משותפים מפנקים ופרטיות מלאה" },
  { icon: "⌖", text: "במרכז האי — קרוב לכל החוויות" },
];

export default function Villas() {
  return (
    <section aria-label="The Villas" className="bg-[#2E4636] py-section px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header — Change 4: new eyebrow, heading, body */}
        <Reveal delay={0.1}>
          <p className="eyebrow block text-center mb-5">Our space</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#F4EEE3] text-center mb-6 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            המרחב שלנו
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p
            className="font-assistant text-[#F4EEE3]/70 text-center max-w-2xl mx-auto mb-16 leading-loose"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
          >
            בחרנו שתי וילות בלב קופנגן — לא רק יפות, אלא כאלה שמרגישים בהן. עטופות בטבע ובנוף
            פתוח אל הים, עם בריכות אינפיניטי וטבע טרופי שמחזיקים אתכם בעדינות לאורך כל המסע.
            כל פינה כאן נועדה להאט את הקצב ולהזמין נוכחות — מרחב שקט ומקודש שאליו חוזרים בסוף
            כל יום כדי לנוח, להתחבר ולהרגיש בבית. כאן היופי החיצוני פוגש את השקט הפנימי.
          </p>
        </Reveal>

        {/* Editorial asymmetric image grid */}
        <div className="grid grid-cols-12 gap-4 mb-16" style={{ height: "clamp(320px, 50vw, 560px)" }}>
          <Reveal className="col-span-7 h-full" delay={0.2} direction="right">
            <div className="relative w-full h-full rounded-[0.75rem] overflow-hidden">
              <Image
                src={IMAGES.villaPool}
                alt="בריכת אינפיניטי של הוילה עם נוף פתוח לים"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
          </Reveal>

          <div className="col-span-5 h-full flex flex-col gap-4">
            <Reveal className="flex-1" delay={0.35} direction="left">
              <div className="relative w-full h-full rounded-[0.75rem] overflow-hidden">
                <Image
                  src={IMAGES.villaTerrace}
                  alt="טרסת הוילה עם ספות ונוף לים בשקיעה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </Reveal>
            <Reveal className="flex-1" delay={0.5} direction="left">
              <div className="relative w-full h-full rounded-[0.75rem] overflow-hidden">
                <Image
                  src={IMAGES.villaInterior}
                  alt="הסלון המפנק של הוילה עם נוף לים"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Full-width golden hour strip */}
        <Reveal delay={0.3}>
          <div className="relative w-full rounded-[0.75rem] overflow-hidden mb-16" style={{ height: "clamp(220px, 30vw, 380px)" }}>
            <Image
              src={IMAGES.villaPoolGolden}
              alt="בריכת הוילה בשעת הזהב עם בית העץ המפנק"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E4636]/40 to-transparent" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Feature list — bullets kept as-is per spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Reveal key={f.text} delay={0.15 * i}>
              <div className="flex flex-col items-center text-center gap-3">
                <span className="text-[#A86A45] text-2xl font-light">{f.icon}</span>
                <p className="font-assistant text-[#F2ECE0]/80 text-base">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
