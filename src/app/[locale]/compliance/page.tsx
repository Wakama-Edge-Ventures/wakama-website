import { getTranslations, setRequestLocale } from "next-intl/server"
import { PagePlaceholder } from "@/components/sections/PagePlaceholder"
import { buildMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "routes.compliance" })

  return buildMetadata(t("title"), t("description"))
}

export default async function CompliancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "routes.compliance" })
  const common = await getTranslations({ locale, namespace: "common" })

  return <PagePlaceholder title={t("title")} description={t("description")} note={common("comingSoon")} />
}
