export function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="display text-2xl text-(--color-text-muted) leading-none tabular-nums">
        {number}
      </span>
      <h2 className="text-[11px] uppercase tracking-[0.25em] text-(--color-text-muted)">
        {children}
      </h2>
      <div className="flex-1 h-px bg-(--color-border) translate-y-[-3px]" />
    </div>
  )
}
