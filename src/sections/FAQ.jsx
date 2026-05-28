import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import { faqs } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

export function FAQ() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers."
          desc="If you have a specific requirement, message me and I’ll suggest the best approach."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {faqs.map((f) => (
            <motion.div key={f.q} variants={fadeUp}>
              <Card className="h-full p-6 transition hover:bg-white/7 hover:ring-white/14">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
                    <HelpCircle className="h-5 w-5 text-indigo-200" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white/90">{f.q}</div>
                    <p className="mt-2 text-sm leading-6 text-white/70">{f.a}</p>
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

