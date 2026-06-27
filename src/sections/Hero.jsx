import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
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
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0f172a] to-[#0b0f1a]" />

          {/* soft glowing blobs */}
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
      )}

      <Container className="relative pb-20 pt-14 sm:pb-24 sm:pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-3xl gap-8 text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-white/75 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4 text-indigo-300" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="text-balance text-base font-medium text-white/80 sm:text-lg">
              {profile.title}
            </p>
            <p className="mx-auto max-w-2xl text-pretty text-sm leading-6 text-white/70 sm:text-base">
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
            <div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Premium UI', 'MERN Apps', 'Fast Delivery', 'Responsive'].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-white/70 ring-1 ring-white/10"
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