import { motion } from 'framer-motion'
import { Code2, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

const icons = {
  Frontend: Code2,
  Backend: Server,
  Tools: Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Frontend polish + backend reliability."
          desc="A focused toolkit for building premium websites and scalable MERN applications."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {skillGroups.map((g) => {
            const Icon = icons[g.title] ?? Code2
            return (
              <motion.div key={g.title} variants={fadeUp}>
                <Card className="h-full p-6 transition hover:bg-surface-2 hover:ring-line-strong">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-fg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {g.title}
                      </div>
                      <div className="text-xs text-subtle">
                        Core tools I ship with
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Badge key={s} className="transition group-hover:bg-surface-4">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-glow blur-2xl" />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
