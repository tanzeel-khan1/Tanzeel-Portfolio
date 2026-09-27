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
          eyebrow="How I work"
          title="A clear freelance process (no confusion)."
          desc="Simple steps, quick updates, and premium delivery—so you always know what’s happening."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {processSteps.map((s, i) => {
            const Icon = icons[i] ?? Sparkles
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <Card className="h-full p-6 transition hover:bg-surface-2 hover:ring-line-strong">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-fg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-ink">
                        {String(i + 1).padStart(2, '0')}. {s.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
