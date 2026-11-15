import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { packages } from '../content/portfolio'
import { cn } from '../lib/cn'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

const cardBase =
  'group relative isolate flex h-full flex-col overflow-hidden rounded-2xl p-7 ring-1 ' +
  'transition duration-300 ease-out hover:-translate-y-1'

export function Packages() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Packages"
          title="Clear starting points for every goal."
          desc="Whether you’re building your online presence or simplifying your operations, there’s a fit."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-3"
        >
          {packages.map((p) => {
            const hi = p.highlight
            return (
              <motion.div key={p.title} variants={fadeUp} className="h-full">
                <div
                  className={cn(
                    cardBase,
                    hi
                      ? 'bg-accent text-accent-fg shadow-lift ring-accent'
                      : 'bg-surface shadow-soft ring-line hover:bg-surface-2 hover:shadow-lift hover:ring-line-strong',
                  )}
                >
                  {hi ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-fg/10 blur-2xl"
                    />
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={cn(
                          'text-sm font-semibold',
                          hi ? 'text-accent-fg' : 'text-ink',
                        )}
                      >
                        {p.title}
                      </div>
                      <div
                        className={cn(
                          'mt-2 text-3xl font-semibold tabular-nums tracking-[-0.03em]',
                          hi ? 'text-accent-fg' : 'text-ink',
                        )}
                      >
                        {p.price}
                      </div>
                    </div>

                    {hi ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-fg px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
                        <Star className="h-3.5 w-3.5" />
                        Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="relative mt-6 grid gap-3">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm">
                        <span
                          className={cn(
                            'inline-flex h-6 w-6 items-center justify-center rounded-lg ring-1',
                            hi
                              ? 'bg-accent-fg/10 text-accent-fg ring-accent-fg/20'
                              : 'bg-surface-3 text-ink ring-line',
                          )}
                        >
                          <Check className="h-4 w-4" />
                        </span>
                        <span
                          className={cn(
                            'min-w-0',
                            hi ? 'text-accent-fg/80' : 'text-muted',
                          )}
                        >
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-auto pt-7">
                    <Button
                      href="#contact"
                      variant={hi ? 'inverse' : 'ghost'}
                      className="w-full"
                    >
                      Start a Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
