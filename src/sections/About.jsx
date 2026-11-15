import { motion } from 'framer-motion'
import { about, profile } from '../content/portfolio'
import { fadeUp } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A premium developer focused on your growth."
          desc="I build websites that bring in customers and systems that make your business run smoother."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10"
        >
          <Card className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[210px_1fr] lg:gap-12">
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-accent text-3xl font-semibold tracking-tight text-accent-fg shadow-lift ring-1 ring-line">
                  TB
                </div>
                <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-[10px] font-medium text-muted shadow-soft ring-1 ring-line">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden />
                  Available
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{profile.name}</div>
                <div className="mt-1 text-xs text-subtle">Developer</div>
              </div>
            </div>

            <div>
              <p className="text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {about}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: 'Websites', v: 'Built to convert' },
                  { k: 'Systems', v: 'Built to simplify' },
                  { k: 'Support', v: 'After launch' },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="rounded-xl bg-surface-2 p-4 ring-1 ring-line transition duration-300 hover:bg-surface-3 hover:ring-line-strong"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                      {it.k}
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-ink">
                      {it.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
