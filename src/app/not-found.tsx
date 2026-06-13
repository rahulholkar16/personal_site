import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[--color-text-muted] mb-6">
        Error 404
      </p>
      <h1 className="display text-7xl sm:text-9xl leading-none tracking-tight mb-6">
        404<span className="text-[--color-accent]">.</span>
      </h1>
      <p className="text-[--color-text-secondary] mb-10 max-w-sm mx-auto leading-relaxed">
        This page doesn&apos;t exist. Maybe it was moved or you mistyped the URL.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-[--color-text] hover:text-[--color-accent] transition-colors border border-[--color-border] hover:border-[--color-accent] px-6 py-3"
      >
        ← Back to home
      </Link>
    </div>
  )
}
