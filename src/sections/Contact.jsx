import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
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
    { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedinIn },
    { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
  ]

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
              <div className="text-sm font-semibold text-white/90">
                Request a quote
              </div>
              <p className="mt-2 text-sm leading-6 text-white/65">
                This opens your email client (no backend needed).
              </p>

              <div className="mt-6 grid gap-3">
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-white/70">Name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="h-11 rounded-2xl bg-white/5 px-4 text-sm text-white/90 ring-1 ring-white/10 outline-none transition placeholder:text-white/35 focus:ring-indigo-400/40"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-white/70">Email</span>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="h-11 rounded-2xl bg-white/5 px-4 text-sm text-white/90 ring-1 ring-white/10 outline-none transition placeholder:text-white/35 focus:ring-indigo-400/40"
                    placeholder="you@email.com"
                    inputMode="email"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium text-white/70">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="min-h-[130px] resize-none rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10 outline-none transition placeholder:text-white/35 focus:ring-indigo-400/40"
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
              <div className="text-sm font-semibold text-white/90">
                Quick links
              </div>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Prefer direct contact? Choose your channel.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/7 hover:ring-white/14"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-indigo-200" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white/90">
                        {label}
                      </div>
                      <div className="text-xs text-white/60">
                        {label === 'Email' ? profile.email : 'Open'}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
                <div className="text-xs font-medium text-white/60">Availability</div>
                <div className="mt-1 text-sm text-white/80">
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

