"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Item = {
  time: string;
  title: string;
  desc: string;
  highlight?: boolean;
  workshop?: boolean;
};

// Always includes the 10:00 villa breakfast with a private chef,
// and exactly 3 workshops across the day.
const schedule: Item[] = [
  { time: "07:00", title: "יוגה בזריחה", desc: "פתיחת היום בתנועה רכה מול הים." },
  { time: "08:30", title: "נשימה ומדיטציה", desc: "רגע של שקט לפני שהיום מתחיל." },
  {
    time: "10:00",
    title: "ארוחת בוקר בוילה",
    desc: "ארוחת בוקר נדיבה בהכנת שף פרטי, מול הנוף.",
    highlight: true,
  },
  {
    time: "11:30",
    title: "סדנה ראשונה — תנועה וכושר",
    desc: "מוי טאי, קרוספיט או אימון פונקציונלי.",
    workshop: true,
  },
  { time: "13:30", title: "זמן חופשי", desc: "בריכת אינפיניטי, ים ומנוחה." },
  {
    time: "15:30",
    title: "סדנה שנייה — וולנס וריפוי",
    desc: "חשיפה לקור, סאונד הילינג או עבודת גוף.",
    workshop: true,
  },
  {
    time: "17:30",
    title: "סדנה שלישית — מעגל ונשימה",
    desc: "מעגל שיח, טקס קקאו ועבודת נשימה לשקיעה.",
    workshop: true,
  },
  { time: "19:30", title: "ארוחת ערב קבוצתית", desc: "שולחן אחד גדול, אוכל מעולה וחברה טובה." },
  { time: "21:00", title: "אקסטטיק דאנס / ערב חופשי", desc: "לשחרר, לרקוד, או פשוט לנוח." },
];

function Row({ item, index }: { item: Item; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.05 }}
      className="relative flex items-start gap-6 pb-12 last:pb-0"
    >
      {/* Activity */}
      <div className="flex-1 text-start order-2">
        <h3
          className={`font-heading mb-1 ${item.highlight ? "text-[#A1906B]" : "text-[#2E2620]"}`}
          style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)" }}
        >
          {item.title}
          {item.workshop && (
            <span className="font-assistant not-italic text-[10px] tracking-widest uppercase text-[#98A38C] align-middle mr-2 border border-[#98A38C]/40 rounded-full px-2 py-0.5">
              סדנה
            </span>
          )}
        </h3>
        <p className="font-assistant text-[#2E2620]/65 text-sm leading-relaxed">{item.desc}</p>
      </div>

      {/* Time + dot (end side for RTL) */}
      <div className="order-1 flex items-center gap-4 shrink-0 w-[78px] justify-end">
        <span className="font-poppins text-[#A1906B] tabular-nums text-sm tracking-wider">
          {item.time}
        </span>
        <span
          className={`relative z-10 rounded-full ring-4 ring-[#F4EEE3] ${
            item.highlight ? "w-3.5 h-3.5 bg-[#A1906B]" : "w-2.5 h-2.5 bg-[#98A38C]"
          }`}
          aria-hidden="true"
        />
      </div>
    </motion.li>
  );
}

export default function DayTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section aria-label="A Day in the Retreat" className="py-section px-6 bg-[#EBE3D4]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-5"
        >
          A day in the retreat
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[#2E2620] mb-16 leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
        >
          יום בריטריט לדוגמה
        </motion.h2>

        <div ref={trackRef} className="relative">
          {/* Static rail (end side for RTL) */}
          <div className="absolute top-1 bottom-1 end-[71px] w-px bg-[#2E2620]/12" aria-hidden="true" />
          {/* Scroll-driven progress fill */}
          <motion.div
            className="absolute top-1 bottom-1 end-[71px] w-px bg-[#A1906B] origin-top"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          <ol role="list">
            {schedule.map((item, i) => (
              <Row key={item.time} item={item} index={i} />
            ))}
          </ol>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 font-assistant text-[#2E2620]/50 text-sm text-center tracking-wide"
        >
          התוכנית משתנה מיום ליום — וזה חלק מהקסם.
        </motion.p>
      </div>
    </section>
  );
}
