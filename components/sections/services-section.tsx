"use client"

import { useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useInView } from "framer-motion"
import { ServiceCard } from "@/components/ui-custom/service-card"
import { SectionHeading } from "@/components/ui-custom/section-heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  const services = {
    contabilidad: [
      {
        title: "Contabilidad general",
        description: "Registros contables, libros y balances para tu negocio",
        icon: "📊",
      },
      {
        title: "Estados contables",
        description: "Preparación y análisis de estados financieros",
        icon: "📈",
      },
      {
        title: "Análisis de rentabilidad",
        description: "Evaluación de liquidez y rendimiento financiero",
        icon: "💰",
      },
      {
        title: "Control de gestión",
        description: "Auditoría interna y procesos de control",
        icon: "🔍",
      },
    ],
    impositiva: [
      {
        title: "Monotributo",
        description: "Gestión y asesoría para monotributistas",
        icon: "💸",
      },
      {
        title: "Responsable inscripto",
        description: "Asesoramiento integral para responsables inscriptos",
        icon: "📝",
      },
      {
        title: "Declaraciones juradas",
        description: "Preparación y presentación de DDJJ",
        icon: "📋",
      },
      {
        title: "Facturación electrónica",
        description: "Implementación y gestión de facturación",
        icon: "🧾",
      },
    ],
    societaria: [
      {
        title: "Constitución de sociedades",
        description: "Formación y registro de sociedades comerciales",
        icon: "📑",
      },
      {
        title: "Actas y libros",
        description: "Gestión de documentación societaria",
        icon: "📚",
      },
      {
        title: "Estatutos",
        description: "Redacción y modificación de estatutos",
        icon: "📜",
      },
      {
        title: "Inscripciones y disoluciones",
        description: "Trámites de inscripción y cierre de sociedades",
        icon: "⚖️",
      },
    ],
    laboral: [
      {
        title: "Alta/baja empleados",
        description: "Gestión de altas y bajas de personal",
        icon: "👥",
      },
      {
        title: "Liquidación de sueldos",
        description: "Cálculo y procesamiento de nóminas",
        icon: "💼",
      },
      {
        title: "F931",
        description: "Preparación y presentación de formularios",
        icon: "📄",
      },
      {
        title: "Asesoramiento sindical",
        description: "Consultoría en normativa laboral y sindical",
        icon: "🤝",
      },
    ],
    tramites: [
      {
        title: "CUIT y clave fiscal",
        description: "Gestión de identificación tributaria",
        icon: "🏛️",
      },
      {
        title: "Habilitaciones",
        description: "Trámites de habilitación comercial",
        icon: "✅",
      },
      {
        title: "Certificados",
        description: "Obtención de certificados especiales",
        icon: "📃",
      },
      {
        title: "UIF y regímenes especiales",
        description: "Cumplimiento normativo especializado",
        icon: "🔒",
      },
    ],
    consultoria: [
      {
        title: "Planificación impositiva",
        description: "Estrategias para optimización fiscal",
        icon: "📈",
      },
      {
        title: "Presupuestos",
        description: "Elaboración de presupuestos y proyecciones",
        icon: "💹",
      },
      {
        title: "Asesoría a pymes",
        description: "Consultoría especializada para pequeñas empresas",
        icon: "🏢",
      },
      {
        title: "Capacitaciones",
        description: "Formación en temas contables y fiscales",
        icon: "🎓",
      },
    ],
  }

  return (
    <section ref={sectionRef} id="servicios" className="py-20 md:py-28 bg-[#f8f9fc] relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge="Nuestros Servicios"
          title="Soluciones contables integrales"
          description="Ofrecemos un acompañamiento completo para tu negocio, con servicios adaptados a tus necesidades específicas."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Tabs defaultValue="contabilidad" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-[#a17fb8]/10 p-1 rounded-lg mb-8">
              <TabsTrigger
                value="contabilidad"
                className="data-[state=active]:bg-white data-[state=active]:text-[#364798]"
              >
                Contabilidad
              </TabsTrigger>
              <TabsTrigger
                value="impositiva"
                className="data-[state=active]:bg-white data-[state=active]:text-[#364798]"
              >
                Impositiva
              </TabsTrigger>
              <TabsTrigger
                value="societaria"
                className="data-[state=active]:bg-white data-[state=active]:text-[#364798]"
              >
                Societaria
              </TabsTrigger>
              <TabsTrigger value="laboral" className="data-[state=active]:bg-white data-[state=active]:text-[#364798]">
                Laboral
              </TabsTrigger>
              <TabsTrigger value="tramites" className="data-[state=active]:bg-white data-[state=active]:text-[#364798]">
                Trámites
              </TabsTrigger>
              <TabsTrigger
                value="consultoria"
                className="data-[state=active]:bg-white data-[state=active]:text-[#364798]"
              >
                Consultoría
              </TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, serviceList]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {serviceList.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-[#a17fb8]/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#364798] mb-4">¿No encontrás lo que buscás?</h3>
              <p className="text-gray-600 mb-6">
                Ofrecemos soluciones personalizadas para cada cliente. Si no encontrás el servicio que necesitás,
                contactanos y diseñaremos una propuesta a medida para tu negocio.
              </p>
              <Button className="bg-[#364798] hover:bg-[#364798]/90 text-white">
                <Link href="#contacto">Solicitar servicio personalizado</Link>
              </Button>
            </div>
            <div className="bg-[#f8f9fc] p-6 rounded-xl border border-[#a17fb8]/10">
              <h4 className="text-lg font-medium text-[#364798] mb-4">Servicios más solicitados</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="bg-[#a17fb8]/10 p-1 rounded-full">
                    <span className="text-sm">🔥</span>
                  </div>
                  <span className="text-gray-600">Gestión integral de monotributo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-[#a17fb8]/10 p-1 rounded-full">
                    <span className="text-sm">🔥</span>
                  </div>
                  <span className="text-gray-600">Liquidación de impuestos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-[#a17fb8]/10 p-1 rounded-full">
                    <span className="text-sm">🔥</span>
                  </div>
                  <span className="text-gray-600">Constitución de SAS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-[#a17fb8]/10 p-1 rounded-full">
                    <span className="text-sm">🔥</span>
                  </div>
                  <span className="text-gray-600">Asesoría para emprendedores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
