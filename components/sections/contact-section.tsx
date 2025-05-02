"use client";

import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/section-heading";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#a17fb8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#364798]/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          badge={<span>Contacto</span>} // Ahora se pasa un JSX.Element, no un string
          title="Estamos para ayudarte"
          description="Contactanos para resolver tus dudas o solicitar una asesoría personalizada."
        />

        <div className="mt-12 flex justify-center">
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-[#a17fb8]/20 dark:border-[#a17fb8]/10 w-full md:w-4/5 lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#364798] dark:text-white mb-6 text-center">
              Información de contacto
            </h3>

            <div className="space-y-8">
              {/* Dirección */}
              <div className="flex items-start gap-6">
                <div className="bg-[#a17fb8]/20 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-[#364798] dark:text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-[#364798] dark:text-white text-lg">
                    Dirección
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Rivadavia 10190 oeste, Capital
                  </p>
                </div>
              </div>

              {/* Teléfono / WhatsApp */}
              <div className="flex items-start gap-6">
                <div className="bg-[#a17fb8]/20 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-[#364798] dark:text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-[#364798] dark:text-white text-lg">
                    Teléfono / WhatsApp
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +54 264 583 4384
                  </p>
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

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="bg-[#a17fb8]/20 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-[#364798] dark:text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-[#364798] dark:text-white text-lg">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    aura.asesoriacontable@gmail.com
                  </p>
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

              {/* Redes sociales */}
              <div className="flex items-start gap-6">
                <div className="bg-[#a17fb8]/20 p-4 rounded-full">
                  <Instagram className="h-6 w-6 text-[#364798] dark:text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-[#364798] dark:text-white text-lg">
                    Redes Sociales
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Instagram: @aura.asesoriacontable
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Facebook: Aura Asesoría Contable
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://instagram.com/aura.asesoriacontable"
                      className="bg-[#a17fb8]/20 p-3 rounded-full hover:bg-[#a17fb8]/30 transition-colors"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5 text-[#364798] dark:text-white" />
                    </a>
                    <a
                      href="https://facebook.com/AuraAsesoriaContable"
                      className="bg-[#a17fb8]/20 p-3 rounded-full hover:bg-[#a17fb8]/30 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
