"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxWrapperProps {
  children: ReactNode
}

export function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <motion.div
      ref={ref}
      style={{
        y: backgroundY,
      }}
    >
      {children}
    </motion.div>
  )
}
