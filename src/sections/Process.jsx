import { motion } from 'framer-motion'
import { ClipboardList, Rocket, Sparkles, Wrench } from 'lucide-react'
import { processSteps } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

const icons = [ClipboardList, Sparkles, Wrench, Rocket]

export function Process() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Process"
          title="A simple path from idea to launch."
          desc="No jargon, no confusion—just clear steps, quick updates, and premium delivery."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((s, i) => {
            const Icon = icons[i] ?? Sparkles
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <Card className="relative h-full p-6">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-1 top-0 font-mono text-6xl font-semibold tracking-tighter text-ink/[0.05]"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-soft ring-1 ring-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                        Step {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-ink">
                        {s.title}
                      </div>
                    </div>
                  </div>

                  <p className="relative mt-4 text-sm leading-6 text-muted">
                    {s.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
