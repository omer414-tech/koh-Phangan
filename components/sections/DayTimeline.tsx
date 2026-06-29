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

const schedule: Item[] = [
  { time: "08:00", title: "טקס בוקר", desc: "" },
  { time: "09:00", title: "תרגול יוגה", desc: "" },
  { time: "10:30", title: "ארוחת בוקר בוילה", desc: "בהכנת שף פרטי, מול הנוף.", highlight: true },
  { time: "", title: "זמן חופשי — בריכה / ים", desc: "למשך כ-3 שעות אחרי ארוחת הבוקר." },
  { time: "16:00", title: "סדנת חשיפה לקור ונשימות", desc: "" },
  { time: "18:00", title: "אקסטטיק דאנס", desc: "" },
  { time: "20:30", title: "ארוחת ערב מול השקיעה", desc: "", highlight: true },
];

function Row({ item, index }: { item: Item; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.05 }}
      className="relative flex items-start gap-3 pb-2.5 last:pb-0"
    >
      {/* Activity */}
      <div className="flex-1 text-start order-2">
        <h3
          className={`font-heading mb-0.5 ${item.highlight ? "text-[#6E8A7F]" : "text-[#28302C]"}`}
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}
        >
          {item.title}
          {item.workshop && (
            <span className="font-assistant not-italic text-[9px] tracking-widest uppercase text-[#8DA293] align-middle mr-2 border border-[#8DA293]/40 rounded-full px-1.5 py-0.5">
              סדנה
            </span>
          )}
        </h3>
        {item.desc && (
          <p className="font-assistant text-[#28302C]/65 text-xs leading-snug">{item.desc}</p>
        )}
      </div>

      {/* Time + dot (end side for RTL) */}
      <div className="order-1 flex items-center gap-2.5 shrink-0 w-[58px] justify-end">
        <span className="font-poppins text-[#6E8A7F] tabular-nums text-xs tracking-wider">
          {item.time}
        </span>
        <span
          className={`relative z-10 rounded-full ring-4 ring-[#ECEEE9] ${
            item.highlight ? "w-3.5 h-3.5 bg-[#6E8A7F]" : "w-2.5 h-2.5 bg-[#8DA293]"
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
    <section aria-label="A Day in the Retreat" className="py-[clamp(1.75rem,3vw,2.75rem)] px-6 bg-[#DCE0D8]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-2"
        >
          A day in the retreat
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[#28302C] mb-5 leading-[1.05]"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.75rem)" }}
        >
          יום בריטריט לדוגמה
        </motion.h2>

        <div ref={trackRef} className="relative">
          {/* Static rail (end side for RTL) */}
          <div className="absolute top-1 bottom-1 end-[51px] w-px bg-[#28302C]/12" aria-hidden="true" />
          {/* Scroll-driven progress fill */}
          <motion.div
            className="absolute top-1 bottom-1 end-[51px] w-px bg-[#6E8A7F] origin-top"
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
          className="mt-5 font-assistant text-[#28302C]/50 text-xs text-center tracking-wide"
        >
          התוכנית משתנה מיום ליום — וזה חלק מהקסם.
        </motion.p>
      </div>
    </section>
  );
}
