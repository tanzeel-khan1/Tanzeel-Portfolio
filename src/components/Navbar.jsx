import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '../lib/cn'
import { profile } from '../content/portfolio'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
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

const navLink =
  'group relative text-sm text-muted transition-colors duration-200 hover:text-ink ' +
  'after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 ' +
  'after:bg-ink after:transition-all after:duration-300 after:ease-out group-hover:after:w-full'

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 500, damping: 50, mass: 0.3 })

  const links = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
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
      <div
        className={cn(
          'border-b border-transparent backdrop-blur-xl transition-colors duration-300',
          scrolled ? 'border-line bg-page/80' : 'bg-page/60',
        )}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <a
            href="#top"
            aria-label={profile.name}
            className="group flex items-center transition-opacity duration-200 hover:opacity-70"
          >
            <Logo className="transition-transform duration-300 group-hover:scale-[1.04]" />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={navLink}>
                {l.label}
              </a>
            ))}
            <ThemeToggle />
            <Button href="#contact" variant="primary">
              Get a Quote
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-3 text-ink ring-1 ring-line transition duration-300 hover:bg-surface-4 active:scale-95"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-accent"
        />
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="border-b border-line bg-page/95 backdrop-blur-xl">
            <Container className="py-4">
              <div className="grid gap-1.5">
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
                  Get a Quote
                </Button>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </div>
  )
}
