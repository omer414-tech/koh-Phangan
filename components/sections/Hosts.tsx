import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const hosts = [
  {
    name: "יעלי",
    role: "Aloha Yoga",
    bio: "בית Aloha Yoga — יוצרת ומקימת סטודיו לתנועה, נשימה, ולב פתוח. מורה ליוגה, מנחת ריטריטים וסדנאות בארץ ובעולם. מאמינה בכוח של הגוף להזכיר לנו מי אנחנו. מלמדת תרגול שמאפשר חזרה לעצמנו, הכרות עמוקה עם מה שחי בנו, והזמנה להיות בדיוק מי שאנחנו — דרך תנועה, נשימה ונוכחות.",
    photo: IMAGES.yaeli,
    fit: "object-cover object-top",
  },
  {
    name: "עומר",
    role: "Say Less Studios",
    bio: "יזם ובעל מותג אופנה ולייף-סטייל, שמצא בקופנגן לא עוד יעד, אלא נקודת מפנה. האי הזה פירק והרכיב אותו מחדש, ומאז הוא חוזר אליו שוב ושוב. הוא מכיר את כל הפנינות של קופנגן, המקומות הקסומים שלא כולם מכירים — ובריטריט הוא מביא את האי דרך העיניים שלו.",
    photo: IMAGES.omer,
    fit: "object-cover object-center",
  },
];

export default function Hosts() {
  return (
    <section id="team" aria-label="Our Team" className="bg-[#ECEEE9] py-section px-6">
      <div className="max-w-4xl mx-auto">
        {/* Centered title */}
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <p className="eyebrow mb-3">Our team</p>
            <h2
              className="font-heading text-[#28302C] leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              הכירו את המארחים
            </h2>
          </div>
        </Reveal>

        {/* Stacked rows */}
        <div className="border-t border-[#28302C]/15">
          {hosts.map((host, i) => (
            <Reveal key={host.name} delay={0.1}>
              <article
                className={`flex flex-col sm:flex-row items-center gap-6 md:gap-10 border-b border-[#28302C]/15 py-8 md:py-10 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Smaller portrait */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 shrink-0 overflow-hidden bg-[#DCE0D8]">
                  <Image
                    src={host.photo}
                    alt={`${host.name} — ${host.role}`}
                    fill
                    className={host.fit}
                    sizes="176px"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-start">
                  <h3
                    className="font-heading text-[#28302C] leading-none"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                  >
                    {host.name}
                  </h3>
                  <p className="font-poppins italic text-[#6E8A7F] text-sm md:text-base mt-1">
                    {host.role}
                  </p>
                  <p className="font-assistant text-[#28302C]/75 text-sm md:text-base leading-relaxed mt-3">
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
