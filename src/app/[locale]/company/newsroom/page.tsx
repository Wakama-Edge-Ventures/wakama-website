import { getTranslations, setRequestLocale } from "next-intl/server"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Card } from "@/components/primitives/Card"
import { buildMetadata } from "@/lib/seo"

function withLocale(locale: string, pathname: string) {
  return locale === "fr" ? pathname : `/en${pathname}`
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "routes.company.newsroom" })

  return buildMetadata(t("title"), t("description"))
}

export default async function CompanyNewsroomPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "routes.company.newsroom" })
  const post = await getTranslations({ locale, namespace: "newsroom.launch" })
  const common = await getTranslations({ locale, namespace: "common" })

  return (
    <section className="py-20 md:py-24 xl:py-32">
      <Container className="space-y-8">
        <div className="space-y-3">
          <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] text-[var(--wk-graphite)]">{t("title")}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--wk-stone)]">{t("description")}</p>
        </div>
        <Card className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{post("category")}</p>
          <h2 className="font-serif text-3xl font-medium tracking-[-0.02em] text-[var(--wk-graphite)]">{post("title")}</h2>
          <p className="text-[var(--wk-stone)]">{post("excerpt")}</p>
          <Link href={withLocale(locale, "/company/newsroom/2026-04-launch")} className="text-sm font-medium text-[var(--wk-green)]">
            {common("viewArticle")}
          </Link>
        </Card>
      </Container>
    </section>
  )
}
