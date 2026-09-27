import { useState } from 'react'
import { cn } from '../lib/cn'
import { profile } from '../content/portfolio'

export const LOGO_SRC = '/logo.png'

export function Logo({ src = LOGO_SRC, className, alt = `${profile.name} logo` }) {
  const [failed, setFailed] = useState(false)

  return (
    <span
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface ring-1 ring-line',
        className,
      )}
    >
      {failed ? (
        <span className="text-[13px] font-bold tracking-tight text-ink">TB</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-1"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}
