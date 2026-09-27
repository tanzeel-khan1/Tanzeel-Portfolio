import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../content/portfolio'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

function buildMailto({ to, subject, body }) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const qs = params.toString()
  return `mailto:${encodeURIComponent(to)}${qs ? `?${qs}` : ''}`
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const mailto = useMemo(() => {
    const lines = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      '',
      form.message || '',
    ]
    return buildMailto({
      to: profile.email,
      subject: 'Project quote request',
      body: lines.join('\n'),
    })
  }, [form])

  const socials = [
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'LinkedIn', href: profile.facebook, Icon: FaFacebook },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ]

  const fieldClass =
    'rounded-2xl bg-page px-4 text-sm text-ink ring-1 ring-line outline-none transition placeholder:text-subtle focus:ring-accent/40'

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get a quote for your website or web app."
          desc="Share your goals, pages/features, and timeline. I’ll respond with a clear plan and a price estimate."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <Card className="h-full p-7 sm:p-8">
              <div className="text-sm font-semibold text-ink">
                Request a quote
              </div>
              <p className="mt-2 text-sm leading-6 text-subtle">
                This opens your email client (no backend needed).
              </p>

              <div className="mt-6 grid gap-3">
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-muted">Name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={`h-11 ${fieldClass}`}
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-muted">Email</span>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={`h-11 ${fieldClass}`}
                    placeholder="you@email.com"
                    inputMode="email"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-muted">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`min-h-[130px] resize-none py-3 ${fieldClass}`}
                    placeholder="What do you need? (pages/features), your business, and deadline..."
                  />
                </label>

                <Button as="a" href={mailto} variant="primary" className="mt-2">
                  Send Email <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="h-full p-7 sm:p-8">
              <div className="text-sm font-semibold text-ink">
                Quick links
              </div>
              <p className="mt-2 text-sm leading-6 text-subtle">
                Prefer direct contact? Choose your channel.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-2xl bg-surface-2 p-4 ring-1 ring-line transition hover:bg-surface-3 hover:ring-line-strong"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-fg">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {label}
                      </div>
                      <div className="text-xs text-subtle">
                        {label === 'Email' ? profile.email : 'Open'}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-surface-2 p-4 ring-1 ring-line">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  Availability
                </div>
                <div className="mt-1 text-sm text-muted">
                  Available for freelance — websites, landing pages & MERN apps.
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
