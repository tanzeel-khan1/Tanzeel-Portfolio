import { cn } from '../../lib/cn'

export function SectionHeading({ eyebrow, title, desc, className }) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-medium tracking-wide text-white/70 ring-1 ring-white/10">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 text-pretty text-sm leading-6 text-white/70 sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  )
}

