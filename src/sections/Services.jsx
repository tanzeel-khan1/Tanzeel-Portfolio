import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
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
          title="Websites and systems that move your business forward."
          desc="Pick what you need now—a premium web presence, a custom system, or both."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div key={s} variants={fadeUp} className="h-full">
              <a href="#contact" className="block h-full rounded-2xl">
                <Card className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-fg shadow-soft ring-1 ring-line">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-subtle/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-semibold text-ink">{s}</div>
                    <div className="mt-1 text-xs leading-5 text-subtle">
                      Built to make your business work better.
                    </div>
                  </div>

                  <div className="mt-auto flex items-center gap-1 pt-5 text-xs font-medium text-subtle transition group-hover:text-ink">
                    Start a project
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
