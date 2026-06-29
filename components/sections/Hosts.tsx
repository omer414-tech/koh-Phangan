import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const hosts = [
  {
    name: "יעלי",
    role: "Aloha Yoga",
    bio: "יעלי בר — יוצרת ומקימת בית Aloha Yoga לתנועה, נשימה, ולב פתוח. מורה ליוגה, מנחת ריטריטים וסדנאות בארץ ובעולם. מאמינה בכוח של הגוף להזכיר לנו מי אנחנו. מלמדת תרגול שמאפשר חזרה לעצמנו, הכרות עמוקה עם מה שחי בנו, והזמנה להיות בדיוק מי שאנחנו — דרך תנועה, נשימה ונוכחות.",
    photo: IMAGES.yaeli,
    photoAlt: "יעלי בר — מייסדת Aloha Yoga ומנחת ריטריטים",
    // Yaeli: portrait crop
    fit: "object-cover object-top",
  },
  {
    name: "עומר",
    role: "Say Less Studios",
    bio: "יזם, מייסד מותג האופנה Say Less Studios ואוהב מושבע של קופנגן. אחרי שנים של ביקורים ומגורים באי, מכיר לעומק את המקומות והחוויות שהופכים אותו לייחודי. החזון: חופש, התפתחות, חיבור אנושי ואיכות חיים.",
    photo: IMAGES.omer,
    photoAlt: "עומר — מייסד Say Less Studios",
    // Fill the frame, centered
    fit: "object-cover object-center",
  },
];

export default function Hosts() {
  return (
    <section id="team" aria-label="Our Team" className="py-section px-6 bg-[#ECEEE9]">
      <div className="max-w-5xl mx-auto">
        <Reveal delay={0.1}>
          <p className="eyebrow block text-center mb-5">Our team</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#28302C] text-center mb-8 leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            הכירו את המארחים
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-12">
          {hosts.map((host, i) => (
            <Reveal key={host.name} delay={0.15 + i * 0.15} direction={i === 0 ? "right" : "left"}>
              <article className="flex flex-col items-center text-center gap-6">
                {/* Smaller, centered portrait */}
                <div className="relative w-full max-w-[280px] aspect-[3/4]  overflow-hidden bg-[#DCE0D8]">
                  <Image
                    src={host.photo}
                    alt={host.photoAlt}
                    fill
                    className={host.fit}
                    sizes="(max-width: 768px) 80vw, 280px"
                  />
                </div>

                <div className="space-y-3 max-w-sm">
                  <div className="flex items-baseline justify-center gap-3">
                    <h3
                      className="font-heading text-[#28302C]"
                      style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
                    >
                      {host.name}
                    </h3>
                    <span className="font-poppins italic text-[#6E8A7F] text-sm tracking-widest">
                      {host.role}
                    </span>
                  </div>
                  <div className="rule mx-auto" />
                  <p
                    className="font-assistant text-[#28302C]/75 leading-relaxed"
                    style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}
                  >
                    {host.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
