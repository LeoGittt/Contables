"use client"

import { useEffect, useRef } from "react"

export function EtherealBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Create stars
    const stars: { x: number; y: number; radius: number; color: string; alpha: number; speed: number }[] = []
    const colors = ["#FFF3AE", "#BFDDFF", "#C8A0F2", "#FFBEDD"]

    for (let i = 0; i < 70; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 2 + 0.5
      const color = colors[Math.floor(Math.random() * colors.length)]
      const alpha = Math.random() * 0.5 + 0.2
      const speed = Math.random() * 0.05 + 0.01

      stars.push({ x, y, radius, color, alpha, speed })
    }

    // Animation
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.alpha
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset position if star goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" style={{ pointerEvents: "none" }} />
}
