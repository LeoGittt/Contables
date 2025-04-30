"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#a17fb8]/20 dark:border-[#a17fb8]/10 flex flex-col items-center justify-center text-center h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#a17fb8]/20 dark:bg-[#a17fb8]/30 p-4 rounded-full mb-4">
          <Check className="h-8 w-8 text-[#364798] dark:text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#364798] dark:text-white mb-2">¡Mensaje enviado!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-[#364798] hover:bg-[#364798]/90 text-white dark:bg-[#a17fb8] dark:hover:bg-[#a17fb8]/90"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-[#a17fb8]/20 dark:border-[#a17fb8]/10 h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold text-[#364798] dark:text-white mb-6">Envianos un mensaje</h3>

      <div className="grid gap-5 mb-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-[#364798] dark:text-white">
            Nombre
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="border-[#a17fb8]/30 dark:border-[#a17fb8]/20 focus-visible:ring-[#a17fb8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-[#364798] dark:text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="tu@email.com"
            required
            className="border-[#a17fb8]/30 dark:border-[#a17fb8]/20 focus-visible:ring-[#a17fb8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-[#364798] dark:text-white">
            Teléfono (opcional)
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu teléfono"
            className="border-[#a17fb8]/30 dark:border-[#a17fb8]/20 focus-visible:ring-[#a17fb8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject" className="text-[#364798] dark:text-white">
            Asunto
          </Label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-[#a17fb8]/30 dark:border-[#a17fb8]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a17fb8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          >
            <option value="">Selecciona un asunto</option>
            <option value="consulta">Consulta general</option>
            <option value="presupuesto">Solicitud de presupuesto</option>
            <option value="monotributo">Consulta sobre monotributo</option>
            <option value="impuestos">Consulta sobre impuestos</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="text-[#364798] dark:text-white">
            Mensaje
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            required
            className="min-h-[120px] border-[#a17fb8]/30 dark:border-[#a17fb8]/20 focus-visible:ring-[#a17fb8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#364798] hover:bg-[#364798]/90 text-white dark:bg-[#a17fb8] dark:hover:bg-[#a17fb8]/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </motion.form>
  )
}
