import { SectionLabel } from "@/components/section-label";
import { EXPERIENCE } from "@/lib/constants";

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="max-w-5xl mx-auto px-6 py-10 sm:py-10"
        >
            <SectionLabel number="02">Experience</SectionLabel>
            <div>
                {EXPERIENCE.map((experience) => (
                    <article
                        key={`${experience.company}-${experience.role}`}
                        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 md:gap-14 py-8 sm:py-10"
                    >
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-(--color-text-muted) mb-3">
                                {experience.period}
                            </p>
                            <h3 className="display text-2xl sm:text-3xl leading-tight text-(--color-text)">
                                {experience.role}
                            </h3>
                        </div>
                        <div className="md:pt-6">
                            <p className="display-italic text-xl text-(--color-text) mb-3">
                                {experience.company}
                            </p>
                            <p className="text-sm sm:text-base text-(--color-text-secondary) leading-relaxed max-w-prose">
                                {experience.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
