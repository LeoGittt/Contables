"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "@/components/ui-custom/section-heading"

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const faqs = [
    {
      question: "¿Qué servicios ofrecen para monotributistas?",
      answer:
        "Ofrecemos un servicio integral para monotributistas que incluye: alta y recategorización, presentación de declaraciones juradas, asesoramiento sobre facturación, planificación fiscal y acompañamiento continuo para resolver todas tus dudas.",
    },
    {
      question: "¿Cómo funciona la primera consulta gratuita?",
      answer:
        "La primera consulta es una reunión de 30 minutos donde analizamos tu situación actual, respondemos tus preguntas y te presentamos las opciones que mejor se adaptan a tus necesidades. Puede ser presencial en nuestras oficinas o virtual por videollamada.",
    },
    {
      question: "¿Trabajan con empresas de cualquier tamaño?",
      answer:
        "Sí, trabajamos con emprendedores, profesionales independientes, pequeñas y medianas empresas. Adaptamos nuestros servicios a las necesidades específicas de cada cliente, independientemente de su tamaño.",
    },
    {
      question: "¿Cuáles son sus honorarios?",
      answer:
        "Nuestros honorarios varían según el servicio y la complejidad de cada caso. Trabajamos con planes mensuales personalizados y también ofrecemos servicios puntuales. En la primera consulta gratuita podemos darte un presupuesto detallado.",
    },
    {
      question: "¿Puedo cambiar de contador a mitad de año?",
      answer:
        "Sí, es posible cambiar de contador en cualquier momento del año. Nosotras nos encargamos de solicitar toda la documentación necesaria a tu contador anterior y realizamos una transición ordenada para que no tengas que preocuparte.",
    },
    {
      question: "¿Cómo es el proceso para constituir una sociedad?",
      answer:
        "El proceso incluye asesoramiento sobre el tipo de sociedad más conveniente, redacción del estatuto, gestión de inscripciones en los organismos correspondientes, obtención de CUIT y apertura de cuentas bancarias. Te acompañamos en cada paso del proceso.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge="Preguntas Frecuentes"
          title="Resolvemos tus dudas"
          description="Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y cómo podemos ayudarte."
        />

        <motion.div\
