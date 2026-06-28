"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { APPLY_URL } from "@/lib/config";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href={APPLY_URL}
        aria-label="להרשמה"
        className="block bg-[#6E8A7F] text-[#ECEEE9] font-assistant font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-[#2A3A33] transition-colors duration-300"
      >
        להרשמה ←
      </Link>
    </motion.div>
  );
}
