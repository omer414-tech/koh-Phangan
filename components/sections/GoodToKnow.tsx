import Reveal from "@/components/ui/Reveal";

const logistics = [
  "קבוצה אחת עם לוח זמנים משותף וליווי צמוד",
  "תשלום בשקלים או בדולרים",
  "אמצעי תשלום: מזומן או העברה בנקאית",
];

export default function GoodToKnow() {
  return (
    <section aria-label="Good to Know" className="py-section px-6 bg-[#F4EEE3]">
      <div className="max-w-5xl mx-auto">
        <Reveal delay={0.1}>
          <p className="eyebrow mb-5">Good to know</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#2E2620] mb-14 leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            חשוב לדעת
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="space-y-10">
            <Reveal delay={0.2}>
              <ul className="space-y-4" role="list">
                {logistics.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-[#98A38C]/25 pb-4 last:border-0">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A1906B] shrink-0" aria-hidden="true" />
                    <span className="font-assistant text-[#2E2620]/80 text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="space-y-3">
                <h3 className="font-heading text-[#2E2620] text-xl">טיסות והגעה</h3>
                <p className="font-assistant text-[#2E2620]/75 text-base leading-relaxed">
                  נספק המלצות לטיסות מישראל לתאילנד. ניתן להזמין באופן עצמאי או להצטרף לאחת
                  מהטיסות המומלצות.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} direction="left">
            <div className="bg-[#2E4636] rounded-[1rem] p-8 lg:p-10">
              <div className="flex items-start gap-3 mb-5">
                <span className="text-[#C9A87C] text-xl font-light mt-0.5" aria-hidden="true">!</span>
                <span className="font-heading text-[#F4EEE3] text-xl">חשוב</span>
              </div>
              <p className="font-assistant text-[#F4EEE3]/80 leading-relaxed text-base">
                הזמינו את טיסת הפנים מבנגקוק לקוסמוי{" "}
                <strong className="text-[#F4EEE3]">מוקדם ככל האפשר</strong> — זהו קו מבוקש מאוד,
                והמקומות נוטים להיגמר חודשים מראש.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
