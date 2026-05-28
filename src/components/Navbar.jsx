import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/cn'
import { profile } from '../content/portfolio'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

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
          'border-b border-transparent transition',
          scrolled ? 'border-white/8 bg-[#070A12]/70 backdrop-blur-xl' : '',
        )}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white/90">
                {profile.name}
              </div>
              <div className="text-[11px] text-white/55">Available for freelance</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Button href="#contact" variant="primary">
              Get a Quote
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/8 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="border-b border-white/8 bg-[#070A12]/92 backdrop-blur-xl">
            <Container className="py-4">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 ring-1 ring-transparent transition hover:bg-white/6 hover:text-white hover:ring-white/10"
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

