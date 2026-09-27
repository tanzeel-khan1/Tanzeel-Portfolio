import { motion } from 'framer-motion'
import { stats } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'

export function Stats() {
  return (
    <section aria-label="Stats" className="relative pb-14 sm:pb-20">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <Card className="h-full p-6 transition duration-300 hover:bg-surface-2 hover:ring-line-strong">
                <div className="text-3xl font-semibold tabular-nums tracking-[-0.03em] text-ink">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {s.label}
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-glow blur-2xl" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
