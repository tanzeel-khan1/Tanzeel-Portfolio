import { cn } from '../../lib/cn'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-surface p-6 ring-1 ring-line',
        'shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_36px_-28px_rgba(0,0,0,0.3)]',
        'transition duration-300 ease-out',
        'hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_28px_56px_-30px_rgba(0,0,0,0.4)]',
        className,
      )}
      {...props}
    />
  )
}
