import { motion } from 'framer-motion'
import { MessageSquare, Monitor, Rocket, Sparkles, Zap } from 'lucide-react'
import { differentiators } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

const iconByTitle = {
  'Clean UI': Sparkles,
  'Responsive Design': Monitor,
  'Fast Performance': Zap,
  'Professional Communication': MessageSquare,
  'Modern UX': Rocket,
}

export function WhyMe() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why work with me"
          title="Premium results without the agency price."
          desc="Clear communication, clean UI, and fast delivery—so you can launch confidently and look high-end."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentiators.map((d) => {
            const Icon = iconByTitle[d.title] ?? Sparkles
            return (
              <motion.div key={d.title} variants={fadeUp}>
                <Card className="h-full p-6 transition hover:bg-surface-2 hover:ring-line-strong">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-fg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold text-ink">{d.title}</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {d.description}
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
