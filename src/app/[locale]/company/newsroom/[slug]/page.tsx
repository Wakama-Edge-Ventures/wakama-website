import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/Container"
import { Card } from "@/components/primitives/Card"
import { buildMetadata } from "@/lib/seo"

const validSlugs = ["2026-04-launch"]

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!validSlugs.includes(slug)) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: "newsroom.launch" })

  return buildMetadata(t("title"), t("excerpt"))
}

export default async function NewsroomArticlePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!validSlugs.includes(slug)) {
    notFound()
  }

  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "newsroom.launch" })

  return (
    <section className="py-20 md:py-24 xl:py-32">
      <Container>
        <Card className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{t("category")}</p>
          <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] text-[var(--wk-graphite)]">{t("title")}</h1>
          <p className="text-sm text-[var(--wk-stone)]">{t("date")}</p>
          <p className="max-w-3xl text-lg leading-8 text-[var(--wk-stone)]">{t("excerpt")}</p>
        </Card>
      </Container>
    </section>
  )
}
