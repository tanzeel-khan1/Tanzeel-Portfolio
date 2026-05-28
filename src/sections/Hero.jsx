import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { useMedia } from '../lib/useMedia'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

const LazyThreeHeroBackground = lazy(() =>
  import('../components/ThreeHeroBackground').then((m) => ({
    default: m.ThreeHeroBackground,
  })),
)

export function Hero() {
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)')
  const isMobile = useMedia('(max-width: 640px)')
  const quality = reduceMotion ? 'low' : isMobile ? 'low' : 'high'

  return (
    <section id="top" className="relative">
      {reduceMotion ? null : (
        <Suspense fallback={null}>
          <LazyThreeHeroBackground quality={quality} />
        </Suspense>
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

