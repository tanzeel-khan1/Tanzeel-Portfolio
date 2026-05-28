import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12] disabled:pointer-events-none disabled:opacity-60'

const variants = {
  primary:
    'bg-gradient-to-b from-white/14 to-white/6 text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.55)] ring-1 ring-white/12 hover:translate-y-[-1px] hover:ring-white/18',
  ghost:
    'bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/8 hover:ring-white/14 hover:translate-y-[-1px]',
}

export function Button({ as: Comp = 'a', variant = 'primary', className, ...props }) {
  return <Comp className={cn(base, variants[variant], className)} {...props} />
}

