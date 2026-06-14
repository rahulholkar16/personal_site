import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/../public/profile.jpg";
import { ProjectItem } from "@/components/project-item";
import { SectionLabel } from "@/components/section-label";
import { ACHIEVEMENTS, CV_SKILLS, PROJECTS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
    title: SITE.title,
    description: SITE.description,
    alternates: { canonical: SITE.url },
    openGraph: {
        type: "website",
        url: SITE.url,
        title: SITE.title,
        description: SITE.description,
    },
};

const inlineLinkClass =
    "text-(--color-text) underline underline-offset-4 decoration-(--color-border) hover:decoration-(--color-accent) transition-colors";

export default function HomePage() {
    const techIcons: Record<string, string> = {
        TypeScript: "https://cdn.simpleicons.org/typescript",
        JavaScript: "https://cdn.simpleicons.org/javascript",
        Java: "https://cdn.simpleicons.org/openjdk",
        Python: "https://cdn.simpleicons.org/python",
        "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000/ffffff",
        "React.js": "https://cdn.simpleicons.org/react",
        "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
        "Shadcn UI": "https://cdn.simpleicons.org/shadcnui/000000/ffffff",
        "Node.js": "https://cdn.simpleicons.org/nodedotjs",
        "Express.js": "https://cdn.simpleicons.org/express/000000/ffffff",
        FastAPI: "https://cdn.simpleicons.org/fastapi",
        "REST APIs": "https://cdn.simpleicons.org/postman",
        PostgreSQL: "https://cdn.simpleicons.org/postgresql",
        MongoDB: "https://cdn.simpleicons.org/mongodb",
        Redis: "https://cdn.simpleicons.org/redis",
        "Prisma ORM": "https://cdn.simpleicons.org/prisma/000000/ffffff",
        Zustand: "https://cdn.simpleicons.org/react",
        Zod: "https://cdn.simpleicons.org/zod",
        "TanStack Query": "https://cdn.simpleicons.org/reactquery",
        Git: "https://cdn.simpleicons.org/git",
        GitHub: "https://cdn.simpleicons.org/github/000000/ffffff",
        Docker: "https://cdn.simpleicons.org/docker",
        LangChain: "https://cdn.simpleicons.org/langchain",
        LangGraph: "https://cdn.simpleicons.org/langchain",
        RAG: "https://cdn.simpleicons.org/googlegemini",
        "Vector Databases": "https://cdn.simpleicons.org/pino",
        "Agentic AI": "https://cdn.simpleicons.org/openaigym",
        Pinecone: "https://cdn.simpleicons.org/pino",
    };

    return (
        <div className="relative z-10">
            {/* Hero */}
            <section className="max-w-5xl mx-auto px-6 pt-10 sm:pt-16 pb-20 sm:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div className="order-1">
                        <div className="fade-up delay-1 flex items-center gap-3 mb-7">
                            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-(--color-text-muted)">
                                RP · Noida, India · {new Date().getFullYear()}
                            </span>
                        </div>

                        <h1 className="fade-up delay-2 display text-5xl sm:text-6xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                            <span className="display-italic text-(--color-text-secondary)">
                                Full Stack AI
                            </span>
                            <br />
                            Developer
                            <span className="text-(--color-accent)">.</span>
                        </h1>

                        <p className="fade-up delay-3 text-base sm:text-lg text-(--color-text-secondary) leading-relaxed max-w-md mb-6">
                            I build products people actually use — and I care
                            about every part of that experience.{" "}
                            <span className="display-italic text-(--color-text)">
                                Self-taught, endlessly curious,
                            </span>{" "}
                            and always building something on the side.
                        </p>

                        <div className="fade-up delay-4 flex items-center gap-3 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-(--color-green-dot) opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--color-green-dot)" />
                            </span>
                            <span className="font-mono text-[11px] tracking-wider uppercase text-(--color-text-muted)">
                                Open to interesting conversations
                            </span>
                        </div>

                        {/* CTA row */}
                        <div className="fade-up delay-5 flex flex-wrap items-baseline gap-x-5 gap-y-3 pt-6 border-t border-(--color-border)">
                            <a
                                href={`mailto:${SITE.email}`}
                                className="group inline-flex items-baseline gap-1.5 text-(--color-text) hover:text-(--color-accent) transition-colors"
                            >
                                <span className="font-mono text-sm tracking-wide underline underline-offset-4 decoration-(--color-border) group-hover:decoration-(--color-accent)">
                                    {SITE.email}
                                </span>
                                <span className="font-mono text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                </span>
                            </a>
                            <span className="hidden sm:inline text-(--color-border)">
                                /
                            </span>
                            <a
                                href="https://linkedin.com/in/rahulpal01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-baseline gap-1.5 font-mono text-sm tracking-wide text-(--color-text-muted) hover:text-(--color-text) transition-colors"
                            >
                                <span>LinkedIn</span>
                                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                </span>
                            </a>
                            <Link
                                href="/cv"
                                className="group inline-flex items-baseline gap-1.5 font-mono text-sm tracking-wide text-(--color-text-muted) hover:text-(--color-text) transition-colors"
                            >
                                <span>CV</span>
                                <span className="text-xs transition-transform group-hover:translate-x-0.5">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Avatar / Illustration card */}
                    <div className="fade-up delay-2 order-2">
                        <div className="relative aspect-[5/5] overflow-visible">
                            <div className="relative mx-auto w-[86%] h-full rounded-[28px] overflow-hidden border border-(--color-border) bg-(--color-surface) transform -rotate-6 shadow-lg transition-transform will-change-transform">
                                <Image
                                    src={profileImg}
                                    alt="Avatar and illustration"
                                    fill
                                    loading="eager"
                                    fetchPriority="high"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={85}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between text-(--color-text-muted) font-mono text-[10px] tracking-wider uppercase">
                            <span>Fig. 01 — The Developer</span>
                            <span>Noida / IN</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
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
                            I&apos;m Rahul Pal — a Computer Science student and
                            Full Stack Developer based in Noida, India, pursuing
                            my B.Tech at{" "}
                            <a
                                href="https://aimtnoida.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={inlineLinkClass}
                            >
                                Accurate Institute of Management &amp;
                                Technology
                            </a>
                            .
                        </p>
                        <p>
                            In 2023, I decided it was time to go beyond
                            textbooks. I started teaching myself JavaScript,
                            fell in love with building things, and never looked
                            back. Since then I&apos;ve built full-stack SaaS
                            products, LMS backends, coding platforms, and
                            agentic AI tools — all from scratch.
                        </p>
                        <p>
                            Today I reach for{" "}
                            <span className="display-italic text-(--color-text)">
                                Next.js, React, TypeScript, Tailwind, FastAPI,
                                and Postgres
                            </span>{" "}
                            when I build. I love the entire stack — from
                            designing schemas to crafting responsive UIs that
                            feel great to use.
                        </p>
                        <p>
                            Outside of class, I lead hackathon teams, contribute
                            to open source, and present technical projects to
                            academic panels. I&apos;m always building something
                            — whether it&apos;s an{" "}
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

            {/* Projects */}
            <section
                id="projects"
                className="max-w-5xl mx-auto px-6 py-16 sm:py-20"
            >
                <SectionLabel number="02">Selected Work</SectionLabel>
                <div>
                    {PROJECTS.map((project, i) => (
                        <ProjectItem
                            key={project.name}
                            project={project}
                            index={i}
                        />
                    ))}
                </div>
            </section>

            {/* Tech Stack highlight */}
            <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
                <SectionLabel number="03">Tech Stack</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {CV_SKILLS.map((group) => (
                        <div
                            key={group.label}
                            className="p-5 border border-(--color-border) rounded-xl bg-(--color-surface) hover:border-(--color-accent) transition duration-200 ease-out transform hover:scale-105 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="font-mono text-lg text-(--color-accent)">
                                    {group.label.slice(0, 2)}
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-(--color-text-muted)">
                                    {group.label}
                                </span>
                            </div>
                            <div className="space-y-2">
                                {group.items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-sm text-(--color-text-secondary) group-hover:text-(--color-text) transition-colors"
                                    >
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface)">
                                            {techIcons[item] ? (
                                                <Image
                                                    src={techIcons[item]}
                                                    alt={item}
                                                    width={14}
                                                    height={14}
                                                    unoptimized
                                                    className="h-3.5 w-3.5"
                                                />
                                            ) : (
                                                <span className="text-[10px] text-(--color-accent)">
                                                    •
                                                </span>
                                            )}
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
                <SectionLabel number="04">Achievements</SectionLabel>
                <div className="space-y-6">
                    {ACHIEVEMENTS.map((achievement, i) => (
                        <div
                            key={achievement.title}
                            className="grid grid-cols-[auto_1fr] gap-6 items-start py-5 border-b border-(--color-border) last:border-0"
                        >
                            <span className="display text-xl text-(--color-text-muted) leading-none w-6 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div>
                                <h3 className="display text-xl text-(--color-text) mb-1">
                                    {achievement.title}
                                </h3>
                                <p className="text-sm text-(--color-text-secondary) leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
