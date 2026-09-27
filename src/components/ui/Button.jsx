import { cn } from '../../lib/cn'

const base =
  'inline-flex select-none items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight ' +
  'transition duration-200 ease-out will-change-transform active:translate-y-0 ' +
  'disabled:pointer-events-none disabled:opacity-60'

const variants = {
  primary:
    'bg-accent text-accent-fg shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_-14px_rgba(0,0,0,0.55)] ' +
    'hover:-translate-y-px hover:opacity-90',
  ghost:
    'bg-page text-ink ring-1 ring-line hover:-translate-y-px hover:bg-surface-3 hover:ring-line-strong',
  inverse:
    'bg-accent-fg text-accent shadow-[0_10px_24px_-14px_rgba(0,0,0,0.4)] ' +
    'hover:-translate-y-px hover:opacity-90',
  'inverse-ghost':
    'border border-accent-fg/30 bg-transparent text-accent-fg ring-1 ring-accent-fg/30 ' +
    'hover:-translate-y-px hover:bg-accent-fg/10 hover:ring-accent-fg/50',
}

export function Button({ as: Comp = 'a', variant = 'primary', className, ...props }) {
  return <Comp className={cn(base, variants[variant], className)} {...props} />
}
