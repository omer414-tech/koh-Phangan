import type { Metadata } from "next";
import { Poppins, Noto_Sans_Hebrew, Assistant, Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { LanguageProvider } from "@/components/ui/LanguageProvider";

// Latin headings → Poppins (Bold 700; 300 kept for the thin hero wordmark)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Hebrew headings → Noto Sans Hebrew, variable across weight + width (wdth)
// so headings can render at ExtraCondensed width (~62.5%) via font-stretch.
const notoHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  axes: ["wdth"],
  variable: "--font-noto-hebrew",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

// Prisma design: Almarai (Latin global) + Instrument Serif italic (accents)
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
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
      className={`${poppins.variable} ${notoHebrew.variable} ${assistant.variable} ${almarai.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>
            {children}
            <FloatingCTA />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
