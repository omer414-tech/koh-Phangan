"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "he" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}>({ lang: "he", setLang: () => {}, toggle: () => {} });

// Safe localStorage helpers — Safari Private Mode throws on access, which would
// otherwise crash the whole app (blank page).
function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function safeSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode / storage disabled — ignore */
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he");

  // Restore saved preference (default Hebrew)
  useEffect(() => {
    const saved = safeGet("lang");
    setLang(saved === "en" ? "en" : "he");
  }, []);

  // Reflect language on <html> and persist
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    safeSet("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle: () => setLang(lang === "he" ? "en" : "he") }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a value by language: t({ he: "...", en: "..." }) */
export function useT() {
  const { lang } = useLang();
  return <T,>(pair: { he: T; en: T }) => pair[lang];
}
