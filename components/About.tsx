"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { usePageData } from "@/lib/usePageData";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, meta } = usePageData();

  return (
    <section id="sobre" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Photo card */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-violet-600/15 blur-[70px]" />
            </div>

            <div className="relative w-full max-w-xs">
              {/* Photo */}
              <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden bg-linear-to-br from-violet-900/40 to-slate-900/60">
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-br from-violet-500/25 via-transparent to-blue-500/15 -z-10" />
                <Image
                  src="/profile.png"
                  alt={meta.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 320px"
                  loading="eager"
                  className="object-cover object-top"
                />
              </div>

              {/* Info card below photo */}
              <div className="glass-strong rounded-2xl p-5 mt-4">
                <div className="text-white font-bold text-base mb-0.5">{meta.name}</div>
                <div className="text-violet-300 text-sm font-medium mb-4">{meta.title}</div>
                <div className="space-y-2">
                  {[
                    { icon: "📍", text: meta.location },
                    { icon: "💼", text: t.about.experience },
                    { icon: "📱", text: t.about.mobile },
                    { icon: "🌐", text: t.about.web },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-white/55 text-xs">
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-violet-500/40 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-violet-500/40 rounded-br-lg" />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div>
              <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">
                {t.about.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                {t.about.title}{" "}
                <span className="gradient-text">{t.about.titleHighlight}</span>
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed">{t.about.p1}</p>
            <p className="text-white/60 leading-relaxed">{t.about.p2}</p>
            <p className="text-white/60 leading-relaxed">{t.about.p3}</p>

            <div className="glass rounded-xl p-5 border-l-2 border-violet-500/40">
              <p className="text-white/80 italic leading-relaxed">{t.about.quote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
