"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { usePageData } from "@/lib/usePageData";

type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

function ExperienceCard({
  exp,
  index,
  isInView,
  currentLabel,
}: {
  exp: Experience;
  index: number;
  isInView: boolean;
  currentLabel: string;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/10 to-transparent" />

      {/* Timeline dot */}
      <div
        className={`absolute left-[-4px] top-5 w-2 h-2 rounded-full border ${
          exp.current
            ? "bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/50"
            : "bg-[#0a0a0f] border-violet-500/40"
        }`}
      />

      <div
        className={`glass rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
          exp.current ? "border-violet-500/20" : ""
        } hover:border-violet-500/15`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 flex items-start justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-semibold text-white text-base">{exp.company}</h3>
              {exp.current && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
                  {currentLabel}
                </span>
              )}
            </div>
            <p className="text-violet-300 text-sm font-medium">{exp.role}</p>
            <p className="text-white/30 text-xs mt-1">{exp.period}</p>
          </div>
          <div className="text-white/30 mt-1 flex-shrink-0">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 border-t border-white/5 pt-4">
                <p className="text-white/50 text-sm leading-relaxed mb-4">{exp.summary}</p>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-violet-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/40 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, experiences } = usePageData();

  return (
    <section id="experiencia" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <Briefcase size={18} className="text-violet-400" />
            </div>
            <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">
              {t.experience.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.experience.title}{" "}
            <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-xl">{t.experience.subtitle}</p>
        </motion.div>

        <div className="space-y-1">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              isInView={isInView}
              currentLabel={t.experience.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
