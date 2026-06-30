import Reveal from "@/components/ui/Reveal";

const logistics = [
  "קבוצה אחת עם לוח זמנים משותף וליווי צמוד",
  "תשלום בשקלים או בדולרים",
  "אמצעי תשלום: מזומן או העברה בנקאית",
];

const FLIGHT_URL =
  "https://www.skyscanner.co.il/transport/flights/tlv/bkk/261008/261016/config/16995-2610081550--32348-1-9970-2610090800%7C9970-2610162135--32348-1-16995-2610170740?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false";

export default function GoodToKnow() {
  return (
    <section aria-label="Good to Know" className="py-section px-6 bg-[#ECEEE9]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <Reveal delay={0.1}>
          <p className="eyebrow mb-3">Good to know</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#28302C] leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
          >
            חשוב לדעת
          </h2>
        </Reveal>

        {/* Rows */}
        <div className="border-t border-[#28302C]/15">
          {/* 01 — logistics */}
          <Reveal delay={0.1}>
            <div className="flex gap-4 md:gap-8 border-b border-[#28302C]/15 py-6 md:py-8">
              <span className="font-poppins text-[#28302C]/35 text-3xl md:text-5xl tabular-nums shrink-0">01</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-[#28302C] text-xl md:text-2xl mb-3">לוגיסטיקה</h3>
                <ul className="space-y-2" role="list">
                  {logistics.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#8DA293] shrink-0" aria-hidden="true" />
                      <span className="font-assistant text-[#28302C]/75 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 02 — flights */}
          <Reveal delay={0.2}>
            <div className="flex gap-4 md:gap-8 border-b border-[#28302C]/15 py-6 md:py-8">
              <span className="font-poppins text-[#28302C]/35 text-3xl md:text-5xl tabular-nums shrink-0">02</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-[#28302C] text-xl md:text-2xl mb-2">טיסות והגעה</h3>
                <p className="font-assistant text-[#28302C]/75 text-sm md:text-base leading-relaxed">
                  נספק המלצות לטיסות מישראל לתאילנד. ניתן להזמין באופן עצמאי או להצטרף לאחת מהטיסות המומלצות.
                </p>
                <a
                  href={FLIGHT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-assistant font-semibold text-[#6E8A7F] border-b border-[#6E8A7F] pb-0.5 hover:text-[#586F66] hover:border-[#586F66] transition-colors text-sm"
                >
                  טיסה מומלצת · תל אביב — בנגקוק · 8–16 באוקטובר ←
                </a>
              </div>
            </div>
          </Reveal>

          {/* 03 — important */}
          <Reveal delay={0.3}>
            <div className="flex gap-4 md:gap-8 border-b border-[#28302C]/15 py-6 md:py-8">
              <span className="font-poppins text-[#28302C]/35 text-3xl md:text-5xl tabular-nums shrink-0">03</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-[#6E8A7F] text-xl md:text-2xl mb-2">חשוב!</h3>
                <p className="font-assistant text-[#28302C]/75 text-sm md:text-base leading-relaxed">
                  הזמינו את טיסת הפנים מבנגקוק לקוסמוי <strong className="text-[#28302C]">מוקדם ככל האפשר</strong> —
                  זהו קו מבוקש מאוד, והמקומות נוטים להיגמר חודשים מראש.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
