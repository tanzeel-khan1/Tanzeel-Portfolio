import { motion } from 'framer-motion'
import { ArrowRight, SearchCheck } from 'lucide-react'
import { fadeUp } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

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
            <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_30%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(900px_circle_at_70%_70%,rgba(236,72,153,0.20),transparent_60%)]" />
              <div className="relative grid items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-white/75 ring-1 ring-white/12">
                    <SearchCheck className="h-4 w-4 text-indigo-200" />
                    Free Website Audit
                  </div>
                  <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Want more leads from your website?
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
                    I’ll audit your website and share actionable improvements for design,
                    responsiveness, performance, and conversion-focused UX—no commitment.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                  <Button href="#contact" variant="primary" className="w-full lg:w-auto">
                    Request Audit <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="#projects" variant="ghost" className="w-full lg:w-auto">
                    See Results
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

