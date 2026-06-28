import Reveal from "@/components/ui/Reveal";

const features = [
  {
    label: "וילות יוקרה",
    sub: "במרכז האי",
    icon: (
      <path d="M3 11.5 12 4l9 7.5M5 10v9h14v-9M10 19v-5h4v5" />
    ),
  },
  {
    label: "תנועה ווולנס",
    sub: "יוגה ומדיטציות יומיות",
    icon: (
      <>
        <circle cx="12" cy="5.5" r="2" />
        <path d="M12 7.5v6m0 0-4 5m4-5 4 5M6 10l6 1 6-1" />
      </>
    ),
  },
  {
    label: "שף פרטי",
    sub: "אוכל איכותי",
    icon: (
      <>
        <path d="M7 21h10M8 21V11m8 10V11" />
        <path d="M8 11a4 4 0 0 1-1-7.7A3.5 3.5 0 0 1 13.8 3 3.5 3.5 0 0 1 17 7.5 3.5 3.5 0 0 1 16 11" />
      </>
    ),
  },
  {
    label: "קהילה בינלאומית",
    sub: "אנשים מעוררי השראה",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M16.5 14.5A5.5 5.5 0 0 1 20.5 20" />
      </>
    ),
  },
];

export default function FeatureRow() {
  return (
    <section aria-label="Highlights" className="bg-[#EBE3D4] border-y border-[#2E2620]/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={0.08 * i}>
              <div className="flex flex-col items-center text-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#98A38C"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
                <p className="font-heading text-[#2E2620] text-base tracking-wide">{f.label}</p>
                <p className="font-assistant text-[#2E2620]/55 text-sm -mt-1">{f.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
