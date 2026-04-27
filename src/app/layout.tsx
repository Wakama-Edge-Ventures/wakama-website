import type { Metadata } from "next"
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google"
import { headers } from "next/headers"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces"
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight"
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://wakama.farm")
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = (await headers()).get("x-next-intl-locale") ?? "fr"

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
