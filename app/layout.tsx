import type { Metadata } from "next";
import { Poppins, Noto_Sans_Hebrew, Assistant } from "next/font/google";
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

export const metadata: Metadata = {
  title: "ריטריט קופנגן · אוקטובר 2026",
  description:
    "ריטריט יוקרה בקופנגן, תאילנד · 8–16 באוקטובר 2026",
  openGraph: {
    title: "ריטריט קופנגן · אוקטובר 2026",
    description:
      "ריטריט יוקרה בקופנגן, תאילנד · 8–16 באוקטובר 2026 · Aloha Yoga ✕ Say Less Studios",
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
      className={`${poppins.variable} ${notoHebrew.variable} ${assistant.variable}`}
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
