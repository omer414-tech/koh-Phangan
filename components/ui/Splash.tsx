"use client";

import { useEffect, useState } from "react";

export default function Splash() {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // 0 → 100 over 2000ms (100 steps × 20ms)
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      setCount(Math.min(100, step));
      if (step >= 100) {
        clearInterval(id);
        setTimeout(() => setExiting(true), 200);
        setTimeout(() => setGone(true), 900);
      }
    }, 20);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#ECEEE9] flex items-end justify-start transition-opacity duration-700 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <span className="font-heading text-[#28302C] text-7xl md:text-9xl font-bold tabular-nums p-6 md:p-10 leading-none">
        {count}
      </span>
    </div>
  );
}
