"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageData } from "@/lib/usePageData";

function LanguagePicker({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-0.5 p-1 rounded-lg bg-white/5 border border-white/10 ${className}`}>
      <button
        onClick={() => setLang("pt")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
          lang === "pt"
            ? "bg-violet-500/30 text-violet-200"
            : "text-white/40 hover:text-white/70"
        }`}
      >
        🇧🇷 PT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
          lang === "en"
            ? "bg-violet-500/30 text-violet-200"
            : "text-white/40 hover:text-white/70"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, meta } = usePageData();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold text-white tracking-tight">
            <span className="gradient-text font-bold">PL</span>
            <span className="text-white/60 text-sm ml-2">Paulo Leandro</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <LanguagePicker />
            <a
              href="#contato"
              className="text-sm px-4 py-2 rounded-lg border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-all duration-200"
            >
              {t.nav.contact}
            </a>
          </nav>

          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-white/70 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <LanguagePicker />
            <a
              href="#contato"
              className="mt-4 px-6 py-3 rounded-lg border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
