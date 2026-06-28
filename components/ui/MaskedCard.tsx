"use client";

import {
  CSSProperties,
  ReactNode,
  RefObject,
  useEffect,
  useState,
} from "react";

/* ── useIsMobile ─────────────────────────────────────────────────────────── */
export function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return mobile;
}

/* ── useMaskPositions ────────────────────────────────────────────────────────
   For each card, the offset of its top-left relative to the section, plus the
   section's full width/height. Recomputed on resize via ResizeObserver. */
export type MaskPos = { x: number; y: number; sw: number; sh: number };

export function useMaskPositions(
  sectionRef: RefObject<HTMLElement | null>,
  cardRefs: RefObject<(HTMLElement | null)[]>
) {
  const [positions, setPositions] = useState<MaskPos[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const compute = () => {
      const s = section.getBoundingClientRect();
      const next = (cardRefs.current ?? []).map((c) => {
        if (!c) return { x: 0, y: 0, sw: s.width, sh: s.height };
        const r = c.getBoundingClientRect();
        return { x: r.left - s.left, y: r.top - s.top, sw: s.width, sh: s.height };
      });
      setPositions(next);
    };

    const ro = new ResizeObserver(compute);
    ro.observe(section);
    compute();
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [sectionRef, cardRefs]);

  return positions;
}

/* ── useImageWidth ───────────────────────────────────────────────────────────
   How wide the image would be if scaled to fill the section height. */
export function useImageWidth(src: string, sectionHeight: number) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!sectionHeight) return;
    const img = new window.Image();
    img.src = src;
    const apply = () => {
      if (img.naturalHeight) {
        setWidth(img.naturalWidth * (sectionHeight / img.naturalHeight));
      }
    };
    if (img.complete) apply();
    else img.onload = apply;
  }, [src, sectionHeight]);
  return width;
}

/* ── MaskedCard ──────────────────────────────────────────────────────────────
   Shows a "window" into a shared section-wide image so multiple cards form one
   cohesive mosaic. focalX (0–1) pans the visible slice horizontally. */
export function MaskedCard({
  bgImage,
  position,
  imageWidth,
  focalX = 0.5,
  className,
  children,
  cardRef,
  style,
}: {
  bgImage: string;
  position?: MaskPos;
  imageWidth: number;
  focalX?: number;
  className?: string;
  children?: ReactNode;
  cardRef?: (el: HTMLDivElement | null) => void;
  style?: CSSProperties;
}) {
  let bg: CSSProperties = { backgroundColor: "#223029" };
  if (position && imageWidth) {
    const overflow = imageWidth > position.sw ? imageWidth - position.sw : 0;
    const focalOffset = overflow * focalX;
    bg = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: `auto ${position.sh}px`,
      backgroundPosition: `-${position.x + focalOffset}px -${position.y}px`,
      backgroundRepeat: "no-repeat",
    };
  }
  return (
    <div ref={cardRef} className={className} style={{ ...bg, ...style }}>
      {children}
    </div>
  );
}
