import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { profile } from '../content/portfolio'
import { Container } from './ui/Container'
import { Logo } from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'Facebook', href: profile.facebook, Icon: FaFacebook },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_80%_at_50%_100%,black,transparent)]"
      />
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <div className="text-sm font-semibold text-ink">{profile.name}</div>
                <div className="mt-0.5 text-xs text-subtle">
                  Full-Stack Developer • Websites &amp; Business Systems
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Premium websites that attract customers and custom systems that
              make daily work easier.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Navigate
            </div>
            <ul className="mt-4 grid gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 py-1 text-sm text-muted transition hover:text-ink"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-y-px opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Connect
            </div>
            <div className="mt-4 flex items-center gap-2">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-ink ring-1 ring-line transition hover:-translate-y-0.5 hover:bg-surface-3 hover:ring-line-strong"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <div className="text-xs text-subtle">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-3.5 py-1.5 text-xs font-medium text-muted ring-1 ring-line transition hover:bg-surface-3 hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
