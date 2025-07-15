import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ishita Takkar - Data Science Student & Machine Learning Enthusiast",
  description:
    "Portfolio of Ishita Takkar, a Data Science Student, Machine Learning Enthusiast, and Research Assistant.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
