"use client"

import { useRef } from "react"
import { MapPin, Phone, Mail, Instagram, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { ContactForm } from "@/components/ui-custom/contact-form"
import { SectionHeading } from "@/components/ui-custom/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  return (
    <section ref={sectionRef} id="contacto" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#a17fb8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#364798]/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge="Contacto"
          title="Estamos para ayudarte"
          description="Contactanos para resolver tus dudas o solicitar una asesoría personalizada."
        />

        <div className="mt-12">
          <Tabs defaultValue="contacto" className="w-full">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto bg-[#a17fb8]/10 dark:bg-[#a17fb8]/20 p-1 rounded-lg mb-8">
              <TabsTrigger
                value="contacto"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-[#364798] dark:data-[state=active]:text-white"
              >
                Contacto
              </TabsTrigger>
              <TabsTrigger
                value="agendar"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-[#364798] dark:data-[state=active]:text-white"
              >
                Agendar Cita
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacto" className="mt-0">
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-[#a17fb8]/20 dark:border-[#a17fb8]/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-[#364798] dark:text-white mb-6">Información de contacto</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#a17fb8]/20 p-3 rounded-full mt-1">
                        <MapPin className="h-5 w-5 text-[#364798] dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#364798] dark:text-white text-lg">Dirección</h4>
                        <p className="text-gray-600 dark:text-gray-300">Rivadavia 10190 oeste, Capital</p>
                        <div className="mt-2 h-40 w-full rounded-lg overflow-hidden border border-[#a17fb8]/20 dark:border-[#a17fb8]/10">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.8982901565584!2d-68.5897!3d-31.5375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMyJzE1LjAiUyA2OMKwMzUnMjIuOSJX!5e0!3m2!1ses!2sar!4v1651234567890!5m2!1ses!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Aura Asesoría Contable"
                          ></iframe>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#a17fb8]/20 p-3 rounded-full mt-1">
                        <Phone className="h-5 w-5 text-[#364798] dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#364798] dark:text-white text-lg">Teléfono / WhatsApp</h4>
                        <p className="text-gray-600 dark:text-gray-300">+54 264 583 4384</p>
                        <a
                          href="https://wa.me/5492645834384"
                          className="inline-flex items-center gap-1 text-sm text-[#364798] dark:text-[#a17fb8] hover:text-[#a17fb8] dark:hover:text-[#a17fb8]/80 mt-1 transition-colors"
                        >
                          <span>Enviar mensaje</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#a17fb8]/20 p-3 rounded-full mt-1">
                        <Mail className="h-5 w-5 text-[#364798] dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#364798] dark:text-white text-lg">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">aura.asesoriacontable@gmail.com</p>
                        <a
                          href="mailto:aura.asesoriacontable@gmail.com"
                          className="inline-flex items-center gap-1 text-sm text-[#364798] dark:text-[#a17fb8] hover:text-[#a17fb8] dark:hover:text-[#a17fb8]/80 mt-1 transition-colors"
                        >
                          <span>Enviar email</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#a17fb8]/20 p-3 rounded-full mt-1">
                        <Instagram className="h-5 w-5 text-[#364798] dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#364798] dark:text-white text-lg">Redes Sociales</h4>
                        <p className="text-gray-600 dark:text-gray-300">Instagram: @aura.asesoriacontable</p>
                        <p className="text-gray-600 dark:text-gray-300">Facebook: Aura Asesoría Contable</p>
                        <div className="flex gap-3 mt-2">
                          <a
                            href="https://instagram.com/aura.asesoriacontable"
                            className="bg-[#a17fb8]/20 p-2 rounded-full hover:bg-[#a17fb8]/30 transition-colors"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="h-4 w-4 text-[#364798] dark:text-white" />
                          </a>
                          <a
                            href="https://facebook.com/AuraAsesoriaContable"
                            className="bg-[#a17fb8]/20 p-2 rounded-full hover:bg-[#a17fb8]/30 transition-colors"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-[#364798] dark:text-white"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="agendar" className="mt-0">
              <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-[#a17fb8]/20 dark:border-[#a17fb8]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#a17fb8]/20 p-3 rounded-full">
                    <Calendar className="h-5 w-5 text-[#364798] dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#364798] dark:text-white text-lg">Agenda una cita</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Selecciona el día y horario que prefieras para tu consulta
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-[#364798]/5 dark:bg-[#a17fb8]/10 p-4 rounded-lg">
                      <h4 className="font-medium text-[#364798] dark:text-white mb-2">Tipos de consulta</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#a17fb8]"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Asesoría inicial (30 min)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#364798]"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Consulta contable (45 min)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#a17fb8]/60"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Planificación fiscal (60 min)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-[#364798] dark:text-white">
                        Selecciona el tipo de consulta
                      </label>
                      <select className="w-full px-3 py-2 text-sm border border-[#a17fb8]/30 dark:border-[#a17fb8]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a17fb8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                        <option value="inicial">Asesoría inicial (30 min)</option>
                        <option value="contable">Consulta contable (45 min)</option>
                        <option value="fiscal">Planificación fiscal (60 min)</option>
                      </select>

                      <label className="block text-sm font-medium text-[#364798] dark:text-white">
                        Modalidad de consulta
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="modalidad" className="text-[#a17fb8]" defaultChecked />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Presencial</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="modalidad" className="text-[#a17fb8]" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Virtual</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-[#364798] dark:text-white">
                      Selecciona una fecha
                    </label>
                    <div className="bg-white dark:bg-gray-800 border border-[#a17fb8]/30 dark:border-[#a17fb8]/20 rounded-md p-4">
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-[#364798] dark:text-white mb-2">
                        <div>Lu</div>
                        <div>Ma</div>
                        <div>Mi</div>
                        <div>Ju</div>
                        <div>Vi</div>
                        <div>Sa</div>
                        <div>Do</div>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 31 }, (_, i) => (
                          <button
                            key={i}
                            className={`h-8 w-8 rounded-full text-sm flex items-center justify-center ${
                              i === 14
                                ? "bg-[#a17fb8] text-white"
                                : "hover:bg-[#a17fb8]/20 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    <label className="block text-sm font-medium text-[#364798] dark:text-white">
                      Horarios disponibles
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["9:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((time, i) => (
                        <button
                          key={i}
                          className={`py-2 px-3 text-sm rounded-md ${
                            i === 2
                              ? "bg-[#a17fb8] text-white"
                              : "bg-[#a17fb8]/10 hover:bg-[#a17fb8]/20 text-[#364798] dark:text-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <button className="w-full bg-[#364798] hover:bg-[#364798]/90 dark:bg-[#a17fb8] dark:hover:bg-[#a17fb8]/90 text-white py-3 rounded-md font-medium mt-4">
                      Confirmar cita
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
