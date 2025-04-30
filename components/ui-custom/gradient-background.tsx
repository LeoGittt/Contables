"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear gradiente
    const createGradient = () => {
      const isDark = theme === "dark"
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      if (isDark) {
        gradient.addColorStop(0, "rgba(161, 127, 184, 0.05)")
        gradient.addColorStop(0.5, "rgba(20, 20, 30, 0)")
        gradient.addColorStop(1, "rgba(54, 71, 152, 0.05)")
      } else {
        gradient.addColorStop(0, "rgba(161, 127, 184, 0.05)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)")
        gradient.addColorStop(1, "rgba(54, 71, 152, 0.05)")
      }

      return gradient
    }

    // Animación
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar fondo con gradiente
      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }} />
}
