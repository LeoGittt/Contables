import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aura Asesoría Contable",
  description: "Transformamos tu contabilidad con claridad, calidez e innovación",
  keywords: "asesoría contable, contabilidad, impuestos, monotributo, San Juan, Argentina",
  authors: [{ name: "Aura Asesoría Contable" }],
  openGraph: {
    title: "Aura Asesoría Contable",
    description: "Transformamos tu contabilidad con claridad, calidez e innovación",
    url: "https://www.auraasesoriacontable.com",
    siteName: "Aura Asesoría Contable",
    locale: "es_AR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/clear-sans" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-clear-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
