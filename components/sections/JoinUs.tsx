import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { APPLY_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, RETREAT_DATES } from "@/lib/config";
import { IMAGES } from "@/lib/images";

export default function JoinUs() {
  return (
    <section
      aria-label="Join Us"
      className="py-[clamp(5rem,10vw,9rem)] px-6 bg-[#2E4636] relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={IMAGES.villaPoolDusk}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2E4636]/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <Reveal delay={0.1}>
          <p className="eyebrow">Join us</p>
        </Reveal>

        <Reveal delay={0.2}>
          <h2
            className="font-heading text-[#F4EEE3] leading-[1.05]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            להרשמה
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-assistant text-[#F2ECE0]/60 text-base tracking-widest uppercase">
            מספר המקומות מוגבל
          </p>
        </Reveal>

        {/* Primary CTA → /apply */}
        <Reveal delay={0.4}>
          <Link href={APPLY_URL} className="btn-primary">
            להרשמה
          </Link>
        </Reveal>

        {/* Secondary contacts */}
        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-[#F2ECE0]/60">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins italic text-sm hover:text-[#C9A87C] transition-colors duration-300"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="w-16 h-px bg-[#8FA48C]/30" />
        </Reveal>

        <Reveal delay={0.65}>
          <p className="font-poppins text-[#98A38C]/70 tracking-widest text-sm">
            Koh Phangan · {RETREAT_DATES}
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="font-poppins tracking-[0.3em] text-[#98A38C]/40 text-xs uppercase">
            ALOHA YOGA ✕ SAY LESS STUDIOS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
