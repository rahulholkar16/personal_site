import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/../public/profile.jpg";
import { ProjectItem } from "@/components/project-item";
import { SectionLabel } from "@/components/section-label";
import { PROJECTS, SITE } from "@/lib/constants";

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
                                Full Stack
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
                            products, LMS backends, coding platforms, and AI
                            tools — all from scratch.
                        </p>
                        <p>
                            Today I reach for{" "}
                            <span className="display-italic text-(--color-text)">
                                React, TypeScript, Tailwind, and Postgres
                            </span>{" "}
                            when I build. I love the entire stack — from
                            designing schemas to crafting responsive UIs that
                            feel great to use.
                        </p>
                        <p>
                            Outside of class, I lead hackathon teams, contribute
                            to open source, and present technical projects to
                            academic panels. I&apos;m always building something
                            — whether it&apos;s a{" "}
                            <a
                                href="https://github.com/rahulholkar16/Code-Master"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={inlineLinkClass}
                            >
                                competitive coding platform
                            </a>{" "}
                            or an{" "}
                            <a
                                href="https://ai-quiz-frontend-red.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={inlineLinkClass}
                            >
                                AI quiz app
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
                    {[
                        {
                            label: "Languages",
                            items: [
                                "TypeScript",
                                "JavaScript",
                                "Java",
                                "Python",
                            ],
                            icon: "{ }",
                        },
                        {
                            label: "Frontend",
                            items: [
                                "Next.js",
                                "React.js",
                                "Tailwind CSS",
                                "Shadcn UI",
                            ],
                            icon: "◻",
                        },
                        {
                            label: "Backend",
                            items: [
                                "Node.js",
                                "Express.js",
                                "FastAPI",
                                "REST APIs",
                            ],
                            icon: "⚙",
                        },
                        {
                            label: "Databases",
                            items: [
                                "PostgreSQL",
                                "MongoDB",
                                "Redis",
                                "Prisma ORM",
                            ],
                            icon: "◈",
                        },
                        {
                            label: "State & Validation",
                            items: ["Zustand", "Zod", "TanStack Query"],
                            icon: "◎",
                        },
                        {
                            label: "Dev Tools",
                            items: ["Git", "GitHub", "Docker"],
                            icon: "△",
                        },
                    ].map((group) => {
                        const techIcons: Record<string, ReactNode> = {
                            TypeScript: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        width="128"
                                        height="128"
                                        rx="24"
                                        fill="#3178c6"
                                    />
                                    <path d="M34 40h24v48H34z" fill="#fff" />
                                    <path d="M70 40h24v48H70z" fill="#fff" />
                                    <path d="M70 72h24v16H70z" fill="#fff" />
                                </svg>
                            ),
                            JavaScript: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        width="128"
                                        height="128"
                                        rx="24"
                                        fill="#f7df1e"
                                    />
                                    <path
                                        d="M51 40h10l8 46h10l8-46h10l-12 56h-14l-12-56Z"
                                        fill="#000"
                                    />
                                </svg>
                            ),
                            Java: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path fill="#ec2026" d="M20 24h88v80H20z" />
                                    <path
                                        d="M35 46h58a9 9 0 0 1 9 9v15a26 26 0 0 1-26 26H58a26 26 0 0 1-26-26V55a9 9 0 0 1 9-9Z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M62 54c-12 4-16 10-14 20 3 10 14 12 22 12 7 0 13-5 15-11 2-8-2-15-11-21-5-3-7-3-12 0Z"
                                        fill="#000"
                                        opacity=".6"
                                    />
                                </svg>
                            ),
                            Python: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M20 23h61c12 0 22 10 22 22v24c0 12-10 22-22 22H46l-8 8v24c0 12-10 22-22 22H20c-12 0-22-10-22-22V45C-2 33 8 23 20 23Z"
                                        fill="#306998"
                                    />
                                    <path
                                        d="M108 56h-61c-12 0-22-10-22-22V10c0-12 10-22 22-22h42c12 0 22 10 22 22v24c0 12-10 22-22 22Z"
                                        transform="translate(0 76) rotate(-180 64 64)"
                                        fill="#ffd43b"
                                    />
                                </svg>
                            ),
                            "Next.js": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        width="128"
                                        height="128"
                                        rx="24"
                                        fill="#000"
                                    />
                                    <path
                                        d="M39 36h16l26 38V36h14v56h-16l-26-38v38H39V36Z"
                                        fill="#fff"
                                    />
                                </svg>
                            ),
                            "React.js": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="18"
                                        fill="none"
                                        stroke="#61dafb"
                                        strokeWidth="10"
                                    />
                                    <ellipse
                                        cx="64"
                                        cy="64"
                                        rx="48"
                                        ry="19"
                                        fill="none"
                                        stroke="#61dafb"
                                        strokeWidth="10"
                                    />
                                    <ellipse
                                        cx="64"
                                        cy="64"
                                        rx="48"
                                        ry="19"
                                        transform="rotate(60 64 64)"
                                        fill="none"
                                        stroke="#61dafb"
                                        strokeWidth="10"
                                    />
                                    <ellipse
                                        cx="64"
                                        cy="64"
                                        rx="48"
                                        ry="19"
                                        transform="rotate(120 64 64)"
                                        fill="none"
                                        stroke="#61dafb"
                                        strokeWidth="10"
                                    />
                                </svg>
                            ),
                            "Tailwind CSS": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M20 78c22-24 45-18 68-10s27-14 18-22C94 24 68 38 42 60 22 78 20 92 20 92Z"
                                        fill="#38b2ac"
                                    />
                                    <path
                                        d="M20 96c22-24 45-18 68-10s27-14 18-22C94 42 68 56 42 78 22 96 20 110 20 110Z"
                                        fill="#0f766e"
                                    />
                                </svg>
                            ),
                            "Shadcn UI": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="18"
                                        y="18"
                                        width="92"
                                        height="92"
                                        rx="20"
                                        fill="#7c3aed"
                                    />
                                    <path
                                        d="M38 38h22v22H38V38Zm30 0h22v22H68V38Zm-30 30h22v22H38V68Zm30 30h22v22H68V98Z"
                                        fill="#fff"
                                    />
                                </svg>
                            ),
                            "Node.js": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M64 10 114 38v52l-50 28L14 90V38l50-28Z"
                                        fill="#83cd29"
                                    />
                                    <path d="M60 42h8v46h-8v-46Z" fill="#fff" />
                                    <path d="M50 56h28v8H50v-8Z" fill="#fff" />
                                </svg>
                            ),
                            "Express.js": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        width="128"
                                        height="128"
                                        rx="24"
                                        fill="#000"
                                    />
                                    <path
                                        d="M34 42h60v14H34zM34 66h60v14H34zM34 90h60v14H34z"
                                        fill="#fff"
                                    />
                                </svg>
                            ),
                            FastAPI: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        width="128"
                                        height="128"
                                        rx="24"
                                        fill="#009688"
                                    />
                                    <path
                                        d="M42 38l44 24-44 24v14l64-34L42 24v14Z"
                                        fill="#fff"
                                    />
                                </svg>
                            ),
                            "REST APIs": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="34"
                                        cy="40"
                                        r="12"
                                        fill="#2563eb"
                                    />
                                    <circle
                                        cx="94"
                                        cy="40"
                                        r="12"
                                        fill="#2563eb"
                                    />
                                    <circle
                                        cx="64"
                                        cy="88"
                                        r="12"
                                        fill="#2563eb"
                                    />
                                    <path
                                        d="M44 44 84 44"
                                        stroke="#2563eb"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M68 54 68 76"
                                        stroke="#2563eb"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ),
                            PostgreSQL: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M24 26h80v76H24z" fill="#336791" />
                                    <path
                                        d="M44 40c8 12 38 10 42 30 4 20-26 30-42 28V40Z"
                                        fill="#fff"
                                        opacity=".9"
                                    />
                                </svg>
                            ),
                            MongoDB: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M64 18s34 14 34 40c0 18-34 50-34 50S30 79 30 58C30 32 64 18 64 18Z"
                                        fill="#47a248"
                                    />
                                    <path
                                        d="M64 18s-20 16-20 34c0 18 20 30 20 30s20-12 20-30c0-18-20-34-20-34Z"
                                        fill="#fff"
                                        opacity=".18"
                                    />
                                </svg>
                            ),
                            Redis: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="44"
                                        fill="#a41e11"
                                    />
                                    <path
                                        d="M42 50h44v10H42zM42 64h44v10H42zM42 78h44v10H42z"
                                        fill="#fff"
                                    />
                                </svg>
                            ),
                            "Prisma ORM": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M64 18 104 86H24L64 18Z"
                                        fill="#1c6afa"
                                    />
                                    <path
                                        d="M64 110 24 42h80L64 110Z"
                                        fill="#5ec7ff"
                                        opacity=".8"
                                    />
                                </svg>
                            ),
                            Zustand: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="38"
                                        fill="#0f766e"
                                    />
                                    <path
                                        d="M64 38v52M38 64h52"
                                        stroke="#fff"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ),
                            Zod: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="24"
                                        y="24"
                                        width="80"
                                        height="80"
                                        rx="16"
                                        fill="#9333ea"
                                    />
                                    <path
                                        d="M46 54 82 82M46 82 82 54"
                                        stroke="#fff"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ),
                            "TanStack Query": (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="24"
                                        fill="#2563eb"
                                    />
                                    <path
                                        d="M78 78 106 106"
                                        stroke="#2563eb"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="16"
                                        fill="#fff"
                                    />
                                </svg>
                            ),
                            Git: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="34"
                                        cy="34"
                                        r="14"
                                        fill="#f34f29"
                                    />
                                    <circle
                                        cx="94"
                                        cy="34"
                                        r="14"
                                        fill="#f34f29"
                                    />
                                    <circle
                                        cx="64"
                                        cy="94"
                                        r="14"
                                        fill="#f34f29"
                                    />
                                    <path
                                        d="M46 46 82 82"
                                        stroke="#f34f29"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M46 82 82 46"
                                        stroke="#f34f29"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ),
                            GitHub: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M64 16C36 16 16 36 16 64a48 48 0 0 0 32 45c2 0 3-1 3-3v-10c-13 3-16-6-16-6-2-5-5-7-5-7-4-3 0-3 0-3 5 0 8 5 8 5 4 8 11 6 14 5a10 10 0 0 1 3-6c-10-1-21-5-21-22 0-5 2-8 5-11 0-1-2-5 0-11 0 0 4-1 11 5a38 38 0 0 1 20 0c7-6 11-5 11-5 2 6 0 10 0 11 3 3 5 6 5 11 0 17-11 21-21 22a11 11 0 0 1 3 8v12c0 2 1 3 3 3a48 48 0 0 0 32-45c0-28-20-48-48-48Z"
                                        fill="#000"
                                    />
                                </svg>
                            ),
                            Docker: (
                                <svg
                                    viewBox="0 0 128 128"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M18 60h92v24H18z" fill="#2496ed" />
                                    <path
                                        d="M34 38h22v18H34zM58 38h22v18H58zM82 38h22v18H82z"
                                        fill="#7fd2ff"
                                    />
                                    <path d="M20 84h88v18H20z" fill="#1b6ca8" />
                                    <path
                                        d="M44 102h40v10H44z"
                                        fill="#7fd2ff"
                                    />
                                </svg>
                            ),
                        };

                        return (
                            <div
                                key={group.label}
                                className="p-5 border border-(--color-border) rounded-xl bg-(--color-surface) hover:border-(--color-accent) transition duration-200 ease-out transform hover:scale-105 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-mono text-lg text-(--color-accent)">
                                        {group.icon}
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
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface) text-[10px] text-(--color-accent)">
                                                {techIcons[item] ?? "•"}
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Achievements */}
            <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
                <SectionLabel number="04">Achievements</SectionLabel>
                <div className="space-y-6">
                    {[
                        {
                            title: "Hackathon Team Lead (SIH)",
                            description:
                                "Led cross-functional teams in the Smart India Hackathon, driving product ideation, technical execution, and live demos under time-constrained environments.",
                        },
                        {
                            title: "Open Source Contributor",
                            description:
                                "Actively contribute to open-source repositories on GitHub, aligning with industry best practices.",
                        },
                        {
                            title: "Public Speaker",
                            description:
                                "Presented technical projects and architecture decisions to academic panels and peer audiences.",
                        },
                    ].map((achievement, i) => (
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
