"use client";

import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui-custom/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
} from "lucide-react";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const services = {
    contable: {
      title: "Contable y Financiera",
      items: [
        {
          title: "Contabilidad general",
          description: "Registración de operaciones y gestión contable integral",
          icon: BarChart3,
          gradient: "from-purple-600 to-indigo-700",
        },
        {
          title: "Estados contables",
          description: "Balances, estado de resultados y análisis financiero",
          icon: LineChart,
          gradient: "from-blue-600 to-cyan-600",
        },
        {
          title: "Análisis financiero",
          description: "Liquidez, endeudamiento y rentabilidad",
          icon: Calculator,
          gradient: "from-emerald-600 to-teal-600",
        },
        {
          title: "Auditoría interna",
          description: "Control de gestión y procesos internos",
          icon: Search,
          gradient: "from-amber-600 to-orange-600",
        },
        {
          title: "Sistemas de costos",
          description: "Diseño e implementación de modelos de costos",
          icon: CreditCard,
          gradient: "from-rose-600 to-pink-600",
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
          gradient: "from-fuchsia-600 to-purple-700",
        },
        {
          title: "Responsable Inscripto",
          description: "Inscripciones en ARCA y declaraciones juradas",
          icon: ClipboardList,
          gradient: "from-violet-600 to-indigo-700",
        },
        {
          title: "Regímenes de información",
          description: "CITI, SIRADIG, compras y ventas",
          icon: FileText,
          gradient: "from-sky-600 to-blue-700",
        },
        {
          title: "Fiscalizaciones",
          description: "Asistencia en requerimientos de ARCA",
          icon: Scale,
          gradient: "from-indigo-600 to-blue-700",
        },
        {
          title: "Moratorias",
          description: "Regularización de deuda y planes de pago",
          icon: Clock,
          gradient: "from-cyan-600 to-blue-600",
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
          gradient: "from-blue-700 to-indigo-800",
        },
        {
          title: "Actas y libros",
          description: "Redacción de actas societarias y documentación legal",
          icon: BookOpen,
          gradient: "from-purple-700 to-fuchsia-700",
        },
        {
          title: "Modificaciones estatutarias",
          description: "Cambios en la estructura societaria",
          icon: Pencil,
          gradient: "from-cyan-700 to-blue-700",
        },
        {
          title: "Disolución",
          description: "Procesos de liquidación de sociedades",
          icon: Trash2,
          gradient: "from-emerald-700 to-teal-700",
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
          gradient: "from-green-600 to-emerald-700",
        },
        {
          title: "Liquidación de sueldos",
          description: "Cálculo de haberes y cargas sociales (F931)",
          icon: Briefcase,
          gradient: "from-lime-600 to-green-700",
        },
        {
          title: "Convenios colectivos",
          description: "Asesoramiento en normativa laboral",
          icon: Handshake,
          gradient: "from-yellow-600 to-amber-700",
        },
        {
          title: "Inspecciones laborales",
          description: "Asistencia ante requerimientos",
          icon: Microscope,
          gradient: "from-orange-600 to-red-700",
        },
      ],
    },
    tramites: {
      title: "Trámites",
      items: [
        {
          title: "CUIT/CUIL",
          description: "Tramitación de identificación tributaria",
          icon: BadgeInfo,
          gradient: "from-blue-800 to-indigo-900",
        },
        {
          title: "Clave fiscal",
          description: "Gestión y blanqueo de acceso digital",
          icon: Key,
          gradient: "from-teal-700 to-emerald-800",
        },
        {
          title: "Habilitaciones",
          description: "Municipales y de ARCA (factureros)",
          icon: CheckCircle,
          gradient: "from-purple-800 to-violet-900",
        },
        {
          title: "Certificados",
          description: "Libre deuda, ingresos y supervivencia",
          icon: FileText,
          gradient: "from-pink-700 to-rose-800",
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
          gradient: "from-indigo-700 to-blue-800",
        },
        {
          title: "Viabilidad de negocios",
          description: "Análisis de proyectos e inversiones",
          icon: Lightbulb,
          gradient: "from-cyan-700 to-sky-800",
        },
        {
          title: "Asesoramiento PYMES",
          description: "Soluciones para pequeñas empresas",
          icon: Building,
          gradient: "from-emerald-700 to-teal-800",
        },
        {
          title: "Capacitaciones",
          description: "Cursos en contabilidad e impuestos",
          icon: GraduationCap,
          gradient: "from-amber-700 to-orange-800",
        },
      ],
    },
  };

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-24 md:py-32 bg-white relative overflow-hidden "
    >
      {/* Elementos decorativos
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-[#a17fb8]/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#364798]/10 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#364798]/10 to-[#a17fb8]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div> */}

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          badge="Servicios Profesionales"
          title="Soluciones contables integrales"
          description="Ofrecemos servicios especializados para cada necesidad de tu negocio, con la calidad y profesionalismo que nos caracteriza."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <Tabs defaultValue="contable" className="w-full">
            <div className="relative pb-4">
              <div className="absolute -inset-x-4 sm:-inset-x-6 -bottom-2 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              <div className="relative w-full overflow-x-auto">
                <TabsList className="flex py-3 gap-3 bg-transparent font-josefin-sans justify-start overflow-x-auto overflow-y-hidden flex-nowrap scroll-smooth w-max px-4 sm:w-full sm:justify-center">
                  {Object.entries(services).map(([key, { title, items }]) => {
                    if (!title || !items) return null;

                    return (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="data-[state=active]:bg-[#364797] data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 whitespace-nowrap flex-shrink-0 h-full min-w-max"
                      >
                        {title}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>
            </div>

            <div className="mt-10">
              {Object.entries(services).map(([key, { items }]) => {
                if (!items) return null;

                return (
                  <TabsContent key={key} value={key} className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {items.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="h-full"
                        >
                          <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            gradient={service.gradient}
                            className="h-full"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-xl p-8 sm:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto y CTA */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#364797] to-[#a17fb8] mb-5 font-josefin">
                ¿Necesitás un servicio personalizado?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Cada negocio es único. Si no encontrás exactamente lo que
                necesitás, contáctanos y desarrollaremos una solución a medida
                para tus requerimientos específicos.
              </p>

              <Button
                className="bg-[#364797] hover:bg-[#2a3875] text-white px-6 py-3 shadow-md hover:shadow-lg transition-transform duration-300 group"
                size="lg"
                asChild
              >
                <Link href="#contacto" className="flex items-center">
                  Consultar servicio personalizado
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Tarjeta de enlaces rápidos */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-3 font-josefin">
                <span className="text-[#364797]">Enlaces rápidos</span>
              </h4>

              <ul className="space-y-4">
                {[
                  { name: "Consultoría empresarial", href: "#servicios" },
                  { name: "Soluciones fiscales", href: "#servicios" },
                  { name: "Contacto", href: "#contacto" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-[#364797] transition-all duration-300 group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-gray-400 group-hover:text-[#364797] transform transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="servicios"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#364797] hover:text-[#2a3875] transition-colors duration-200"
                >
                  Ver todos los servicios
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}