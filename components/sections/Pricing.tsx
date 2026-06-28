import Reveal from "@/components/ui/Reveal";

const notIncluded = [
  "טיסות בינלאומיות וטיסות פנים",
  "ביטוח נסיעות",
  "פעילויות פרטיות שאינן בתוכנית",
];

export default function Pricing() {
  return (
    <section
      aria-label="Pricing"
      className="w-full px-3 md:px-5 py-1.5 md:py-2 bg-[#ECEEE9] flex flex-col gap-1.5 md:gap-2"
    >
      {/* Heading band */}
      <div className="bg-[#DCE0D8] p-6 md:p-9 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow mb-1">Pricing</p>
          <h2 className="font-heading text-[#28302C] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9]">
            תמחור
          </h2>
        </div>
        <span className="bg-[#6E8A7F] text-[#ECEEE9] font-assistant font-semibold text-sm px-5 py-2 tracking-widest">
          24 מקומות בלבד
        </span>
      </div>

      {/* Price cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        <Reveal direction="right">
          <article className="bg-[#DCE0D8] p-7 md:p-9 h-full flex flex-col justify-between min-h-[180px]">
            <h3 className="font-heading text-[#28302C] text-2xl md:text-3xl font-bold">חדר זוגי</h3>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="font-heading text-[#6E8A7F] font-bold" style={{ fontSize: "clamp(2.75rem, 6vw, 4rem)" }}>
                ₪8,000
              </span>
              <span className="font-assistant text-[#28302C]/60 text-base">לאדם</span>
            </div>
          </article>
        </Reveal>
        <Reveal direction="left">
          <article className="bg-[#2A3A33] p-7 md:p-9 h-full flex flex-col justify-between min-h-[180px]">
            <h3 className="font-heading text-[#ECEEE9] text-2xl md:text-3xl font-bold">חדר רביעייה</h3>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="font-heading text-[#A7B8AC] font-bold" style={{ fontSize: "clamp(2.75rem, 6vw, 4rem)" }}>
                ₪7,200
              </span>
              <span className="font-assistant text-[#ECEEE9]/60 text-base">לאדם</span>
            </div>
          </article>
        </Reveal>
      </div>

      {/* Payment + not included */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        <div className="bg-[#DCE0D8] p-6 md:p-8">
          <p className="font-assistant text-[#28302C]/80 text-sm md:text-base leading-relaxed">
            מקדמה לשמירת מקום: <strong>₪2,000</strong>. יתרת התשלום לפי לוח תשלומים שיימסר לאחר ההרשמה.
            ניתן לשלם בשקלים או בדולרים.
          </p>
        </div>
        <div className="bg-[#ECEEE9] border border-[#8DA293]/30 p-6 md:p-8">
          <h3 className="font-heading text-[#28302C] text-lg md:text-xl font-bold mb-3">מה לא כלול</h3>
          <ul className="space-y-2" role="list">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                <span className="font-assistant text-[#28302C]/65 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
