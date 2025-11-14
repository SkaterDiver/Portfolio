import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://philipszymborski.com'),
  title: "Philip Szymborski | Nanotechnology Engineering Portfolio",
  description: "First-year Nanotechnology Engineering student at University of Waterloo with hands-on experience in composite manufacturing, CAD design, and web development. Seeking co-op for Spring/Summer 2026.",
  keywords: ["Nanotechnology Engineering", "University of Waterloo", "Co-op", "CAD", "Manufacturing", "Composites", "Web Development", "React"],
  authors: [{ name: "Philip Szymborski" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://philipszymborski.com",
    siteName: "Philip Szymborski Portfolio",
    title: "Philip Szymborski | Nanotechnology Engineering Portfolio",
    description: "First-year Nanotechnology Engineering student at University of Waterloo with hands-on experience in composite manufacturing, CAD design, and web development. Seeking co-op for Spring/Summer 2026.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Philip Szymborski - Nanotechnology Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip Szymborski | Nanotechnology Engineering Portfolio",
    description: "First-year Nanotechnology Engineering student at UWaterloo. Seeking co-op for Spring/Summer 2026.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/icon-dark-32x32.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

