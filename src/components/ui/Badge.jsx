import { cn } from '../../lib/cn'

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-surface-3 px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight text-muted ring-1 ring-line',
        className,
      )}
      {...props}
    />
  )
}
