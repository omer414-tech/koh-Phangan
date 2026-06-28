import Reveal from "@/components/ui/Reveal";

type Item = { time: string; title: string; desc: string; highlight?: boolean };

// Always includes the 10:00 villa breakfast with a private chef.
const schedule: Item[] = [
  { time: "07:00", title: "יוגה בזריחה", desc: "תנועה רכה מול הים." },
  { time: "08:30", title: "נשימה ומדיטציה", desc: "רגע של שקט." },
  { time: "10:00", title: "ארוחת בוקר בוילה", desc: "בהכנת שף פרטי, מול הנוף.", highlight: true },
  { time: "11:30", title: "תנועה וכושר", desc: "מוי טאי, קרוספיט או אימון." },
  { time: "13:30", title: "זמן חופשי", desc: "בריכה, ים ומנוחה." },
  { time: "15:30", title: "וולנס וריפוי", desc: "חשיפה לקור או עבודת גוף." },
  { time: "17:30", title: "מעגל ונשימה", desc: "מעגל שיח וטקס קקאו." },
  { time: "19:30", title: "ארוחת ערב קבוצתית", desc: "שולחן אחד גדול." },
  { time: "21:00", title: "אקסטטיק דאנס", desc: "לרקוד, או פשוט לנוח." },
];

export default function DayTimeline() {
  return (
    <section
      aria-label="A Day in the Retreat"
      className="w-full px-3 md:px-5 py-1.5 md:py-2 bg-[#DCE0D8] flex flex-col gap-1.5 md:gap-2"
    >
      {/* Heading band */}
      <div className="bg-[#2A3A33] p-6 md:p-9 flex items-end justify-between flex-wrap gap-3">
        <h2 className="font-heading text-[#ECEEE9] text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.9]">
          יום בריטריט לדוגמה
        </h2>
        <p className="font-assistant text-[#A7B8AC] text-sm md:text-base">
          התוכנית משתנה מיום ליום — וזה חלק מהקסם.
        </p>
      </div>

      {/* Schedule cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-2">
        {schedule.map((item, i) => (
          <Reveal key={item.time} delay={0.03 * i}>
            <div
              className={`p-4 md:p-5 h-full flex flex-col gap-1 ${
                item.highlight ? "bg-[#6E8A7F]" : "bg-[#ECEEE9]"
              }`}
            >
              <span
                className={`font-poppins tabular-nums text-sm tracking-wider ${
                  item.highlight ? "text-[#ECEEE9]" : "text-[#6E8A7F]"
                }`}
              >
                {item.time}
              </span>
              <h3
                className={`font-heading text-base md:text-xl font-bold leading-tight ${
                  item.highlight ? "text-[#ECEEE9]" : "text-[#28302C]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`font-assistant text-xs md:text-sm leading-snug ${
                  item.highlight ? "text-[#ECEEE9]/85" : "text-[#28302C]/60"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
