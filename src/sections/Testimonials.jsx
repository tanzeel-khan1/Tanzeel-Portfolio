import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say."
          desc="A premium experience: clear communication, fast delivery, and clean UI."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name + t.role} variants={fadeUp}>
              <Card className="h-full p-7 transition hover:bg-white/7 hover:ring-white/14">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white/90">{t.name}</div>
                    <div className="mt-1 text-xs text-white/60">{t.role}</div>
                  </div>
                  <Quote className="h-5 w-5 text-indigo-200/80" />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/75">“{t.quote}”</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

