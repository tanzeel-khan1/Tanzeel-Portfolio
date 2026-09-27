import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { packages } from '../content/portfolio'
import { cn } from '../lib/cn'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

export function Packages() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Packages"
          title="Simple pricing to start (custom for bigger builds)."
          desc="Pick a starting point—final quote depends on pages/features, integrations, and timeline."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-3"
        >
          {packages.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <Card
                className={cn(
                  'h-full p-7 transition hover:bg-surface-2 hover:ring-line-strong',
                  p.highlight ? 'border-2 border-accent' : '',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-ink">{p.title}</div>
                    <div className="mt-2 text-3xl font-semibold tabular-nums tracking-[-0.03em] text-ink">
                      {p.price}
                    </div>
                  </div>
                  {p.highlight ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-fg">
                      <Star className="h-4 w-4" />
                      Most popular
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 grid gap-3">
                  {p.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-muted">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-surface-3 text-ink ring-1 ring-line">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">{b}</span>
                    </div>
                  ))}
                </div>

                <Button href="#contact" variant={p.highlight ? 'primary' : 'ghost'} className="mt-7 w-full">
                  Get a Quote
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
