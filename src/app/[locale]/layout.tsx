import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { routing } from "@/lib/i18n"
import type { Locale } from "@/types"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"]
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap"
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500"],
  display: "swap"
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} min-h-screen`}>
        <Header locale={locale as Locale} />
        <main>{children}</main>
        <Footer locale={locale as Locale} />
      </div>
    </NextIntlClientProvider>
  )
}
