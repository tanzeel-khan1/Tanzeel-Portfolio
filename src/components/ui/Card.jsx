import { cn } from '../../lib/cn'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl',
        'shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]',
        className,
      )}
      {...props}
    />
  )
}

