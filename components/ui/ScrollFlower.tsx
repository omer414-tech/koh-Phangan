"use client";

import { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

/**
 * Smooth scroll-scrubbed video, ported from the Veldara reference technique:
 * pre-extract the clip into ImageBitmap frames, then paint the frame that
 * matches scroll progress to a canvas (cheap + buttery). Falls back to seeking
 * a hidden <video> if frame extraction is blocked (e.g. CORS).
 */
export default function ScrollFlower({
  src,
  progress,
}: {
  src: string;
  progress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const framesRef = useRef<ImageBitmap[]>([]);
  const readyRef = useRef(false);
  const lastIdxRef = useRef(-1);
  const progressRef = useRef(0);
  const seekingRef = useRef(false);

  useMotionValueEvent(progress, "change", (v) => {
    progressRef.current = v;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let cancelled = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(canvas.offsetWidth * dpr);
      const h = Math.round(canvas.offsetHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        lastIdxRef.current = -1;
      }
    };

    const drawFrame = (frame: ImageBitmap) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const s = Math.max(cw / frame.width, ch / frame.height);
      const dw = frame.width * s;
      const dh = frame.height * s;
      ctx.drawImage(frame, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    // Per-frame render loop — reads the latest scroll progress each tick.
    const tick = () => {
      const p = progressRef.current;
      const frames = framesRef.current;
      if (readyRef.current && frames.length > 0) {
        const idx = Math.round(p * (frames.length - 1));
        if (idx !== lastIdxRef.current && frames[idx]) {
          lastIdxRef.current = idx;
          drawFrame(frames[idx]);
        }
      } else if (
        video.duration &&
        isFinite(video.duration) &&
        video.readyState >= 1
      ) {
        const target = p * (video.duration - 0.05);
        if (!seekingRef.current && Math.abs(video.currentTime - target) > 0.01) {
          seekingRef.current = true;
          video.currentTime = target;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    video.addEventListener("seeked", () => (seekingRef.current = false));
    video.addEventListener("stalled", () => (seekingRef.current = false));

    const extract = async () => {
      try {
        const res = await fetch(src, { mode: "cors" });
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const v = document.createElement("video");
        v.muted = true;
        v.playsInline = true;
        v.crossOrigin = "anonymous";
        v.preload = "auto";
        v.src = url;

        await new Promise<void>((resolve, reject) => {
          v.onloadedmetadata = () => resolve();
          v.onerror = () => reject();
          setTimeout(() => reject(), 15000);
        });

        const scale = Math.min(1, 1280 / v.videoWidth);
        const sw = Math.round(v.videoWidth * scale);
        const sh = Math.round(v.videoHeight * scale);
        const frameCount = Math.max(30, Math.min(96, Math.round(v.duration * 20)));

        for (let i = 0; i < frameCount; i++) {
          if (cancelled) return;
          const time = (i / (frameCount - 1)) * (v.duration - 0.05);
          v.currentTime = time;
          await new Promise<void>((resolve, reject) => {
            const onSeeked = () => {
              v.removeEventListener("seeked", onSeeked);
              resolve();
            };
            v.addEventListener("seeked", onSeeked);
            setTimeout(() => {
              v.removeEventListener("seeked", onSeeked);
              reject();
            }, 3000);
          });
          const bitmap = await createImageBitmap(v, {
            resizeWidth: sw,
            resizeHeight: sh,
          });
          framesRef.current.push(bitmap);
        }

        if (framesRef.current.length > 0) {
          readyRef.current = true;
          canvas.style.opacity = "1";
          video.style.opacity = "0";
          lastIdxRef.current = -1;
        }
        URL.revokeObjectURL(url);
      } catch {
        /* keep using the hidden <video> seek fallback */
      }
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);
    extract();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      framesRef.current.forEach((f) => f.close?.());
      framesRef.current = [];
    };
  }, [src]);

  return (
    <>
      {/* Hidden video: shown (and seeked) until canvas frames are ready */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        src={src}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        aria-hidden="true"
      />
      {/* Canvas: fades in once frames are extracted */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500"
        aria-hidden="true"
      />
    </>
  );
}
