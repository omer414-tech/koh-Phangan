import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const hosts = [
  {
    name: "יעלי",
    role: "Aloha Yoga",
    // Change 3: new bio copy
    bio: "יעלי בר — יוצרת ומקימת בית Aloha Yoga לתנועה, נשימה, ולב פתוח. מורה ליוגה, מנחת ריטריטים וסדנאות בארץ ובעולם. מאמינה בכוח של הגוף להזכיר לנו מי אנחנו. מלמדת תרגול שמאפשר חזרה לעצמנו, הכרות עמוקה עם מה שחי בנו, והזמנה להיות בדיוק מי שאנחנו — דרך תנועה, נשימה ונוכחות.",
    photo: IMAGES.yaeli,
    photoAlt: "יעלי בר — מייסדת Aloha Yoga ומנחת ריטריטים",
  },
  {
    name: "עומר",
    role: "Say Less Studios",
    bio: "יזם, מייסד מותג האופנה Say Less Studios ואוהב מושבע של קופנגן. אחרי שנים של ביקורים ומגורים באי, מכיר לעומק את המקומות והחוויות שהופכים אותו לייחודי. החזון: חופש, התפתחות, חיבור אנושי ואיכות חיים.",
    photo: IMAGES.omer,
    photoAlt: "עומר — מייסד Say Less Studios",
  },
];

export default function Hosts() {
  return (
    <section aria-label="Our Team" className="py-[clamp(5rem,10vw,9rem)] px-6 bg-[#F2ECE0]">
      <div className="max-w-5xl mx-auto">
        <Reveal delay={0.1}>
          <p className="font-frank font-light tracking-[0.3em] text-[#8FA48C] text-xs uppercase mb-4 text-center">
            Our team
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2
            className="font-frank text-[#2E4636] text-center mb-16 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 400 }}
          >
            הכירו את המארחים
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {hosts.map((host, i) => (
            <Reveal key={host.name} delay={0.15 + i * 0.15} direction={i === 0 ? "right" : "left"}>
              <article className="flex flex-col gap-6">
                <div className="relative w-full aspect-square rounded-[0.75rem] overflow-hidden">
                  <Image
                    src={host.photo}
                    alt={host.photoAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#1F1B16]/30 to-transparent" aria-hidden="true" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <h3
                      className="font-frank text-[#2E4636]"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500 }}
                    >
                      {host.name}
                    </h3>
                    <span className="font-frank font-light italic text-[#A86A45] text-sm tracking-widest">
                      {host.role}
                    </span>
                  </div>
                  <div className="w-8 h-px bg-[#A86A45]" />
                  <p
                    className="font-assistant text-[#1F1B16]/75 leading-relaxed"
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
