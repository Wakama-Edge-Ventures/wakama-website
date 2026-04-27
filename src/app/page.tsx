import { getTranslations } from "next-intl/server"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { buildMetadata } from "@/lib/seo"

export async function generateMetadata() {
  const t = await getTranslations({ locale: "fr", namespace: "site" })

  return buildMetadata(t("name"), t("description"))
}

export default async function DefaultHomePage() {
  const t = await getTranslations({ locale: "fr", namespace: "home" })

  return (
    <>
      <Hero
        locale="fr"
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
