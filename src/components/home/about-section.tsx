import { SectionLabel } from "@/components/section-label";

const inlineLinkClass =
    "text-(--color-text) underline underline-offset-4 decoration-(--color-border) hover:decoration-(--color-accent) transition-colors";

export function AboutSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <SectionLabel number="01">About</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-14">
                <p className="display text-2xl sm:text-3xl leading-tight text-(--color-text)">
                    Self-taught.{" "}
                    <span className="display-italic text-(--color-text-secondary)">
                        Product-minded.
                    </span>{" "}
                    Building since 2023.
                </p>
                <div className="space-y-5 text-(--color-text-secondary) leading-relaxed max-w-prose">
                    <p>
                        I&apos;m Rahul Pal — a Computer Science student and Full
                        Stack Developer based in Noida, India, pursuing my B.Tech
                        at{" "}
                        <a
                            href="https://aimtnoida.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={inlineLinkClass}
                        >
                            Accurate Institute of Management &amp; Technology
                        </a>
                        .
                    </p>
                    <p>
                        In 2023, I decided it was time to go beyond textbooks. I
                        started teaching myself JavaScript, fell in love with
                        building things, and never looked back. Since then
                        I&apos;ve built full-stack SaaS products, LMS backends,
                        coding platforms, and agentic AI tools — all from scratch.
                    </p>
                    <p>
                        Today I reach for{" "}
                        <span className="display-italic text-(--color-text)">
                            Next.js, React, TypeScript, Tailwind, FastAPI, and
                            Postgres
                        </span>{" "}
                        when I build. I love the entire stack — from designing
                        schemas to crafting responsive UIs that feel great to use.
                    </p>
                    <p>
                        Outside of class, I lead hackathon teams, contribute to
                        open source, and present technical projects to academic
                        panels. I&apos;m always building something — whether
                        it&apos;s an{" "}
                        <a
                            href="https://repo-mind-rose.vercel.app/dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={inlineLinkClass}
                        >
                            AI repository analysis system
                        </a>{" "}
                        or a{" "}
                        <a
                            href="https://github.com/rahulholkar16/Code-Master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={inlineLinkClass}
                        >
                            competitive coding platform
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
