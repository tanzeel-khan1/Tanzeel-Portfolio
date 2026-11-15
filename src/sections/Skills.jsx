import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, ShieldCheck, Workflow } from 'lucide-react'
import { skillGroups } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

const icons = {
  Websites: Globe,
  Systems: Workflow,
  Reliability: ShieldCheck,
}

export function Skills() {
  return (
    <section id="capabilities" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Websites that win clients. Systems that save time."
          desc="Everything I build is designed to help you get more customers or make daily work easier."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {skillGroups.map((g, i) => {
            const Icon = icons[g.title] ?? Globe
            return (
              <motion.div key={g.title} variants={fadeUp}>
                <Card className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-soft ring-1 ring-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] tabular-nums text-subtle/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-semibold text-ink">{g.title}</div>
                    <div className="text-xs text-subtle">Focused on results</div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <Badge key={s} className="transition group-hover:bg-surface-4">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-xs font-medium text-subtle opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">
                    Built with intent
                    <ArrowUpRight className="h-3.5 w-3.5" />
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
