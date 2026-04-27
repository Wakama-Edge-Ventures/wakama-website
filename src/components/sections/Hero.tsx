import { Container } from "@/components/layout/Container"
import { Button } from "@/components/primitives/Button"
import { Tag } from "@/components/primitives/Tag"
import type { Locale } from "@/types"

interface HeroProps {
  locale: Locale
  eyebrow: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
}

export function Hero({
  locale,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta
}: Readonly<HeroProps>) {
  const contactHref = locale === "fr" ? "/contact" : "/en/contact"

  return (
    <section className="py-20 md:py-24 xl:py-32">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] lg:items-end">
        <div className="space-y-8">
          <Tag>{eyebrow}</Tag>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-serif text-5xl font-semibold tracking-[-0.03em] text-[var(--wk-graphite)] md:text-7xl md:leading-[1.05]">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--wk-stone)] md:text-xl">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href={contactHref}>{primaryCta}</Button>
            <Button href="#setup" variant="secondary">
              {secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
