"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Star,
  Sparkles,
  FileText,
  User,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="pt-20 pb-20 md:pt-28 md:pb-32 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,78,198,0.05)_0%,rgba(255,255,255,0)_60%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-aura-purple/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 20 - 10,
            y: mousePosition.y * 20 - 10,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-aura-blue/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -20 + 10,
            y: mousePosition.y * -20 + 10,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:grid gap-10 lg:grid-cols-2 lg:gap-8 items-center lg:justify-center lg:max-w-5xl mx-auto">
          {/* Contenido principal */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ y: parallaxY1, opacity }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border border-aura-purple bg-white/70 backdrop-blur-md px-3 py-1.5 text-sm text-aura-blue shadow-sm mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-aura-blue fill-aura-purple font-semibold" />
              <span className="font-medium">Asesoría Contable Profesional</span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-aura-blue leading-tight max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tu contabilidad con{" "}
              <span className="relative text-aura-purple inline-block">
                claridad
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-aura-purple/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>{" "}
              y{" "}
              <span className="relative text-aura-purple inline-block">
                cercanía
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-aura-purple/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-md md:text-base text-gray-600 max-w-[600px] font-semibold leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              En Aura, los números hablan claro. Te ayudamos a crecer con
              confianza y cercanía humana, brindando soluciones contables a
              medida para tu negocio.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button
                className="bg-aura-blue text-white px-4 py-2 h-9 relative overflow-hidden group transition-all duration-200 hover:bg-aura-blue/90"
                size="sm"
                asChild
              >
                <Link
                  href="https://wa.me/5492645834384"
                  className="flex items-center justify-center gap-1.5 text-sm font-normal"
                >
                  Solicitar asesoría
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-aura-purple/40 text-aura-blue px-4 py-2 h-9 text-sm font-normal relative overflow-hidden group hover:border-aura-purple/60 hover:bg-transparent"
                size="sm"
                asChild
              >
                <Link
                  href="#servicios"
                  className="flex items-center gap-1.5 relative z-10"
                >
                  Conocer servicios
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* CARD — se oculta en mobile */}
          <motion.div
            className="hidden lg:flex items-center justify-center mt-20 lg:mt-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-md w-full max-w-xs border border-aura-purple/10">
              <div className="relative w-full h-40">
                <Image
                  src="/log.svg"
                  alt="Logo Aura Asesoría Contable"
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-3">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-aura-purple/10 p-2 rounded-md">
                    <FileText className="h-4 w-4 text-aura-purple" />
                  </div>
                  <h3 className="text-base font-semibold text-aura-blue">
                    Asesoría especializada
                  </h3>
                </div>

                <ul className="space-y-3 mb-4">
                  {[
                    "Gestión fiscal integral",
                    "Informes claros y precisos",
                    "Soporte personalizado",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <Check className="h-3.5 w-3.5 text-aura-purple mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mb-5">
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-1.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-aura-purple to-aura-blue"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-end items-center">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-2.5 w-2.5 fill-aura-purple text-aura-purple"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-aura-blue hover:bg-aura-blue/90 text-white text-xs py-2 h-8 mt-2"
                  asChild
                >
                  <Link
                    href="#contacto"
                    className="flex items-center font-semibold justify-center gap-1"
                  >
                    Contactar <User className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
