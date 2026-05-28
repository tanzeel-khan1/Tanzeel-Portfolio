export function GlowBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute -bottom-52 left-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/18 blur-3xl" />
      <div className="absolute top-[30%] right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-400/14 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_20%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(700px_circle_at_20%_70%,rgba(236,72,153,0.12),transparent_60%),radial-gradient(700px_circle_at_80%_70%,rgba(34,211,238,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,18,0.20),rgba(7,10,18,0.86))]" />
    </div>
  )
}

