import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
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
          eyebrow="Client Results"
          title="What business owners say."
          desc="Real feedback from businesses that wanted more customers or smoother operations."
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
              <Card className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current text-ink" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-subtle/60" />
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-muted">
                  “{t.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg">
                    {t.name.slice(0, 1)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">{t.name}</div>
                    <div className="text-xs text-subtle">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
