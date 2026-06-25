import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FloatingCTA from "@/components/ui/FloatingCTA";

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-frank",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ריטריט קופנגן · אוקטובר 2026",
  description:
    "ריטריט יוקרה בקופנגן, תאילנד · 8–15 באוקטובר 2026 · Aloha Yoga ✕ Say Less Studios · 24 מקומות בלבד",
  openGraph: {
    title: "ריטריט קופנגן · אוקטובר 2026",
    description:
      "ריטריט יוקרה בקופנגן, תאילנד · 8–15 באוקטובר 2026 · Aloha Yoga ✕ Say Less Studios",
    locale: "he_IL",
    type: "website",
    // TODO: Add real OG image at /public/og-image.jpg (1200×630)
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frank.variable} ${assistant.variable}`}
    >
      <body>
        <SmoothScroll>
          {children}
          <FloatingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
