"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Globe } from "lucide-react";
import { usePageData } from "@/lib/usePageData";

const institutionAbbr: Record<string, string> = {
  "Rocketseat": "RS",
  "Universidade Paulista — UNIP": "UP",
  "UniPDS": "UD",
  "LinkedIn Cursos": "LI",
  "LinkedIn Learning": "LI",
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, education, languages } = usePageData();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <GraduationCap size={18} className="text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{t.education.title}</h2>
            </div>

            <div className="space-y-3">
              {education.map((ed, i) => {
                const abbr = institutionAbbr[ed.institution] ?? ed.institution.slice(0, 2).toUpperCase();
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                    className="glass rounded-xl p-4 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-400 text-xs font-bold">{abbr}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{ed.course}</p>
                      <p className="text-white/40 text-xs mt-0.5">{ed.institution}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/30 mt-1.5 inline-block">
                        {ed.type}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <Globe size={18} className="text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">{t.education.languagesTitle}</h2>
            </div>

            <div className="space-y-3">
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                  className="glass rounded-xl p-5 flex items-center justify-between"
                >
                  <span className="text-white font-medium">{lang.lang}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Short bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-8 glass-strong rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/8 rounded-full blur-3xl" />
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">{t.education.shortBioLabel}</p>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">{t.education.shortBio}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
