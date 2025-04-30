"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CountUp } from "@/components/ui-custom/count-up"

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const stats = [
    {
      value: 200,
      label: "Clientes satisfechos",
      suffix: "+",
    },
    {
      value: 10,
      label: "Años de experiencia",
      suffix: "+",
    },
    {
      value: 1500,
      label: "Declaraciones presentadas",
      suffix: "+",
    },
    {
      value: 98,
      label: "Tasa de satisfacción",
      suffix: "%",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-r from-aura-blue to-aura-blue/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-5" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-aura-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-aura-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 flex items-center">
                {isInView && <CountUp end={stat.value} duration={1.5} />}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
