"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import * as ptData from "@/lib/data";
import * as enData from "@/lib/data.en";

export function usePageData() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const d = lang === "en" ? enData : ptData;
  return { t, ...d };
}
