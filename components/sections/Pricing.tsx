import Reveal from "@/components/ui/Reveal";

// Change 2: removed "הוצאות אישיות ואלכוהול"
const notIncluded = [
  "טיסות בינלאומיות וטיסות פנים",
  "ביטוח נסיעות",
  "פעילויות פרטיות שאינן בתוכנית",
];

export default function Pricing() {
  return (
    <section aria-label="Pricing" className="py-[clamp(5rem,10vw,9rem)] px-6 bg-[#F2ECE0]">
      <div className="max-w-5xl mx-auto">
        <Reveal delay={0.1}>
          <p className="font-frank font-light tracking-[0.3em] text-[#8FA48C] text-xs uppercase mb-4 text-center">
            Pricing
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-frank text-[#2E4636] text-center mb-4 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
          >
            תמחור
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex justify-center mb-14">
            <span className="inline-block bg-[#A86A45] text-[#F2ECE0] font-assistant font-semibold text-sm px-6 py-2 rounded-full tracking-widest">
              24 מקומות בלבד
            </span>
          </div>
        </Reveal>

        {/* Price cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Reveal delay={0.2} direction="right">
            <article className="rounded-[0.75rem] bg-white/60 shadow-sm border border-[#8FA48C]/20 p-10 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-frank text-[#2E4636] text-2xl font-medium">חדר זוגי</h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-frank text-[#A86A45]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 300 }}
                >
                  ₪8,000
                </span>
                <span className="font-assistant text-[#1F1B16]/60 text-base">לאדם</span>
              </div>
              <div className="w-10 h-px bg-[#A86A45]" />
              <p className="font-assistant text-[#1F1B16]/60 text-sm">אותה חוויה לכולם — שתי אפשרויות לינה</p>
            </article>
          </Reveal>

          <Reveal delay={0.3} direction="left">
            <article className="rounded-[0.75rem] bg-[#2E4636] p-10 flex flex-col gap-4 hover:bg-[#253b2d] transition-colors duration-300">
              <h3 className="font-frank text-[#F2ECE0] text-2xl font-medium">חדר רביעייה</h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-frank text-[#A86A45]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 300 }}
                >
                  ₪7,200
                </span>
                <span className="font-assistant text-[#F2ECE0]/60 text-base">לאדם</span>
              </div>
              <div className="w-10 h-px bg-[#A86A45]" />
              <p className="font-assistant text-[#F2ECE0]/60 text-sm">אותה חוויה לכולם — שתי אפשרויות לינה</p>
            </article>
          </Reveal>
        </div>

        {/* Payment note */}
        <Reveal delay={0.4}>
          <div className="bg-[#8FA48C]/10 rounded-[0.75rem] p-8 mb-10 border border-[#8FA48C]/20">
            <p className="font-assistant text-[#1F1B16]/80 text-base leading-relaxed text-center">
              מקדמה לשמירת מקום: <strong>₪2,000</strong>. יתרת התשלום לפי לוח תשלומים שיימסר לאחר ההרשמה.
              ניתן לשלם בשקלים או בדולרים.
            </p>
          </div>
        </Reveal>

        {/* Not included */}
        <Reveal delay={0.5}>
          <div>
            <h3 className="font-frank text-[#2E4636] text-xl mb-5 font-medium">
              מה לא כלול
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#8FA48C] shrink-0" aria-hidden="true" />
                  <span className="font-assistant text-[#1F1B16]/60 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
