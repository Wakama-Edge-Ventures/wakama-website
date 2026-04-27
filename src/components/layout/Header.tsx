import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher"
import type { Locale, LocaleOption, NavItem } from "@/types"

interface HeaderProps {
  locale: Locale
}

function withLocale(locale: Locale, pathname: string) {
  if (locale === "fr") {
    return pathname
  }

  return pathname === "/" ? "/en" : `/en${pathname}`
}

export async function Header({ locale }: Readonly<HeaderProps>) {
  const t = await getTranslations("navigation")

  const items: NavItem[] = [
    { href: "/products/score", label: t("productsItems.score") },
    { href: "/products/services", label: t("productsItems.services") },
    { href: "/products/insurance", label: t("productsItems.insurance") },
    { href: "/solutions/imf", label: t("solutionsItems.imf") },
    { href: "/solutions/banks", label: t("solutionsItems.banks") },
    { href: "/solutions/insurers", label: t("solutionsItems.insurers") },
    { href: "/technology", label: t("technology") },
    { href: "/compliance", label: t("compliance") },
    { href: "/company/about", label: t("companyItems.about") },
    { href: "/company/team", label: t("companyItems.team") },
    { href: "/company/newsroom", label: t("companyItems.newsroom") },
    { href: "/contact", label: t("contact") }
  ]

  const localeOptions: LocaleOption[] = [
    { href: "/", label: t("locale.fr"), isActive: locale === "fr" },
    { href: "/en", label: t("locale.en"), isActive: locale === "en" }
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(15_26_20_/_8%)] bg-[rgb(251_249_244_/_92%)] backdrop-blur">
      <Container className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link href={withLocale(locale, "/")} className="font-serif text-2xl font-semibold tracking-[-0.02em]">
            Wakama
          </Link>
          <LocaleSwitcher options={localeOptions} />
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--wk-stone)]">
          {items.map((item) => (
            <Link key={item.href} href={withLocale(locale, item.href)} className="hover:text-[var(--wk-ink)]">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
