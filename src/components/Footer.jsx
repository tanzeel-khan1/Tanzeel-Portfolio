import { Mail } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { profile } from '../content/portfolio'
import { Container } from './ui/Container'
import { Logo } from './Logo'

export function Footer() {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'LinkedIn', href: profile.facebook, Icon: FaFacebook },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ]

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Logo />
          <div>
            <div className="text-sm font-semibold text-ink">{profile.name}</div>
            <div className="mt-1 text-xs text-subtle">
              Full-Stack MERN Developer • Premium UI/UX
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-3 text-ink ring-1 ring-line transition hover:bg-surface-4 hover:ring-line-strong"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
