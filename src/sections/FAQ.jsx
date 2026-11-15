import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../content/portfolio'
import { cn } from '../lib/cn'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Good to know."
          desc="Have a question before we start? Here are the answers that matter."
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={cn(
                  'overflow-hidden rounded-2xl bg-surface ring-1 transition duration-300',
                  isOpen ? 'shadow-soft ring-line-strong' : 'ring-line hover:ring-line-strong',
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 font-mono text-[10px] tabular-nums text-subtle/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 text-sm font-semibold leading-6 text-ink">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={cn(
                      'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-3 text-ink ring-1 ring-line transition duration-300',
                      isOpen && 'rotate-45 bg-accent text-accent-fg ring-accent',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-muted sm:px-6 sm:pl-[3.55rem]">
                        {f.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
