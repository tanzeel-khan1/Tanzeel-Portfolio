import { cn } from '../../lib/cn'

export function SectionHeading({ eyebrow, title, desc, className }) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">
          <span className="h-px w-6 bg-line-strong" aria-hidden />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {desc ? (
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-6 text-muted sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  )
}
