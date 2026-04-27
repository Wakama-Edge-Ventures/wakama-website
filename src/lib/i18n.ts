import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { defineRouting } from "next-intl/routing"
import { notFound } from "next/navigation"

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed"
})

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !hasLocale(routing.locales, locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
