import { motion } from 'framer-motion'
import { ArrowUpRight, Check, TrendingUp, Workflow } from 'lucide-react'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const paths = [
  {
    Icon: TrendingUp,
    eyebrow: 'Need a website?',
    title: 'Grow your business',
    copy: 'A premium website that makes your brand look credible and turns visitors into real enquiries and sales.',
    points: [
      'More enquiries and customers',
      'A stronger first impression',
      'Built to turn visitors into buyers',
    ],
  },
  {
    Icon: Workflow,
    eyebrow: 'Need a system?',
    title: 'Make work easier',
    copy: 'A custom system that automates repetitive tasks, keeps everything organised, and frees up your team’s time.',
    points: [
      'Less manual work every week',
      'Fewer mistakes and missed tasks',
      'Everything in one place',
    ],
  },
]

export function Outcomes() {
  return (
    <section aria-label="How I help" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Two ways I can help"
          title="Grow your business. Simplify your work."
          desc="Whether you need more customers or a smoother way to run things, you get a premium build—without the technical headaches."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-2"
        >
          {paths.map(({ Icon, eyebrow, title, copy, points }) => (
            <motion.div key={title} variants={fadeUp}>
              <Card className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-soft ring-1 ring-line">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle ring-1 ring-line">
                    {eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>

                <div className="mt-6 grid gap-2.5">
                  {points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-3 text-ink ring-1 ring-line">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {pt}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Button href="#contact" variant="ghost" className="w-full">
                    Start a Project <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
