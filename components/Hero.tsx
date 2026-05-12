"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { usePageData } from "@/lib/usePageData";

export default function Hero() {
  const { t, meta, highlights } = usePageData();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-blue-600/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,92,246,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            {meta.name}
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            <span className="gradient-text">{meta.title}</span>
          </h2>

          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            {meta.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#experiencia"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 shadow-lg shadow-violet-600/20"
            >
              {t.hero.cta1}
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 font-medium transition-all duration-200"
            >
              <Mail size={16} />
              {t.hero.cta2}
            </a>
            <a
              href="/cv-paulo-leandro.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 font-medium transition-all duration-200"
            >
              <Download size={16} />
              {t.hero.cta3}
            </a>
          </div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                className="glass rounded-xl px-4 py-3 flex flex-col items-center min-w-[110px]"
              >
                <span className="text-white font-semibold text-sm">{h.label}</span>
                <span className="text-white/40 text-xs mt-0.5">{h.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-violet-500/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
