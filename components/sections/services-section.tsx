"use client"

import type React from "react"

import { useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useInView } from "framer-motion"
import { ServiceCard } from "@/components/ui/service-card"
import { SectionHeading } from "@/components/ui-custom/section-heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BarChart3,
  LineChart,
  Calculator,
  Search,
  CreditCard,
  Banknote,
  ClipboardList,
  Scale,
  Clock,
  Building2,
  BookOpen,
  Pencil,
  Trash2,
  Users,
  Briefcase,
  Handshake,
  Microscope,
  BadgeInfo,
  Key,
  CheckCircle,
  FileText,
  Brain,
  Lightbulb,
  Building,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

// Service category type definition for better type safety
type ServiceCategory = {
  title: string
  items: {
    title: string
    description: string
    icon: React.ElementType
    gradientFrom: string
    gradientTo: string
  }[]
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  // Services data organized by category
  const services: Record<string, ServiceCategory> = {
    contable: {
      title: "Contable y Financiera",
      items: [
        {
          title: "Contabilidad general",
          description: "Registración de operaciones y gestión contable integral",
          icon: BarChart3,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Estados contables",
          description: "Balances, confección y aprobación",
          icon: LineChart,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Análisis financiero",
          description: "Recopilación de datos, interpretaciones de indicadores y evaluación de resultados.",
          icon: Calculator,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Auditoría interna",
          description: "Control de gestión y procesos internos",
          icon: Search,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Sistemas de costos",
          description: "Diseño e implementación de modelos de costos",
          icon: CreditCard,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
      ],
    },
    impositiva: {
      title: "Impositiva",
      items: [
        {
          title: "Monotributo",
          description: "Alta, baja, recategorización y facturación electrónica",
          icon: Banknote,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Responsable Inscripto",
          description: "Inscripciones en ARCA y Rentas, Convenio Multilateral – declaraciones juradas.",
          icon: ClipboardList,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Regímenes de información",
          description: "Libro IVA Digital, declaraciones juradas, SICORE",
          icon: FileText,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Fiscalizaciones",
          description: "Asistencia en requerimientos de ARCA",
          icon: Scale,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Moratorias",
          description: "Regularización de deuda y planes de pago",
          icon: Clock,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
      ],
    },
    societaria: {
      title: "Societaria y Legal",
      items: [
        {
          title: "Constitución de sociedades",
          description: "Asesoramiento en tipo societario y trámites IGJ",
          icon: Building2,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Actas y libros",
          description: "Redacción de actas societarias y documentación legal",
          icon: BookOpen,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Modificaciones estatutarias",
          description: "Cambios en la estructura societaria",
          icon: Pencil,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Disolución",
          description: "Procesos de liquidación de sociedades",
          icon: Trash2,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
      ],
    },
    laboral: {
      title: "Laboral",
      items: [
        {
          title: "Altas y bajas",
          description: "Gestión de empleadores y empleados en ARCA",
          icon: Users,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Liquidación de sueldos",
          description: "Cálculo de haberes y cargas sociales (F931)",
          icon: Briefcase,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Convenios colectivos",
          description: "Asesoramiento en normativa laboral",
          icon: Handshake,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Inspecciones laborales",
          description: "Asistencia ante requerimientos",
          icon: Microscope,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
      ],
    },
    tramites: {
      title: "Trámites",
      items: [
        {
          title: "CUIT",
          description: "Tramitación de identificación tributaria",
          icon: BadgeInfo,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Clave fiscal",
          description: "Gestión y blanqueo de acceso digital",
          icon: Key,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Habilitaciones",
          description: "ARCA – DGR – Organismos reguladores – Municipalidades.",
          icon: CheckCircle,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Certificados",
          description: "Libre deuda, ingresos y supervivencia",
          icon: FileText,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
      ],
    },
    consultoria: {
      title: "Consultoría",
      items: [
        {
          title: "Planificación impositiva",
          description: "Estrategias de optimización fiscal",
          icon: Brain,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Viabilidad de negocios",
          description: "Análisis de proyectos e inversiones",
          icon: Lightbulb,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
        {
          title: "Asesoramiento PYMES",
          description: "Soluciones para pequeñas empresas",
          icon: Building,
          gradientFrom: "#C8A0F2",
          gradientTo: "#BFDDFF",
        },
        {
          title: "Capacitaciones",
          description: "Cursos en contabilidad e impuestos",
          icon: GraduationCap,
          gradientFrom: "#FFBEDD",
          gradientTo: "#FFF3AE",
        },
      ],
    },
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-gradient-to-bl from-[#C8A0F2]/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-gradient-to-tr from-[#BFDDFF]/10 to-transparent rounded-tr-full" />

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Servicios Profesionales"
          title="Soluciones contables integrales"
          description="Ofrecemos servicios especializados para cada necesidad de tu negocio, con la calidad y profesionalismo que nos caracteriza."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <Tabs defaultValue="contable" className="w-full">
            {/* Tabs navigation with sticky behavior on scroll */}
            <div className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 mb-8 py-2 shadow-sm">
              <TabsList className="flex gap-3 bg-transparent font-josefin-sans w-full max-w-full overflow-x-auto px-2 justify-start md:justify-center scrollbar-hide">
                {Object.entries(services).map(([key, { title }]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-[#C8A0F2] data-[state=active]:text-white text-sm font-medium px-4 py-2 rounded-md transition-all whitespace-nowrap hover:bg-[#C8A0F2]/10"
                  >
                    {title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab content with staggered animations */}
            {Object.entries(services).map(([key, { items }]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {items.map((service, index) => (
                    <motion.div key={index} variants={itemVariants} className="h-full">
                      <ServiceCard
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        gradientFrom={service.gradientFrom}
                        gradientTo={service.gradientTo}
                        className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        index={index}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* CTA Section with enhanced design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-gradient-to-br from-white to-[#F9F5FF] rounded-xl p-8 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#364797] mb-5 font-josefin">
                ¿Necesitás un servicio personalizado?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                Cada negocio es único. Si no encontrás exactamente lo que necesitás, contáctanos y desarrollaremos una
                solución a medida para tus requerimientos específicos.
              </p>
              <Button
                className="bg-[#C8A0F2] hover:bg-[#2a3875] text-white px-6 py-3 shadow-md hover:shadow-lg transition group"
                size="lg"
                asChild
              >
                <Link href="#contacto" className="flex items-center text-white">
                  Consultar servicio personalizado
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-md">
              <h4 className="text-xl font-semibold text-[#C8A0F2] mb-5 font-josefin flex items-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                Enlaces rápidos
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Consultoría empresarial", href: "#servicios" },
                  { name: "Soluciones fiscales", href: "#servicios" },
                  { name: "Contacto", href: "#contacto" },
                  { name: "Preguntas frecuentes", href: "#faq" },
                  { name: "Solicitar presupuesto", href: "#contacto" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-[#364797] transition group p-2 rounded-md hover:bg-[#F9F5FF]"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-gray-400 group-hover:text-[#364797] transition-transform group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                <Link
                  href="#servicios"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C8A0F2] hover:text-[#2a3875] group transition-colors"
                >
                  Ver todos los servicios
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
