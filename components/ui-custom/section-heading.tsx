"use client"

import { motion } from "framer-motion"
import { JSX } from "react";

interface SectionHeadingProps {
  badge: JSX.Element;
  title: string
  description: string
  centered?: boolean
  className?: string;  
  bg?: string;
}

export function SectionHeading({ badge, title, description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} mb-12 ${className}`}>
      <motion.div
        className="inline-flex items-center rounded-full border border-aura-purple bg-white/50 px-3 py-1 text-sm text-aura-blue mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span>{badge}</span>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-aura-blue mb-4 font-josefin"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={`${centered ? "max-w-[800px]" : ""} text-gray-600`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </div>
  )
}
