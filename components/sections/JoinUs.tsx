import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { APPLY_URL, RETREAT_DATES } from "@/lib/config";
import { IMAGES } from "@/lib/images";

export default function JoinUs() {
  return (
    <section
      aria-label="Join Us"
      className="py-[clamp(2.5rem,5vw,4rem)] px-6 bg-[#2A3A33] relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={IMAGES.villaPoolDusk}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2A3A33]/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
        <Reveal delay={0.1}>
          <p className="eyebrow">Join us</p>
        </Reveal>

        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#ECEEE9] leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
          >
            המסע שלך מתחיל כאן
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-assistant text-[#ECEEE9]/60 text-sm tracking-widest uppercase">
            מספר המקומות מוגבל
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <Link href={APPLY_URL} className="btn-primary mt-1">
            להרשמה
          </Link>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="font-poppins text-[#8DA293]/70 tracking-widest text-sm mt-2">
            Koh Phangan · {RETREAT_DATES}
          </p>
        </Reveal>
      </div>

      {/* Oversized wordmark */}
      <div className="relative z-10 mt-8 sm:mt-12 px-2">
        <p
          className="font-heading uppercase text-center text-[#ECEEE9]/12 leading-[0.85] whitespace-nowrap select-none w-full"
          style={{ fontSize: "clamp(2rem, 13vw, 11rem)" }}
          aria-hidden="true"
        >
          Koh Phangan
        </p>
      </div>
    </section>
  );
}
