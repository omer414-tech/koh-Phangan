import Reveal from "@/components/ui/Reveal";

// Change 2: removed "הוצאות אישיות ואלכוהול"
const notIncluded = [
  "טיסות בינלאומיות וטיסות פנים",
  "ביטוח נסיעות",
  "פעילויות פרטיות שאינן בתוכנית",
];

export default function Pricing() {
  return (
    <section aria-label="Pricing" className="py-section px-6 bg-[#ECEEE9]">
      <div className="max-w-5xl mx-auto">
        <Reveal delay={0.1}>
          <p className="eyebrow block text-center mb-5">Pricing</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#28302C] text-center mb-6 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            תמחור
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex justify-center mb-5">
            <span className="inline-block bg-[#6E8A7F] text-[#ECEEE9] font-assistant font-semibold text-sm px-6 py-2 rounded-full tracking-widest">
              24 מקומות בלבד
            </span>
          </div>
        </Reveal>

        {/* Price cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Reveal delay={0.2} direction="right">
            <article className=" bg-white/50 shadow-sm border border-[#8DA293]/25 p-10 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-heading text-[#28302C] text-2xl">חדר זוגי</h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-heading text-[#6E8A7F]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  ₪8,000
                </span>
                <span className="font-assistant text-[#28302C]/60 text-base">לאדם</span>
              </div>
              <div className="rule" />
              <p className="font-assistant text-[#28302C]/60 text-sm">אותה חוויה לכולם — שתי אפשרויות לינה</p>
            </article>
          </Reveal>

          <Reveal delay={0.3} direction="left">
            <article className=" bg-[#2A3A33] p-10 flex flex-col gap-4 hover:bg-[#223029] transition-colors duration-300">
              <h3 className="font-heading text-[#ECEEE9] text-2xl">חדר רביעייה</h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-heading text-[#A7B8AC]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  ₪7,200
                </span>
                <span className="font-assistant text-[#ECEEE9]/60 text-base">לאדם</span>
              </div>
              <div className="rule" />
              <p className="font-assistant text-[#ECEEE9]/60 text-sm">אותה חוויה לכולם — שתי אפשרויות לינה</p>
            </article>
          </Reveal>
        </div>

        {/* Payment note */}
        <Reveal delay={0.4}>
          <div className="bg-[#8DA293]/12  p-8 mb-10 border border-[#8DA293]/25">
            <p className="font-assistant text-[#28302C]/80 text-base leading-relaxed text-center">
              מקדמה לשמירת מקום: <strong>₪2,000</strong>. יתרת התשלום לפי לוח תשלומים שיימסר לאחר ההרשמה.
              ניתן לשלם בשקלים או בדולרים.
            </p>
          </div>
        </Reveal>

        {/* Not included */}
        <Reveal delay={0.5}>
          <div>
            <h3 className="font-heading text-[#28302C] text-xl mb-5">
              מה לא כלול
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                  <span className="font-assistant text-[#28302C]/60 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
