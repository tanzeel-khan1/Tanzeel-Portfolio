import { cn } from '../../lib/cn'

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10',
        className,
      )}
      {...props}
    />
  )
}

