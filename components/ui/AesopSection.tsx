import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export type Detail = { label: string; value: string };

export default function AesopSection({
  id,
  eyebrow,
  heading,
  subline,
  paragraph,
  image,
  imageAlt,
  details,
  cta,
  reverse = false,
}: {
  id?: string;
  eyebrow?: string;
  heading: string;
  subline?: string;
  paragraph: string;
  image: string;
  imageAlt: string;
  details?: Detail[];
  cta?: { label: string; href: string };
  reverse?: boolean;
}) {
  return (
    <section id={id} className="bg-[#ECEEE9] py-section px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image on a soft panel */}
        <Reveal
          className={`bg-[#DCE0D8] flex items-center justify-center p-6 md:p-10 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
          direction={reverse ? "left" : "right"}
        >
          <div className="relative w-full max-w-[440px] aspect-[3/4] overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 440px"
            />
          </div>
        </Reveal>

        {/* Text */}
        <div
          className={`flex flex-col justify-center px-2 py-8 md:px-12 md:py-10 ${
            reverse
              ? "md:order-1 md:border-s md:border-[#28302C]/15"
              : "md:order-2 md:border-s md:border-[#28302C]/15"
          }`}
        >
          <Reveal>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h2
              className="font-heading text-[#28302C] leading-[1.02]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              {heading}
            </h2>
            {subline && (
              <p className="font-poppins italic text-[#6E8A7F] text-base md:text-lg mt-3">
                {subline}
              </p>
            )}
            <p className="font-assistant text-[#28302C]/80 leading-relaxed whitespace-pre-line mt-5 text-sm md:text-base">
              {paragraph}
            </p>

            {details && details.length > 0 && (
              <>
                <div className="h-px bg-[#28302C]/15 my-7" />
                <dl className="space-y-5">
                  {details.map((d) => (
                    <div key={d.label} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4">
                      <dt className="font-poppins uppercase tracking-[0.2em] text-[11px] text-[#6E8A7F] pt-1">
                        {d.label}
                      </dt>
                      <dd className="font-assistant text-[#28302C]/80 text-sm md:text-base leading-snug">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {cta && (
              <Link
                href={cta.href}
                className="inline-block mt-8 font-assistant font-semibold text-[#28302C] border-b border-[#28302C] pb-1 hover:text-[#6E8A7F] hover:border-[#6E8A7F] transition-colors text-sm tracking-wide"
              >
                {cta.label}
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
