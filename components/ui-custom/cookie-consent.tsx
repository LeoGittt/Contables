"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent")
    if (!hasAccepted) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-md z-50"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-[#a17fb8]/20 dark:border-[#a17fb8]/30 p-6 relative">
            <button
              onClick={declineCookies}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-lg font-bold text-[#364798] dark:text-white mb-2">Política de Cookies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas
              nuestra política de cookies.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={acceptCookies}
                className="bg-[#364798] hover:bg-[#364798]/90 text-white dark:bg-[#a17fb8] dark:hover:bg-[#a17fb8]/90"
              >
                Aceptar
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="border-[#a17fb8]/30 text-[#364798] dark:text-white hover:bg-[#a17fb8]/10"
              >
                Rechazar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
