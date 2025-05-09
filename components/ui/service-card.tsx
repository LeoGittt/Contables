"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradientFrom: string; // ejemplo: "#BFDDFF"
  gradientTo: string;   // ejemplo: "#C8A0F2"
  className?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  gradientFrom,
  gradientTo,
  className,
  index = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Color morado de fondo que resalta
  const iconBackgroundColor = "#C8A0F2";  // Este es el morado pastel

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-gray-100",
        "transition-all duration-300 hover:-translate-y-1",
        "hover:shadow-[0_4px_30px_rgba(200,160,242,0.4)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fondo degradado animado */}
      <motion.div
        className="absolute inset-0 rounded-xl z-0"
        style={{
          background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="absolute inset-[1px] bg-white rounded-[11px] z-10" />

      <div className="relative z-20 p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          {/* Fondo de color morado para el icono */}
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: isHovered ? "#C8A0F2" : "#BFDDFF", // Cambia entre morado y celeste
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6 text-white/90" />
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#364797] transition-colors tracking-wide">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mt-auto tracking-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
