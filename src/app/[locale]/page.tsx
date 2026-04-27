import { getTranslations, setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { buildMetadata } from "@/lib/seo"
import type { Locale } from "@/types"

export async function generateMetadata({
  params
}: Readonly<{
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "site" })

  return buildMetadata(t("name"), t("description"))
}

export default async function HomePage({
  params
}: Readonly<{
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "home" })

  return (
    <>
      <Hero
        locale={locale as Locale}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        primaryCta={t("primaryCta")}
        secondaryCta={t("secondaryCta")}
      />
      <Stats tag={t("statsTag")} title={t("statsTitle")} body={t("statsBody")} />
    </>
  )
}
