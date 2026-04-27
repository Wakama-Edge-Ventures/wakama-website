import { Container } from "@/components/layout/Container"
import { Card } from "@/components/primitives/Card"

interface PagePlaceholderProps {
  title: string
  description: string
  note: string
}

export function PagePlaceholder({
  title,
  description,
  note
}: Readonly<PagePlaceholderProps>) {
  return (
    <section className="py-20 md:py-24 xl:py-32">
      <Container>
        <Card className="space-y-4">
          <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] text-[var(--wk-graphite)]">{title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--wk-stone)]">{description}</p>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--wk-stone)]">{note}</p>
        </Card>
      </Container>
    </section>
  )
}
