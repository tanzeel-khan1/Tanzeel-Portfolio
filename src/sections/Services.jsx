import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Services built for clients (not resumes)."
          desc="Premium UI/UX + fast performance + clean MERN architecture—designed to generate leads and sales."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s} variants={fadeUp}>
              <Card className="flex items-start gap-3 p-6 transition hover:bg-white/7 hover:ring-white/14">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
                  <Check className="h-5 w-5 text-indigo-200" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white/90">{s}</div>
                  <div className="mt-1 text-xs leading-5 text-white/60">
                    Conversion-focused UI + production-ready build.
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

