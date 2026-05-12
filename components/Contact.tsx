"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, GitFork, MessageSquare, ExternalLink, Link2 } from "lucide-react";
import { usePageData } from "@/lib/usePageData";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, meta } = usePageData();

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: meta.email,
      href: `mailto:${meta.email}`,
      color: "hover:border-blue-500/30 hover:text-blue-300",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp",
      value: meta.phone,
      href: `https://wa.me/${meta.whatsapp}`,
      color: "hover:border-green-500/30 hover:text-green-300",
    },
    {
      icon: <Link2 size={20} />,
      label: "LinkedIn",
      value: "Ver perfil",
      href: meta.linkedin,
      color: "hover:border-blue-400/30 hover:text-blue-300",
    },
    {
      icon: <GitFork size={20} />,
      label: "GitHub",
      value: "Ver repositórios",
      href: meta.github,
      color: "hover:border-white/20 hover:text-white",
    },
  ];

  return (
    <section id="contato" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium tracking-wider uppercase">
            {t.contact.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-5">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto leading-relaxed">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`glass rounded-xl p-5 flex items-center gap-4 text-white/50 transition-all duration-300 group ${link.color}`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/30 mb-0.5">{link.label}</p>
                <p className="text-sm font-medium text-white truncate">{link.value}</p>
              </div>
              <ExternalLink size={14} className="opacity-30 group-hover:opacity-70 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 text-white/30 text-sm"
        >
          <MapPin size={14} />
          <span>{meta.location}</span>
          <span className="text-white/10">·</span>
          <span>{t.contact.location}</span>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={`https://wa.me/${meta.whatsapp}?text=${encodeURIComponent(t.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl shadow-green-600/20"
          >
            <MessageSquare size={20} />
            {t.contact.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
