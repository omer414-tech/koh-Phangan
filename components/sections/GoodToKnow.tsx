import Reveal from "@/components/ui/Reveal";

const logistics = [
  "קבוצה אחת עם לוח זמנים משותף וליווי צמוד",
  "תשלום בשקלים או בדולרים",
  "אמצעי תשלום: מזומן או העברה בנקאית",
];

export default function GoodToKnow() {
  return (
    <section
      aria-label="Good to Know"
      className="w-full px-3 md:px-5 py-1.5 md:py-2 bg-black flex flex-col gap-1.5 md:gap-2"
    >
      {/* Heading band */}
      <div className="bg-[#212121] p-6 md:p-9">
        <p className="eyebrow mb-1">Good to know</p>
        <h2 className="font-heading text-[#E1E0CC] text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.9]">
          חשוב לדעת
        </h2>
      </div>

      {/* Three cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
        {/* Logistics */}
        <Reveal>
          <div className="bg-black border border-[#DEDBC8]/30 p-6 md:p-7 h-full">
            <h3 className="font-heading text-[#DEDBC8] text-lg md:text-xl font-bold mb-3">לוגיסטיקה</h3>
            <ul className="space-y-2.5" role="list">
              {logistics.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#DEDBC8] shrink-0" aria-hidden="true" />
                  <span className="font-assistant text-[#E1E0CC]/80 text-sm md:text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Flights */}
        <Reveal delay={0.1}>
          <div className="bg-[#212121] p-6 md:p-7 h-full">
            <h3 className="font-heading text-[#E1E0CC] text-lg md:text-xl font-bold mb-3">טיסות והגעה</h3>
            <p className="font-assistant text-[#E1E0CC]/75 text-sm md:text-base leading-relaxed">
              נספק המלצות לטיסות מישראל לתאילנד. ניתן להזמין באופן עצמאי או להצטרף לאחת מהטיסות המומלצות.
            </p>
          </div>
        </Reveal>

        {/* Important */}
        <Reveal delay={0.2}>
          <div className="bg-[#161616] p-6 md:p-7 h-full">
            <h3 className="font-heading text-[#DEDBC8] text-lg md:text-xl font-bold mb-3">חשוב</h3>
            <p className="font-assistant text-[#ECEEE9]/85 text-sm md:text-base leading-relaxed">
              הזמינו את טיסת הפנים מבנגקוק לקוסמוי <strong className="text-[#ECEEE9]">מוקדם ככל האפשר</strong> —
              זהו קו מבוקש מאוד, והמקומות נוטים להיגמר חודשים מראש.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
