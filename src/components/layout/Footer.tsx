import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import type { Locale } from "@/types"

interface FooterProps {
  locale: Locale
}

function withLocale(locale: Locale, pathname: string) {
  if (locale === "fr") {
    return pathname
  }

  return pathname === "/" ? "/en" : `/en${pathname}`
}

export async function Footer({ locale }: Readonly<FooterProps>) {
  const t = await getTranslations("footer")
  const nav = await getTranslations("navigation")

  return (
    <footer className="border-t border-[rgb(15_26_20_/_8%)] bg-[var(--wk-bone)] py-12">
      <Container className="space-y-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{t("products")}</p>
            <div className="space-y-2 text-sm">
              <Link href={withLocale(locale, "/products/score")}>{nav("productsItems.score")}</Link>
              <Link href={withLocale(locale, "/products/services")}>{nav("productsItems.services")}</Link>
              <Link href={withLocale(locale, "/products/insurance")}>{nav("productsItems.insurance")}</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{t("solutions")}</p>
            <div className="space-y-2 text-sm">
              <Link href={withLocale(locale, "/solutions/imf")}>{nav("solutionsItems.imf")}</Link>
              <Link href={withLocale(locale, "/solutions/banks")}>{nav("solutionsItems.banks")}</Link>
              <Link href={withLocale(locale, "/solutions/insurers")}>{nav("solutionsItems.insurers")}</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{t("company")}</p>
            <div className="space-y-2 text-sm">
              <Link href={withLocale(locale, "/company/about")}>{nav("companyItems.about")}</Link>
              <Link href={withLocale(locale, "/company/team")}>{nav("companyItems.team")}</Link>
              <Link href={withLocale(locale, "/company/newsroom")}>{nav("companyItems.newsroom")}</Link>
              <Link href={withLocale(locale, "/investors")}>{t("investors")}</Link>
              <Link href={withLocale(locale, "/contact")}>{t("contact")}</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{t("legal")}</p>
            <div className="space-y-2 text-sm">
              <Link href={withLocale(locale, "/legal/terms")}>{t("terms")}</Link>
              <Link href={withLocale(locale, "/legal/privacy")}>{t("privacy")}</Link>
              <Link href={withLocale(locale, "/compliance")}>{t("compliance")}</Link>
            </div>
          </div>
        </div>
        <div className="space-y-2 border-t border-[rgb(15_26_20_/_8%)] pt-6 text-sm text-[var(--wk-stone)]">
          <p>{t("ecosystem")}</p>
          <p>{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  )
}
