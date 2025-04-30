"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#a17fb8]/5 to-white dark:from-[#a17fb8]/10 dark:to-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#a17fb8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#364798]/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#364798] dark:bg-[#a17fb8]/20 rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#a17fb8]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#a17fb8]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  ¿Querés sentirte acompañado y en control de tu negocio?
                </h2>
                <p className="text-lg md:text-xl mb-6 text-white/90">
                  En Aura estamos listas para ayudarte con cercanía y claridad.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Primera consulta sin cargo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Atención personalizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-white/20 p-1 rounded-full">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90">Soluciones a medida para tu negocio</span>
                  </li>
                </ul>
                <Button className="bg-white hover:bg-white/90 text-[#364798] dark:text-[#a17fb8] px-8 py-6 h-auto text-lg">
                  <Link href="https://wa.me/5492645834384" className="flex items-center justify-center gap-2">
                    Hablá con nosotras
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Nuestros planes</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Plan Emprendedor</h4>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded text-white">Desde $15.000/mes</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Ideal para monotributistas y emprendedores que recién comienzan.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Plan Crecimiento</h4>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded text-white">Desde $25.000/mes</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Para pequeñas empresas que necesitan un servicio más completo.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Plan Empresarial</h4>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded text-white">Personalizado</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Solución integral para empresas con necesidades específicas.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="#contacto"
                    className="text-sm text-white/90 hover:text-white underline underline-offset-4"
                  >
                    Ver detalles de los planes
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
