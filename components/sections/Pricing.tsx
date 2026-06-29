import Reveal from "@/components/ui/Reveal";

const rooms = [
  { num: "01", name: "חדר זוגי", desc: "אותה חוויה לכולם — שתי אפשרויות לינה", price: "₪8,000" },
  { num: "02", name: "חדר רביעייה", desc: "אותה חוויה לכולם — שתי אפשרויות לינה", price: "₪7,200" },
];

const notIncluded = [
  "טיסות בינלאומיות וטיסות פנים",
  "ביטוח נסיעות",
  "פעילויות פרטיות שאינן בתוכנית",
];

export default function Pricing() {
  return (
    <section aria-label="Pricing" className="py-section px-6 bg-[#ECEEE9]">
      <div className="max-w-6xl mx-auto flex gap-6 md:gap-10">
        {/* Main column */}
        <div className="flex-1 min-w-0">
          <Reveal delay={0.1}>
            <p className="eyebrow mb-6">Pricing</p>
          </Reveal>

          {/* Priced rows */}
          <div className="border-t border-[#28302C]/15">
            {rooms.map((r, i) => (
              <Reveal key={r.num} delay={0.1 + i * 0.1}>
                <div className="flex items-center gap-4 md:gap-8 border-b border-[#28302C]/15 py-6 md:py-8">
                  <span className="font-poppins text-[#28302C]/35 text-3xl md:text-5xl tabular-nums shrink-0">
                    {r.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-[#28302C] text-xl md:text-3xl">{r.name}</h3>
                    <p className="font-assistant text-[#28302C]/55 text-xs md:text-sm mt-1">{r.desc}</p>
                  </div>
                  <div className="shrink-0 text-end">
                    <span className="font-heading text-[#6E8A7F] text-2xl md:text-4xl">{r.price}</span>
                    <span className="font-assistant text-[#28302C]/50 text-xs md:text-sm block">לאדם</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Payment note */}
          <Reveal delay={0.3}>
            <p className="font-assistant text-[#28302C]/70 text-sm md:text-base leading-relaxed mt-8">
              מקדמה לשמירת מקום: <strong>₪2,000</strong>. יתרת התשלום לפי לוח תשלומים שיימסר לאחר ההרשמה.
              ניתן לשלם בשקלים או בדולרים.
            </p>
          </Reveal>

          {/* Not included */}
          <Reveal delay={0.4}>
            <div className="mt-8 pt-6 border-t border-[#28302C]/15">
              <h4 className="font-heading text-[#28302C] text-lg mb-3">מה לא כלול</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                    <span className="font-assistant text-[#28302C]/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Vertical title (desktop) */}
        <div className="hidden md:block relative w-20 lg:w-28 shrink-0">
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-heading text-[#28302C] leading-none"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
          >
            עלות הריטריט
          </span>
        </div>
      </div>

      {/* Mobile title */}
      <div className="md:hidden text-center mt-10">
        <h2 className="font-heading text-[#28302C]" style={{ fontSize: "clamp(2.25rem, 9vw, 3rem)" }}>
          עלות הריטריט
        </h2>
      </div>
    </section>
  );
}
