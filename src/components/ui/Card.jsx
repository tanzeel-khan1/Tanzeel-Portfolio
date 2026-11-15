import { cn } from '../../lib/cn'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'group relative isolate overflow-hidden rounded-2xl bg-surface ring-1 ring-line',
        'shadow-soft transition duration-300 ease-out',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px',
        'before:bg-[linear-gradient(90deg,transparent,var(--line-strong),transparent)]',
        'after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-2xl after:opacity-0',
        'after:bg-[radial-gradient(520px_circle_at_50%_0%,var(--glow),transparent_72%)]',
        'after:transition-opacity after:duration-500',
        'hover:-translate-y-1 hover:shadow-lift hover:ring-line-strong hover:after:opacity-100',
        className,
      )}
      {...props}
    />
  )
}
