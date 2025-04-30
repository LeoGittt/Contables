"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Users, Heart, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "@/components/ui-custom/section-heading"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  return (
    <section 
      ref={sectionRef} 
      id="about-us" 
      className="py-24 bg-gradient-to-b from-white to-[#f9f5ff] relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#a17fb8]/10 to-transparent -z-0" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#a17fb8]/10 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#364798]/10 blur-3xl -z-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge={
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#a17fb8]/10 rounded-full text-[#a17fb8]">
              <Star className="w-4 h-4" />
              Sobre Nosotras
            </span>
          }
          title="Transformando la contabilidad con corazón"
          description="Somos un equipo apasionado que reinventa la experiencia contable, combinando expertise profesional con un trato humano y cercano."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl group">
              <Image 
                src="/images/team-photo.jpg" 
                alt="Equipo Aura" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#364798] mb-2">Contabilidad con rostro humano</h3>
                  <p className="text-gray-600">Donde los números encuentran calidez y profesionalismo</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#364798]">Nuestra esencia</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                En Aura, hemos creado un espacio donde la contabilidad deja de ser un requisito tedioso para convertirse en una herramienta clara y poderosa para tu negocio.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: <Star className="h-6 w-6 text-[#a17fb8]" />,
                  title: "Misión",
                  description: "Simplificar lo complejo. Hacer accesible lo técnico. Brindar soluciones contables que realmente sumen valor.",
                },
                {
                  icon: <Award className="h-6 w-6 text-[#a17fb8]" />,
                  title: "Visión",
                  description: "Ser el referente en contabilidad humana, donde cada cliente se siente comprendido y acompañado.",
                },
                {
                  icon: <Users className="h-6 w-6 text-[#a17fb8]" />,
                  title: "Filosofía",
                  description: "Creemos en relaciones profesionales basadas en confianza, transparencia y crecimiento mutuo.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-xl border border-[#e6d5f1] hover:shadow-md transition-all"
                >
                  <div className="bg-[#a17fb8]/10 p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#a17fb8] mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-28">
          <motion.h3 
            className="text-3xl font-bold text-center text-[#364798] mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <span className="relative inline-block">
              Lo que nos diferencia
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#a17fb8] to-[#364798]" />
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enfoque personalizado",
                description: "Soluciones a medida para cada cliente, porque entendemos que cada negocio es único.",
                icon: <Heart className="h-6 w-6 text-white" />,
                bg: "bg-gradient-to-br from-[#a17fb8] to-[#7d5d96]",
              },
              {
                title: "Tecnología amigable",
                description: "Herramientas digitales intuitivas que simplifican tu gestión contable.",
                icon: <Star className="h-6 w-6 text-white" />,
                bg: "bg-gradient-to-br from-[#364798] to-[#2a3a7a]",
              },
              {
                title: "Comunicación clara",
                description: "Explicaciones sencillas, sin jerga técnica innecesaria.",
                icon: <Users className="h-6 w-6 text-white" />,
                bg: "bg-gradient-to-br from-[#7d5d96] to-[#364798]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group"
              >
                <Card className="border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all h-full">
                  <div className={`${item.bg} h-48 flex items-center justify-center`}>
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:rotate-12 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#364798] mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button className="flex items-center text-[#a17fb8] font-medium hover:underline">
                      Conocer más <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#364798] to-[#a17fb8] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-xl -z-0" />
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-xl -z-0" />
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para una nueva experiencia contable?</h3>
            <p className="text-white/90 mb-8 max-w-2xl text-lg">
              Descubre cómo podemos transformar la gestión de tus números en una experiencia clara, humana y enriquecedora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#364798] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Contactar ahora
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                Conocer al equipo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}