"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, ExternalLink } from "lucide-react";
import { usePageData } from "@/lib/usePageData";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, projects } = usePageData();

  return (
    <section id="projetos" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <Layers size={18} className="text-violet-400" />
            </div>
            <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">
              {t.projects.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.projects.title}{" "}
            <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-xl">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="glass rounded-xl p-6 hover:border-violet-500/15 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-white text-base group-hover:text-violet-300 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs text-violet-400/70">{project.company}</span>
                </div>
              </div>

              <p className="text-white/40 text-sm mb-3 leading-relaxed">{project.context}</p>

              <div className="mb-4">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-2">{t.projects.myRole}</p>
                <p className="text-white/60 text-sm leading-relaxed">{project.role}</p>
              </div>

              <div className="mb-4 glass rounded-lg p-3">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1.5">{t.projects.impact}</p>
                <p className="text-white/50 text-sm">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-0.5 rounded bg-violet-500/10 text-violet-300/60 border border-violet-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, k) => (
                    <a
                      key={k}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
