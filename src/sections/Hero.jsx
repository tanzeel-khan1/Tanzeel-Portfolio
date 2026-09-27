import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { useMedia } from '../lib/useMedia'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export function Hero() {
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)')

  return (
    <section id="top" className="relative overflow-hidden">

      {/* 🔥 LIGHTWEIGHT BACKGROUND (no three.js) */}
      {!reduceMotion && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-2 to-page" />

          {/* soft grayscale blobs */}
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-glow blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-glow blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-glow blur-3xl" />
        </div>
      )}

      <Container className="relative pb-20 pt-14 sm:pb-24 sm:pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-3xl gap-8 text-center"
        >
          {/* <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-page px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted ring-1 ring-line">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
              </span>
              {profile.location}
            </div>
          </motion.div> */}

          <motion.div variants={fadeUp} className="space-y-5">
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-6xl sm:leading-[1.05]">
              {profile.name}
            </h1>
            <p className="text-balance font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted sm:text-sm">
              {profile.title}
            </p>
            <p className="mx-auto max-w-2xl text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {profile.intro}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="#projects" variant="primary">
              View Work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="ghost">
              Get a Quote
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-surface-2 p-4 ring-1 ring-line">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Premium UI', 'MERN Apps', 'Fast Delivery', 'Responsive'].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl bg-surface px-3 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted ring-1 ring-line transition duration-300 hover:text-ink hover:ring-line-strong"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
