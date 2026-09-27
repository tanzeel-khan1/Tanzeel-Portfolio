import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
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

  const fallbackClassName = useMemo(
    () =>
      'aspect-[16/9] w-full bg-[radial-gradient(700px_circle_at_30%_30%,var(--glow),transparent_60%),radial-gradient(700px_circle_at_70%_70%,var(--glow),transparent_60%)] bg-surface-2',
    [],
  )

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {showImage ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={fallbackClassName} />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.14))] opacity-0 transition duration-500 group-hover:opacity-100" />
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Work that looks premium and sells."
          desc="A few client-style builds: clean UI, smooth motion, and mobile-first conversion-friendly layouts."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <Card className="h-full p-0">
                <ProjectMedia title={p.title} image={p.image} />


                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-ink">
                        {p.title}
                      </h3>
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
                      Live Demo <ExternalLink className="h-4 w-4" />
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
