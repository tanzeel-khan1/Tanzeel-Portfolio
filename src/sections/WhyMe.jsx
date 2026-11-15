import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare, Monitor, Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import { differentiators } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

const iconByTitle = {
  'Design that builds trust': Sparkles,
  'Built to grow': Rocket,
  'Easy to use': Monitor,
  'Clear communication': MessageSquare,
  'Reliable delivery': ShieldCheck,
}

export function WhyMe() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why work with me"
          title="Premium quality, without the agency price."
          desc="Clear communication, careful work, and delivery you can rely on—so you can focus on your business."
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
                <Card className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-soft ring-1 ring-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-subtle opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-ink">{d.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{d.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
