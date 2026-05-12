"use client";

import { usePageData } from "@/lib/usePageData";

export default function Footer() {
  const { t, meta } = usePageData();

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="gradient-text font-bold">PL</span>
          <span className="text-white/20 text-sm">·</span>
          <span className="text-white/30 text-sm">{meta.name}</span>
        </div>
        <p className="text-white/20 text-xs">{t.footer.built}</p>
      </div>
    </footer>
  );
}
