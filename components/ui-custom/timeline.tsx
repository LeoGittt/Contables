"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#a17fb8]/20 dark:bg-[#a17fb8]/30"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Contenido */}
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
              <div
                className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#a17fb8]/10 dark:border-[#a17fb8]/20 ${
                  index % 2 === 0 ? "ml-auto" : "mr-auto"
                }`}
              >
                <h3 className="text-lg font-bold text-[#364798] dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>

            {/* Punto central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#a17fb8] rounded-full flex items-center justify-center z-10 border-4 border-white dark:border-gray-900">
              <span className="text-xs font-bold text-white">{item.year}</span>
            </div>

            {/* Espacio para mantener la simetría */}
            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
