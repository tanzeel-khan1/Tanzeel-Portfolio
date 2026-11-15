import { cn } from '../../lib/cn'

const base =
  'relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium tracking-tight ' +
  'transition duration-200 ease-out will-change-transform active:translate-y-0 ' +
  'disabled:pointer-events-none disabled:opacity-60'

const variants = {
  primary:
    'bg-accent text-accent-fg ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_30px_-16px_rgba(0,0,0,0.6)] ' +
    'hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_20px_40px_-18px_rgba(0,0,0,0.7)] hover:opacity-[0.97]',
  ghost:
    'bg-page text-ink ring-1 ring-line hover:-translate-y-0.5 hover:bg-surface-2 hover:ring-line-strong hover:shadow-soft',
  inverse:
    'bg-accent-fg text-accent shadow-[0_14px_30px_-16px_rgba(0,0,0,0.45)] ' +
    'hover:-translate-y-0.5 hover:opacity-90',
  'inverse-ghost':
    'border border-accent-fg/25 bg-transparent text-accent-fg ' +
    'hover:-translate-y-0.5 hover:bg-accent-fg/10',
}

export function Button({ as: Comp = 'a', variant = 'primary', className, ...props }) {
  return <Comp className={cn(base, variants[variant], className)} {...props} />
}
