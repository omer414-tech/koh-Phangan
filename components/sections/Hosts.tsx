import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const hosts = [
  {
    name: "יעלי",
    role: "Aloha Yoga",
    bio: "יוצרת ומקימת בית Aloha Yoga לתנועה, נשימה, ולב פתוח. מורה ליוגה ומנחת ריטריטים בארץ ובעולם. מאמינה בכוח של הגוף להזכיר לנו מי אנחנו — דרך תנועה, נשימה ונוכחות.",
    photo: IMAGES.yaeli,
    photoAlt: "יעלי בר — מייסדת Aloha Yoga",
    fit: "object-cover object-top",
  },
  {
    name: "עומר",
    role: "Say Less Studios",
    bio: "יזם, מייסד מותג האופנה Say Less Studios ואוהב מושבע של קופנגן. מכיר לעומק את המקומות והחוויות שהופכים את האי לייחודי. החזון: חופש, התפתחות, חיבור אנושי ואיכות חיים.",
    photo: IMAGES.omer,
    photoAlt: "עומר — מייסד Say Less Studios",
    fit: "object-cover object-center",
  },
];

export default function Hosts() {
  return (
    <section
      id="team"
      aria-label="Our Team"
      className="w-full px-3 md:px-5 py-1.5 md:py-2 bg-[#ECEEE9]"
    >
      {/* Heading */}
      <div className="px-2 md:px-3 mb-3 md:mb-4">
        <p className="eyebrow mb-2">Our team</p>
        <h2 className="font-heading text-[#28302C] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95]">
          הכירו את המארחים
        </h2>
      </div>

      {/* Host cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
        {hosts.map((host, i) => (
          <Reveal key={host.name} delay={0.1 + i * 0.1} direction={i === 0 ? "right" : "left"}>
            <article className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
              <Image
                src={host.photo}
                alt={host.photoAlt}
                fill
                className={host.fit}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2723]/85 via-transparent to-transparent" aria-hidden="true" />

              {/* Name + role */}
              <div className="absolute top-5 start-5 md:top-7 md:start-7 z-10">
                <h3 className="font-heading text-[#ECEEE9] text-3xl md:text-5xl font-bold leading-none">
                  {host.name}
                </h3>
                <span className="font-poppins italic text-[#A7B8AC] text-sm tracking-widest">
                  {host.role}
                </span>
              </div>

              {/* Bio in a glass card */}
              <div className="absolute inset-x-3 bottom-3 md:inset-x-5 md:bottom-5 z-10 bg-[#ECEEE9]/15 backdrop-blur-md p-4 md:p-5">
                <p className="font-assistant text-[#ECEEE9] text-sm md:text-base leading-snug">
                  {host.bio}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
