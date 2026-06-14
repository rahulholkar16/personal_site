export function PrintButton() {
  return (
      <a
          href="https://drive.google.com/file/d/1HdAEin5uvJpVedDqwdi2d5Nc8EwlJiO-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-(--color-text) hover:text-(--color-accent) transition-colors"
      >
          <span>Download Resume / PDF</span>
          <span className="transition-transform group-hover:translate-y-0.5">
              ↓
          </span>
      </a>
  );
}
