export function GlowBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(80%_55%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(180deg,var(--surface-2),transparent)] opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-glow blur-3xl" />
      <div className="absolute top-1/3 -left-[120px] h-[480px] w-[480px] rounded-full bg-glow blur-3xl" />
      <div className="absolute top-1/2 -right-[140px] h-[480px] w-[480px] rounded-full bg-glow blur-3xl" />
    </div>
  )
}
