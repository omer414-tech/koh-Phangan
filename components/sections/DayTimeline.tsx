import Reveal from "@/components/ui/Reveal";

const schedule = [
  { time: "07:00", activity: "תה בוקר ונשימה מול הזריחה" },
  { time: "07:30", activity: "יוגה או תנועת בוקר" },
  { time: "09:00", activity: "ארוחת בוקר בוילה" },
  { time: "10:30", activity: "סדנת בוקר — קרוספיט / מוי טאי" },
  { time: "12:30", activity: "זמן חופשי, בריכה וים" },
  { time: "14:00", activity: "ארוחת צהריים או טיול קבוצתי" },
  { time: "16:30", activity: "וולנס — חשיפה לקור / מנוחה / עיסוי" },
  { time: "18:00", activity: "טקס קקאו או מעגל שיח לשקיעה" },
  { time: "19:30", activity: "ארוחת ערב קבוצתית" },
  { time: "21:00", activity: "אקסטטיק דאנס או ערב חופשי" },
];

export default function DayTimeline() {
  return (
    <section
      aria-label="A Day in the Retreat"
      className="py-[clamp(5rem,10vw,9rem)] px-6 bg-[#2E4636]"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal delay={0.1}>
          <p className="font-frank font-light tracking-[0.3em] text-[#8FA48C] text-xs uppercase mb-4">
            A day in the retreat
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-frank text-[#F2ECE0] mb-16 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 300 }}
          >
            יום בריטריט
            <span className="text-[#8FA48C] font-light italic text-[0.6em] block mt-1 tracking-widest">
              · לדוגמה ·
            </span>
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 end-[72px] w-px bg-[#8FA48C]/20"
            aria-hidden="true"
          />

          <ol className="space-y-0" role="list">
            {schedule.map((item, i) => (
              <Reveal key={item.time} delay={0.04 * i}>
                <li className="relative flex items-start gap-6 pb-8 last:pb-0">
                  <p
                    className="flex-1 font-assistant text-[#F2ECE0]/80 leading-snug pt-0.5"
                    style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
                  >
                    {item.activity}
                  </p>
                  <div className="flex items-center gap-3 shrink-0 w-[72px] justify-end">
                    <span className="font-frank font-light text-[#A86A45] tabular-nums text-sm tracking-wider">
                      {item.time}
                    </span>
                    <div
                      className="relative z-10 w-2 h-2 rounded-full bg-[#A86A45] ring-4 ring-[#2E4636]"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.5}>
          <p className="mt-16 font-assistant text-[#8FA48C] text-sm text-center tracking-wide">
            התוכנית משתנה מיום ליום — וזה חלק מהקסם.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
