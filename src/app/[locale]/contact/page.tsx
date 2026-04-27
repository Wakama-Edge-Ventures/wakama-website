import { getTranslations, setRequestLocale } from "next-intl/server"
import { ContactForm } from "@/components/forms/ContactForm"
import { Container } from "@/components/layout/Container"
import { Card } from "@/components/primitives/Card"
import { buildMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "routes.contact" })

  return buildMetadata(t("title"), t("description"))
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "routes.contact" })
  const form = await getTranslations({ locale, namespace: "contactForm" })

  return (
    <section className="py-20 md:py-24 xl:py-32">
      <Container>
        <Card className="space-y-6">
          <div className="space-y-3">
            <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] text-[var(--wk-graphite)]">{t("title")}</h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--wk-stone)]">{t("description")}</p>
          </div>
          <ContactForm
            labels={{
              name: form("name"),
              email: form("email"),
              organization: form("organization"),
              message: form("message"),
              submit: form("submit")
            }}
          />
        </Card>
      </Container>
    </section>
  )
}
