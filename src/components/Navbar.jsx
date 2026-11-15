import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '../lib/cn'
import { profile } from '../content/portfolio'
import { Button } from './ui/Button'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 500, damping: 50, mass: 0.3 })

  const links = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#projects' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
      />

      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4">
        <div
          className={cn(
            'mt-3 flex h-16 items-center justify-between rounded-2xl px-3 transition-all duration-300 sm:px-4',
            scrolled
              ? 'bg-page/80 shadow-soft ring-1 ring-line backdrop-blur-xl'
              : 'bg-page/30 ring-1 ring-transparent backdrop-blur-md',
          )}
        >
          <a
            href="#top"
            aria-label={profile.name}
            className="group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
          >
            <Logo className="transition-transform duration-300 group-hover:scale-[1.04]" />
            <span className="hidden text-sm font-semibold tracking-tight text-ink min-[380px]:inline">
              {profile.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors duration-200 hover:bg-surface-3 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button href="#contact" variant="primary">
              Start a Project
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-3 text-ink ring-1 ring-line transition duration-300 hover:bg-surface-4 active:scale-95"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:hidden">
          <div className="mt-2 rounded-2xl bg-page/95 p-3 shadow-lift ring-1 ring-line backdrop-blur-xl">
            <div className="grid gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2.5 text-sm text-muted ring-1 ring-transparent transition duration-200 hover:bg-surface-3 hover:text-ink hover:ring-line"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button
                href="#contact"
                variant="primary"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
