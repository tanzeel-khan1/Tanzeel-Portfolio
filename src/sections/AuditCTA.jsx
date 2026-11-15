import { motion } from 'framer-motion'
import { ArrowRight, Check, SearchCheck } from 'lucide-react'
import { fadeUp } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const trustPoints = ['No commitment', '48h turnaround', 'Plain-English feedback']

export function AuditCTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-0">
            <div className="relative overflow-hidden rounded-2xl bg-accent p-6 text-accent-fg sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:44px_44px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-fg/10 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-fg/5 blur-3xl"
              />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent-fg/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-fg ring-1 ring-accent-fg/25">
                    <SearchCheck className="h-4 w-4" />
                    Free Website Review
                  </div>
                  <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-accent-fg sm:text-4xl sm:leading-[1.1]">
                    Is your website costing you customers?
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-accent-fg/75 sm:text-base">
                    I’ll review your website and show you what’s holding it back—design,
                    speed, mobile experience, and how easy it is for customers to take
                    action. No commitment.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {trustPoints.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-fg/75"
                      >
                        <Check className="h-3.5 w-3.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                  <Button href="#contact" variant="inverse" className="w-full lg:w-auto">
                    Request a Review <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    href="#projects"
                    variant="inverse-ghost"
                    className="w-full lg:w-auto"
                  >
                    See My Work
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
