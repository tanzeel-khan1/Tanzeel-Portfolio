import { motion } from 'framer-motion'
import { stats } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'

export function Stats() {
  return (
    <section aria-label="Stats" className="relative pb-14 sm:pb-20">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-hidden rounded-2xl bg-line shadow-soft ring-1 ring-line"
        >
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group bg-surface p-4 transition-colors duration-300 hover:bg-surface-2 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-subtle sm:text-[11px] sm:tracking-[0.14em]">
                    {s.label}
                  </span>
                  <span className="font-mono text-[10px] tabular-nums text-subtle/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="text-gradient mt-4 inline-block text-xl font-semibold tabular-nums tracking-[-0.03em] sm:text-4xl">
                  {s.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
