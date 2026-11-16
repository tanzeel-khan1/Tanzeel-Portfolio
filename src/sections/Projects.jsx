import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

function ProjectMedia({ title, image }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(image) && !failed

  return (
    <div className="relative m-2 mb-0 overflow-hidden rounded-xl bg-surface-2 ring-1 ring-line">
      {showImage ? (
        <>
          <div className="aspect-[16/9] w-full">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full scale-110 object-cover blur-xl opacity-50"
            />
          </div>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain"
            onError={() => setFailed(true)}
          />
        </>
      ) : (
        <div className="aspect-[16/9] w-full bg-[radial-gradient(700px_circle_at_30%_30%,var(--glow),transparent_60%),radial-gradient(700px_circle_at_70%_70%,var(--glow),transparent_60%)] bg-surface-2" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0)_58%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-black">
          View project
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Work that pays for itself."
          desc="A look at websites and systems built to help businesses look credible, win clients, and work smarter."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp}>
              <Card className="h-full p-0">
                <ProjectMedia title={p.title} image={p.image} />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] tabular-nums text-subtle/60">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">
                          {p.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      className="w-full sm:w-auto"
                    >
                      View Site <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
