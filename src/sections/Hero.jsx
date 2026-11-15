import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { profile } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { useMedia } from '../lib/useMedia'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

const highlights = ['Premium Websites', 'Custom Systems', 'Client-focused', 'Fast Delivery']

function BrowserPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="animate-float relative rounded-[26px] bg-surface p-2 shadow-lift ring-1 ring-line">
        <div className="overflow-hidden rounded-[18px] bg-surface-2 ring-1 ring-line">
          <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-surface-4 ring-1 ring-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-surface-4 ring-1 ring-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-surface-4 ring-1 ring-line" />
            <div className="ml-2 flex-1 rounded-md bg-surface-2 px-3 py-1 font-mono text-[10px] text-subtle ring-1 ring-line">
              tanzilbuilds.xyz
            </div>
          </div>

          <div className="space-y-5 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-accent" />
                <div className="space-y-1.5">
                  <div className="h-2 w-16 rounded-full bg-ink/70" />
                  <div className="h-1.5 w-10 rounded-full bg-ink/25" />
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2 w-7 rounded-full bg-ink/20" />
                <div className="h-2 w-7 rounded-full bg-ink/20" />
                <div className="h-2 w-7 rounded-full bg-ink/20" />
              </div>
            </div>

            <div className="rounded-xl bg-[linear-gradient(140deg,var(--surface),var(--surface-3))] p-4 ring-1 ring-line">
              <div className="h-2 w-16 rounded-full bg-accent/70" />
              <div className="mt-3 h-3.5 w-4/5 rounded-full bg-ink/80" />
              <div className="mt-2 h-3.5 w-3/5 rounded-full bg-ink/35" />
              <div className="mt-4 flex gap-2">
                <div className="h-7 w-20 rounded-full bg-accent" />
                <div className="h-7 w-16 rounded-full bg-surface-4 ring-1 ring-line" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-16 rounded-lg bg-surface ring-1 ring-line"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-10 hidden rounded-full bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted shadow-soft ring-1 ring-line sm:block">
        Websites
      </div>
      <div className="absolute -left-4 bottom-14 hidden rounded-full bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted shadow-soft ring-1 ring-line sm:block">
        Systems
      </div>
    </div>
  )
}

export function Hero() {
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)')

  return (
    <section id="top" className="relative overflow-hidden">
      {!reduceMotion && (
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-2 via-page to-page" />
          <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-glow blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-glow blur-3xl" />
        </div>
      )}

      <Container className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted shadow-soft ring-1 ring-line">
                <span className="relative flex h-1.5 w-1.5" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
                </span>
                Now booking new projects
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 space-y-5">
              <h1 className="text-gradient max-w-xl text-balance text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.04]">
                {profile.headline}
              </h1>
              <p className="text-balance font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted sm:text-sm">
                {profile.title}
              </p>
              <p className="mx-auto max-w-xl text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:mx-0">
                {profile.intro}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button href="#projects" variant="primary" className="w-full sm:w-auto">
                See My Work <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {highlights.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-xs font-medium text-muted ring-1 ring-line transition hover:bg-surface-3 hover:text-ink hover:ring-line-strong"
                >
                  <Check className="h-3.5 w-3.5 text-ink" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-glow blur-3xl"
            />
            <BrowserPreview />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
