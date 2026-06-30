import AesopSection from "@/components/ui/AesopSection";
import Carousel, { Slide } from "@/components/ui/Carousel";
import { IMAGES } from "@/lib/images";
import { APPLY_URL } from "@/lib/config";

const gallery: Slide[] = [
  { src: IMAGES.villaPool, alt: "בריכת אינפיניטי של הוילה עם נוף פתוח לים" },
  { src: IMAGES.villaInterior, alt: "הסלון הפתוח של הוילה" },
  { src: IMAGES.villaView, alt: "הנוף מהוילה אל הים" },
  { src: IMAGES.villaPool2, alt: "בריכת הוילה השנייה" },
  { src: IMAGES.villaPoolGolden, alt: "בריכת הוילה בשעת הזהב" },
];

export default function MosaicSpace() {
  return (
    <>
      <AesopSection
        id="our-space"
        reverse
        eyebrow="Our space"
        heading="המרחב שלנו"
        subline="שתי וילות יוקרה בלב קופנגן."
        paragraph="בחרנו שתי וילות שמרגישים בהן — עטופות בטבע, עם בריכות אינפיניטי ונוף פתוח אל הים. מרחב שקט שאליו חוזרים בסוף כל יום כדי לנוח, להתחבר ולהרגיש בבית."
        image={IMAGES.villaSofa}
        imageAlt="טרסת הוילה עם ספות פתוחות ונוף לים"
        cta={{ label: "להרשמה ←", href: APPLY_URL }}
        details={[
          { label: "יוגה ומדיטציה", value: "תרגול יומי, בוקר וערב" },
          { label: "סדנאות ווולנס", value: "נשימה, חשיפה לקור וטקסים" },
          { label: "שף פרטי", value: "ארוחות איכותיות בוילה" },
          { label: "קהילה וחופש", value: "אנשים מעוררי השראה מכל העולם" },
        ]}
      />

      {/* Interactive villa-photo carousel */}
      <section className="bg-[#ECEEE9] px-5 md:px-8 pb-[clamp(1.5rem,3vw,3rem)]">
        <div className="max-w-6xl mx-auto">
          <Carousel slides={gallery} />
        </div>
      </section>
    </>
  );
}
