"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePageData } from "@/lib/usePageData";

export default function ValuePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, valuePillars } = usePageData();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">
            {t.valuePillars.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            {t.valuePillars.title}{" "}
            <span className="gradient-text">{t.valuePillars.titleHighlight}</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">{t.valuePillars.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valuePillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative glass rounded-xl p-6 overflow-hidden group hover:border-violet-500/20 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-2xl group-hover:bg-violet-600/10 transition-all" />
              <div className="relative z-10">
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-violet-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
