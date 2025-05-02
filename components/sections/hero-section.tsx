"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative mt-1 sm:mt-16 md:mt-20  bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-full bg-gradient-to-br from-[#BFDDFF]/20 via-white to-white" />
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(rgba(54,71,151,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(54,71,151,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 py-20 md:py-28">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left max-w-xl"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#BFDDFF] bg-white px-3 py-1.5 text-sm shadow-sm">
            <span className="mr-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFF3AE]">
              <span className="text-xs text-[#364797]">✦</span>
            </span>
            <span className="font-josefin text-[#364797] flex items-center gap-2">
              <span>Contabilidad que potencia tu empresa</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#C8A0F2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </span>
          </div>

          <h1 className="font-josefin text-2xl md:text-3xl font-medium text-[#364797] tracking-tight mb-4 leading-snug">
            Gestión contable eficiente, decisiones respaldadas
            <br />
            <span className="bg-gradient-to-r from-[#364797] to-[#C8A0F2] bg-clip-text text-transparent">
              Optimiza procesos, impulsa resultados
            </span>
          </h1>

          <p className="text-base md:text-md text-gray-600 font-josefin mb-6 leading-relaxed">
            En Aura, transformamos los números en claridad. Brindamos soluciones
            contables personalizadas con un enfoque humano y cercano para
            impulsar tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Button
              className="group h-11 w-full sm:w-auto bg-[#364797] px-5 font-josefin text-sm font-medium text-white transition-all hover:bg-[#364797]/90"
              asChild
            >
              <Link href="#contacto">
                Solicitar asesoría
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-11 w-full sm:w-auto border-[#C8A0F2] px-5 font-josefin text-sm font-medium text-[#364797] hover:bg-[#C8A0F2]/10 transition"
              asChild
            >
              <Link href="#servicios">Conocer servicios</Link>
            </Button>
          </div>
        </motion.div>

        {/* Logo a la derecha, más separado y redondeado */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end items-center"
        >
          <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] bg-[#BFDDFF]/40 blur-2xl rounded-full z-0" />
          <Image
            src="/logop.jpg"
            alt="Logo Aura"
            width={300}
            height={300}
            className="relative z-10 object-contain drop-shadow-xl w-[170px] h-[170px] md:w-[230px] md:h-[230px] lg:w-[260px] lg:h-[260px] rounded-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
