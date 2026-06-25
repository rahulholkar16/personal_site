import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import {
    ACHIEVEMENTS,
    CV_EDUCATION,
    CV_SKILLS,
    EXPERIENCE,
    PROJECTS,
    SITE,
} from "@/lib/constants";
import Image from "next/image";
import meImg from "@/../public/me.jpeg";

export const metadata: Metadata = {
    title: `CV — ${SITE.name}`,
    description:
        "Curriculum vitae for Rahul Pal — Full Stack AI Developer based in Noida, India.",
    alternates: { canonical: `${SITE.url}/cv` },
    openGraph: {
        type: "profile",
        url: `${SITE.url}/cv`,
        title: `CV — ${SITE.name}`,
    },
};

function CvSection({ label, number }: { label: string; number: string }) {
    return (
        <div className="flex items-baseline gap-4 mb-6">
            <span className="display text-2xl text-(--color-text-muted) leading-none tabular-nums">
                {number}
            </span>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-(--color-text-muted)">
                {label}
            </h2>
            <div className="flex-1 h-px bg-(--color-border) translate-y-[-3px]" />
        </div>
    );
}

export default function CvPage() {
    return (
        <div className="cv-page relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-20">
            {/* Screen-only utility bar */}
            <div className="no-print flex items-center justify-between mb-10 pb-6 border-b border-(--color-border)">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-(--color-text-muted)">
                    Curriculum Vitae · Last updated {new Date().getFullYear()}
                </p>
                <PrintButton />
            </div>

            {/* Header */}
            <header className="mb-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                {/* Initials avatar */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0">
                    <Image
                        src={meImg}
                        alt="Rahul Pal"
                        fill
                        loading="eager"
                        fetchPriority="high"
                        sizes="112px"
                        quality={85}
                        className="object-cover"
                    />
                </div>

                <div className="flex-1">
                    <h1 className="display text-5xl sm:text-6xl leading-[0.95] tracking-tight mb-2">
                        Rahul Pal
                        <span className="text-(--color-accent)">.</span>
                    </h1>
                    <p className="text-lg text-(--color-text-secondary) mb-2">
                        <span className="display-italic">
                            Full Stack AI Developer
                        </span>{" "}
                        focused on building scalable, user-first products.
                    </p>
                    <p className="font-mono text-xs text-(--color-text-muted) mb-4">
                        B.Tech CSE · Accurate Institute, Noida · 2023–2027
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-(--color-text-muted) uppercase tracking-wider">
                        <a
                            href={`mailto:${SITE.email}`}
                            className="hover:text-(--color-text) transition-colors"
                        >
                            {SITE.email}
                        </a>
                        <span>·</span>
                        <span>+91 98994 37679</span>
                        <span>·</span>
                        <a
                            href="https://github.com/rahulholkar16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-(--color-text) transition-colors"
                        >
                            github.com/rahulholkar16
                        </a>
                        <span>·</span>
                        <a
                            href="https://linkedin.com/in/rahulpal01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-(--color-text) transition-colors"
                        >
                            linkedin.com/in/rahulpal01
                        </a>
                    </div>
                </div>
            </header>

            {/* Experience */}
            <section className="mb-10">
                <CvSection label="Experience" number="01" />
                <div className="space-y-6">
                    {EXPERIENCE.map((experience) => (
                        <div
                            key={`${experience.company}-${experience.role}`}
                            className="cv-block"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-1">
                                <h3 className="display text-xl text-(--color-text)">
                                    {experience.role}
                                </h3>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                                    {experience.period}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-(--color-text) mb-1">
                                {experience.company}
                            </p>
                            <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                                {experience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selected Projects */}
            <section className="mb-10">
                <CvSection label="Selected Projects" number="02" />
                <div className="space-y-6">
                    {PROJECTS.map((project) => (
                        <div key={project.name} className="cv-block">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-1">
                                <h3 className="display text-xl text-(--color-text)">
                                    {project.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {project.status && (
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                                            {project.status}
                                        </span>
                                    )}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-[10px] uppercase tracking-wider text-(--color-accent) hover:opacity-70 transition-opacity"
                                    >
                                        {project.sourceUrl
                                            ? "Source Code ↗"
                                            : "Live Demo ↗"}
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-(--color-text-secondary) leading-relaxed mb-2">
                                {project.description}
                            </p>
                            <p className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted)">
                                {project.tech.join(" · ")}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
                <CvSection label="Technical Skills" number="03" />
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {CV_SKILLS.map((group) => (
                        <div key={group.label} className="flex gap-3">
                            <dt className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted) shrink-0 w-28 pt-0.5">
                                {group.label}
                            </dt>
                            <dd className="text-sm text-(--color-text-secondary)">
                                {group.items.join(" · ")}
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Education */}
            <section className="mb-10">
                <CvSection label="Education" number="04" />
                <div className="space-y-5">
                    {CV_EDUCATION.map((edu) => (
                        <div key={edu.title} className="cv-block">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-1">
                                <h3 className="display text-lg text-(--color-text)">
                                    {edu.title}
                                </h3>
                                <span className="font-mono text-[11px] uppercase tracking-wider text-(--color-text-muted)">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-sm text-(--color-text-secondary)">
                                {edu.institution} · {edu.location}
                            </p>
                            {edu.gpa && (
                                <p className="font-mono text-[10px] uppercase tracking-wider text-(--color-text-muted) mt-1">
                                    {edu.gpa}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className="mb-4">
                <CvSection label="Achievements & Leadership" number="05" />
                <ul className="space-y-3">
                    {ACHIEVEMENTS.map((item) => (
                        <li
                            key={item.title}
                            className="flex gap-2 text-sm text-(--color-text-secondary)"
                        >
                            <span className="text-(--color-text-muted) shrink-0">
                                —
                            </span>
                            <span>
                                <strong className="text-(--color-text) font-medium">
                                    {item.title}:
                                </strong>{" "}
                                {item.description}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Back link */}
            <div className="no-print mt-14 pt-6 border-t border-(--color-border)">
                <Link
                    href="/"
                    className="font-mono text-xs uppercase tracking-wider text-(--color-text-muted) hover:text-(--color-text) transition-colors"
                >
                    ← Back to home
                </Link>
            </div>
        </div>
    );
}
