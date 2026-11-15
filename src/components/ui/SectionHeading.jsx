import { cn } from '../../lib/cn'

export function SectionHeading({ eyebrow, title, desc, className }) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-subtle ring-1 ring-line">
          <span className="h-1.5 w-1.5 rounded-full bg-ink/50" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-gradient mt-5 text-balance text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.025em] sm:text-[2.6rem] sm:leading-[1.08]">
        {title}
      </h2>
      {desc ? (
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7">
          {desc}
        </p>
      ) : null}
    </div>
  )
}
