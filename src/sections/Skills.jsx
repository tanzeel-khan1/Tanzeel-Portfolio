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
                <Card className="h-full p-6 transition hover:bg-white/7 hover:ring-white/14">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-indigo-200" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white/90">
                        {g.title}
                      </div>
                      <div className="text-xs text-white/60">
                        Core tools I ship with
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Badge key={s} className="transition group-hover:bg-white/8">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-2xl" />
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

