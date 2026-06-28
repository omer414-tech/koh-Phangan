import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    label: "יוגה ותנועה",
    icon: (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5m0 0-4 6m4-6 4 6M6 10l6 1 6-1" />
      </>
    ),
  },
  {
    label: "מדיטציה ונשימה",
    icon: <path d="M12 3a6 6 0 0 0 0 12 6 6 0 0 0 0-12Zm0 12v6m-4-3h8" />,
  },
  {
    label: "כושר ותנועה",
    icon: <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />,
  },
  {
    label: "תזונה ואוכל",
    icon: (
      <>
        <path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10" />
        <path d="M16 3c-1.5 1.5-2 3-2 5s.5 3 2 3 2-1 2-3-.5-3.5-2-5Zm0 8v10" />
      </>
    ),
  },
  {
    label: "התפתחות אישית",
    icon: <path d="M12 3 4 7l8 4 8-4-8-4ZM4 7v6l8 4 8-4V7M12 11v6" />,
  },
  {
    label: "קהילה וחיבור",
    icon: (
      <>
        <circle cx="9" cy="9" r="2.5" />
        <circle cx="16" cy="10" r="2" />
        <path d="M4 19a5 5 0 0 1 10 0M14.5 16a4 4 0 0 1 5 3" />
      </>
    ),
  },
];

export default function HolisticApproach() {
  return (
    <section aria-label="Holistic Approach" className="bg-[#DCE0D8] py-[clamp(2.25rem,4vw,3.25rem)] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal delay={0.1}>
          <p className="eyebrow block mb-3">A holistic approach</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#28302C] leading-[1.05] mb-6"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
          >
            גישה הוליסטית לאיזון מלא
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-4">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={0.05 * i}>
              <div className="flex flex-col items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8DA293"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                  aria-hidden="true"
                >
                  {p.icon}
                </svg>
                <p className="font-assistant text-[#28302C]/80 text-xs leading-snug">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
