"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePageData } from "@/lib/usePageData";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, skills } = usePageData();

  return (
    <section id="especialidades" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">
            {t.skills.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            {t.skills.title}{" "}
            <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="glass rounded-xl p-5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 mt-0.5">{skill.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-violet-300 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
