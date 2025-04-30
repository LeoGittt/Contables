"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#FFBEDD]/20 flex flex-col items-center justify-center text-center h-full">
        <div className="bg-[#C8A0F2]/20 p-4 rounded-full mb-4">
          <Check className="h-8 w-8 text-[#364797]" />
        </div>
        <h3 className="text-xl font-bold text-[#364797] mb-2">¡Mensaje enviado!</h3>
        <p className="text-gray-600 mb-6">Gracias por contactarnos. Te responderemos a la brevedad.</p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-[#364797] hover:bg-[#364797]/90">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#FFBEDD]/20"
    >
      <h3 className="text-xl font-bold text-[#364797] mb-6">Envianos un mensaje</h3>

      <div className="grid gap-4 mb-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" placeholder="Tu nombre" required className="border-[#BFDDFF] focus-visible:ring-[#C8A0F2]" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="border-[#BFDDFF] focus-visible:ring-[#C8A0F2]"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input id="phone" placeholder="Tu teléfono" className="border-[#BFDDFF] focus-visible:ring-[#C8A0F2]" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            placeholder="¿En qué podemos ayudarte?"
            required
            className="min-h-[120px] border-[#BFDDFF] focus-visible:ring-[#C8A0F2]"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#364797] to-[#C8A0F2] hover:opacity-90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  )
}
