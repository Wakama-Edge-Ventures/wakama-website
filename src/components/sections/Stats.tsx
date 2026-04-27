import { Container } from "@/components/layout/Container"
import { Card } from "@/components/primitives/Card"
import { Tag } from "@/components/primitives/Tag"

interface StatsProps {
  tag: string
  title: string
  body: string
}

export function Stats({ tag, title, body }: Readonly<StatsProps>) {
  return (
    <section id="setup" className="pb-20 md:pb-24 xl:pb-32">
      <Container>
        <Card className="grid gap-6 bg-[var(--wk-paper)] lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <Tag className="w-fit">{tag}</Tag>
          <div className="space-y-3">
            <h2 className="font-serif text-3xl font-medium tracking-[-0.02em] text-[var(--wk-graphite)]">{title}</h2>
            <p className="max-w-3xl text-base leading-7 text-[var(--wk-stone)]">{body}</p>
          </div>
        </Card>
      </Container>
    </section>
  )
}
