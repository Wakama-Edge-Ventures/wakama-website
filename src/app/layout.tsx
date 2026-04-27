import type { Metadata } from "next"
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google"
import { headers } from "next/headers"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wakama.farm"),
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = (await headers()).get("x-next-intl-locale") ?? "fr"
  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
