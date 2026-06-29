import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const hosts = [
  {
    num: "01",
    name: "יעלי",
    role: "Aloha Yoga",
    bio: "יוצרת ומקימת בית Aloha Yoga — מורה ליוגה ומנחת ריטריטים בארץ ובעולם, מאמינה בכוח של הגוף להזכיר לנו מי אנחנו.",
    photo: IMAGES.yaeli,
    fit: "object-cover object-top",
    offset: "md:mt-0",
  },
  {
    num: "02",
    name: "עומר",
    role: "Say Less Studios",
    bio: "יזם, מייסד מותג האופנה Say Less Studios ואוהב מושבע של קופנגן. מכיר לעומק את המקומות והחוויות שהופכים את האי לייחודי.",
    photo: IMAGES.omer,
    fit: "object-cover object-center",
    offset: "md:mt-28",
  },
];

export default function Hosts() {
  return (
    <section id="team" aria-label="Our Team" className="bg-[#ECEEE9] py-section px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Centerpiece */}
        <Reveal>
          <div className="text-center mb-10 md:mb-0">
            <p className="eyebrow mb-3">Our team</p>
            <p className="font-poppins italic text-[#28302C] text-2xl md:text-4xl">
              האנשים שמאחורי הריטריט
            </p>
            <p className="font-assistant tracking-[0.25em] text-[#6E8A7F] text-xs uppercase mt-2">
              Koh Phangan · 2026
            </p>
          </div>
        </Reveal>

        {/* Staggered host cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 md:-mt-16">
          {hosts.map((host, i) => (
            <Reveal key={host.name} delay={0.1 + i * 0.1} direction={i === 0 ? "right" : "left"}>
              <article className={`max-w-sm ${i === 1 ? "md:ms-auto" : ""} ${host.offset}`}>
                {/* Label row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-poppins text-[#6E8A7F] text-sm tracking-widest">{host.num}</span>
                  <span className="font-poppins uppercase tracking-[0.25em] text-[#28302C] text-xs">
                    {host.role}
                  </span>
                </div>

                {/* Image square */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#DCE0D8]">
                  <Image
                    src={host.photo}
                    alt={`${host.name} — ${host.role}`}
                    fill
                    className={host.fit}
                    sizes="(max-width: 768px) 90vw, 400px"
                  />
                </div>

                {/* Name + bio */}
                <h3
                  className="font-heading text-[#28302C] mt-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {host.name}
                </h3>
                <p className="font-assistant text-[#28302C]/75 text-sm md:text-base leading-relaxed mt-2">
                  {host.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
