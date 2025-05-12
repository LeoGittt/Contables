"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
  {/* Fondo refinado */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBEDD]/10 via-white to-[#C8A0F2]/5" />
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A0F2_1px,transparent_1px)] [background-size:32px_32px]" />
  </div>

  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex min-h-[90vh] items-center justify-center py-10 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center w-full">
        {/* Contenido de texto - Izquierda */}
        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Badge superior */}
          <div className="inline-flex items-center rounded-full border border-[#C8A0F2]/30 bg-white/80 backdrop-blur-sm px-2.5 py-1 text-xs sm:text-sm sm:px-3 sm:py-1.5 shadow-sm mb-4 sm:mb-6">
            <span className="mr-1 sm:mr-1.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-[#FFF3AE]">
              <span className="text-[10px] sm:text-xs text-[#C8A0F2]">✦</span>
            </span>
            <span className="text-[#C8A0F2] font-medium text-xs sm:text-sm">
              Contabilidad que potencia tu empresa
            </span>
          </div>

          {/* Título principal */}
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#C8A0F2] tracking-tight mb-3 sm:mb-4 md:mb-6 leading-[1.2] sm:leading-[1.1]">
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
          <p className="text-sm sm:text-base md:text-sm text-gray-600 mb-2 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            En Aura, transformamos los números en claridad. Brindamos
            soluciones contables personalizadas con un enfoque humano y
            cercano para impulsar tu negocio hacia el éxito.
          </p>

          {/* Características */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-100 shadow-sm">
              <span className="text-[#C8A0F2] font-medium">✓</span>
              <span>Soluciones personalizadas</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-100 shadow-sm">
              <span className="text-[#C8A0F2] font-medium">✓</span>
              <span>Análisis detallado</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-100 shadow-sm">
              <span className="text-[#C8A0F2] font-medium">✓</span>
              <span>Seguridad garantizada</span>
            </div>
          </div>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
            <Button
              className={cn(
                "h-10 sm:h-11 md:h-12 w-full sm:w-auto bg-gradient-to-r from-[#C8A0F2] to-[#C8A0F2]/90 px-4 sm:px-5 md:px-6",
                "text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#C8A0F2]/20",
                "max-w-xs relative overflow-hidden group"
              )}
              asChild
            >
              <Link href="#contacto">
                <span className="relative z-10 flex items-center">
                  Solicitar asesoría
                  <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A0F2] to-[#FFBEDD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className={cn(
                "h-10 sm:h-11 md:h-12 w-full sm:w-auto border-[#FFBEDD] px-4 sm:px-5 md:px-6 text-sm font-medium",
                "text-[#C8A0F2] hover:bg-[#FFBEDD]/5 transition-all",
                "hover:border-[#FFBEDD]/80 hover:shadow-sm max-w-xs"
              )}
              asChild
            >
              <Link href="#servicios">Conocer servicios</Link>
            </Button>
          </div>
        </div>

        {/* Logo - Derecha */}
        <div className="order-1 lg:order-2 flex justify-center items-center lg:pr-2 mx-auto">
          <div className="relative">
            {/* Efecto de resplandor - más pequeño en móviles */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-[#FFBEDD]/20 to-[#C8A0F2]/20 blur-xl sm:blur-2xl rounded-full opacity-70" />

            {/* Contenedor del logo - más pequeño en móviles */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-md sm:shadow-lg border border-[#FFBEDD]/20">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                <Image
                  src="/logo.jpg"
                  alt="Logo Aura"
                  width={320}
                  height={320}
                  className="object-contain w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px]"
                  priority
                />
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Elementos decorativos - más pequeños en móviles */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full bg-[#FFF3AE]/30 blur-md" />
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-full bg-[#FFBEDD]/20 blur-md" />
            </div>

            {/* Elemento decorativo adicional - solo visible en desktop */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 h-20 w-1 bg-gradient-to-b from-[#C8A0F2]/0 via-[#C8A0F2]/30 to-[#C8A0F2]/0 rounded-full hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Separador sutil */}
  <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-white/80 to-transparent" />
</section>

  );
}
