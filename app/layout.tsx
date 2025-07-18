import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marmolinas Granillos Importadores - Cuarzo, Granito y Mármol en Ecuador",
  description:
    "Especialistas en venta e instalación de cuarzo, granito y mármol nacional e importado. Desde Loja para todo Ecuador. Calidad inigualable al precio ideal.",
  keywords: "cuarzo, granito, mármol, Loja, Ecuador, instalación, venta, importadores",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <ChatWidget />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
