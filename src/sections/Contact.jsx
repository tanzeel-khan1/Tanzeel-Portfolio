import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Mail, Send } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
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
    { label: 'Facebook', href: profile.facebook, Icon: FaFacebook },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ]

  const fieldClass =
    'rounded-xl bg-page px-4 text-sm text-ink ring-1 ring-line outline-none transition ' +
    'shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] placeholder:text-subtle ' +
    'hover:ring-line-strong focus:ring-2 focus:ring-accent/25'

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Let’s work together"
          title="Tell me what’s slowing your business down."
          desc="Need more customers or a system that saves time? Share your goal and I’ll reply with a clear plan and price."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <Card className="flex h-full flex-col p-7 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-ink">Project brief</div>
                  <p className="mt-2 text-sm leading-6 text-subtle">
                    This opens your email app—quick and direct.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle ring-1 ring-line">
                  <Clock className="h-3.5 w-3.5" />
                  24h reply
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-muted">Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={`h-11 ${fieldClass}`}
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-muted">Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
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
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`min-h-[130px] resize-none py-3 ${fieldClass}`}
                    placeholder="What do you need? (pages/features), your business, and deadline..."
                  />
                </label>

                <Button as="a" href={mailto} variant="primary" className="mt-2 w-full">
                  Send Email <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="flex h-full flex-col p-7 sm:p-8">
              <div className="text-sm font-semibold text-ink">Quick links</div>
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
                    className="group/link flex items-center gap-3 rounded-xl bg-surface-2 p-4 ring-1 ring-line transition hover:-translate-y-0.5 hover:bg-surface-3 hover:ring-line-strong"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-fg shadow-soft ring-1 ring-line">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-ink">{label}</div>
                      <div className="truncate text-xs text-subtle">
                        {label === 'Email' ? profile.email : 'Open profile'}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle opacity-0 transition group-hover/link:opacity-100" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-xl bg-surface-2 p-4 ring-1 ring-line">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden />
                    Availability
                  </div>
                  <div className="mt-1.5 text-sm text-muted">
                    Now booking projects — websites, custom systems & redesigns.
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
