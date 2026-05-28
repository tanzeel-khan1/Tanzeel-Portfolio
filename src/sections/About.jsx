import { motion } from 'framer-motion'
import { about } from '../content/portfolio'
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
          title="Client-first MERN developer with premium UI/UX."
          desc="I build websites and apps that look high-end, feel smooth, and help you generate leads and sales."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10"
        >
          <Card className="p-7 sm:p-8">
            <p className="text-pretty text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              {about}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { k: 'Frontend', v: 'React + Tailwind' },
                { k: 'Backend', v: 'Node + Express' },
                { k: 'Database', v: 'MongoDB' },
              ].map((it) => (
                <div
                  key={it.k}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <div className="text-xs font-medium text-white/60">{it.k}</div>
                  <div className="mt-1 text-sm font-semibold text-white/90">
                    {it.v}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}

