import { Mail, MessageCircle } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../content/portfolio'
import { Container } from './ui/Container'

export function Footer() {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedinIn },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ]

  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold text-white/90">{profile.name}</div>
          <div className="mt-1 text-xs text-white/60">
            Full-Stack MERN Developer • Premium UI/UX
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/14"
            >
              <Icon className="h-5 w-5 text-white/80" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

