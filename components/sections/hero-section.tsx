"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBEDD]/10 via-white to-[#C8A0F2]/5" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A0F2_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-6xl mx-auto">
            {/* Contenido de texto - Izquierda */}
            <div className="order-2 lg:order-1 lg:col-span-6 text-center lg:text-left flex flex-col">
              {/* Badge superior */}
              <div className="inline-flex items-center rounded-full border border-[#C8A0F2]/30 bg-white/80 backdrop-blur-sm px-3 py-1.5 text-sm shadow-sm mb-6 mx-auto lg:mx-0">
                <span className="mr-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFF3AE]">
                  <span className="text-xs text-[#C8A0F2]">✦</span>
                </span>
                <span className="text-[#C8A0F2] font-medium">Contabilidad que potencia tu empresa</span>
              </div>

              {/* Título principal */}
              <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#C8A0F2] tracking-tight mb-6 leading-[1.2]">
                Gestión contable{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-[#C8A0F2] to-[#FFBEDD] bg-clip-text text-transparent">
                    eficiente
                  </span>
                  <span className="absolute bottom-1 left-0 h-[0.2em] w-full bg-gradient-to-r from-[#C8A0F2]/20 to-[#FFBEDD]/20 rounded-full z-0" />
                </span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#C8A0F2] to-[#FFBEDD] bg-clip-text text-transparent">
                  decisiones respaldadas
                </span>
              </h1>

              {/* Descripción */}
              <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                En Aura, transformamos los números en claridad. Brindamos soluciones contables personalizadas con un
                enfoque humano y cercano para impulsar tu negocio hacia el éxito.
              </p>

              {/* Características */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {["Soluciones personalizadas", "Análisis detallado", "Seguridad garantizada"].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 shadow-sm"
                  >
                    <span className="text-[#C8A0F2] font-medium">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button
                  className={cn(
                    "h-12 w-full sm:w-auto bg-gradient-to-r from-[#C8A0F2] to-[#C8A0F2]/90 px-6",
                    "text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#C8A0F2]/20",
                    "relative overflow-hidden group",
                  )}
                  asChild
                >
                  <Link href="#contacto">
                    <span className="relative z-10 flex items-center">
                      Solicitar asesoría
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#C8A0F2] to-[#FFBEDD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 w-full sm:w-auto border-[#FFBEDD] px-6 text-sm font-medium",
                    "text-[#C8A0F2] hover:bg-[#FFBEDD]/5 transition-all",
                    "hover:border-[#FFBEDD]/80 hover:shadow-sm",
                  )}
                  asChild
                >
                  <Link href="#servicios">Conocer servicios</Link>
                </Button>
              </div>
            </div>

            {/* Logo - Derecha */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center">
              <div className="relative">
                {/* Efecto de resplandor */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#FFBEDD]/20 to-[#C8A0F2]/20 blur-2xl rounded-full opacity-70" />

                {/* Contenedor del logo */}
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-[#FFBEDD]/20">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/logo.jpg"
                      alt="Logo Aura"
                      width={320}
                      height={320}
                      className="object-contain w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]"
                      priority
                    />
                    {/* Efecto de brillo sutil */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-[#FFF3AE]/30 blur-md" />
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-[#FFBEDD]/20 blur-md" />
                </div>

                {/* Elemento decorativo adicional - solo visible en desktop */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 h-20 w-1 bg-gradient-to-b from-[#C8A0F2]/0 via-[#C8A0F2]/30 to-[#C8A0F2]/0 rounded-full hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separador sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent" />
    </section>
  )
}
