import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

type UsesCategory = {
    name: string;
    items: { name: string; note: string }[];
};

const USES: UsesCategory[] = [
    {
        name: "Hardware",
        items: [
            {
                name: "Dell Laptop",
                note: "My primary development machine running Ubuntu Linux.",
            },
            {
                name: "External Monitor",
                note: "Extra screen space for coding, debugging, and documentation.",
            },
            {
                name: "Mechanical Keyboard",
                note: "Comfortable typing for long development sessions.",
            },
            {
                name: "Wireless Mouse",
                note: "Reliable daily driver for work and personal projects.",
            },
        ],
    },
    {
        name: "Operating System",
        items: [
            {
                name: "Ubuntu Linux",
                note: "My preferred development environment.",
            },
            {
                name: "Docker",
                note: "Containerized development and deployment.",
            },
            {
                name: "Git",
                note: "Version control for everything.",
            },
        ],
    },
    {
        name: "Development",
        items: [
            {
                name: "Visual Studio Code",
                note: "Primary code editor.",
            },
            {
                name: "Warp Terminal",
                note: "Modern terminal with AI-powered workflows.",
            },
            {
                name: "Postman",
                note: "API testing and debugging.",
            },
            {
                name: "GitHub",
                note: "Code hosting and collaboration.",
            },
        ],
    },
    {
        name: "Frontend Stack",
        items: [
            {
                name: "Next.js",
                note: "Framework of choice for full-stack applications.",
            },
            {
                name: "React",
                note: "Building interactive user interfaces.",
            },
            {
                name: "TypeScript",
                note: "Type-safe JavaScript everywhere.",
            },
            {
                name: "Tailwind CSS",
                note: "Fast and maintainable styling.",
            },
            {
                name: "shadcn/ui",
                note: "Beautiful and customizable components.",
            },
        ],
    },
    {
        name: "Backend & AI",
        items: [
            {
                name: "Node.js",
                note: "Backend runtime for most projects.",
            },
            {
                name: "PostgreSQL",
                note: "Primary database.",
            },
            {
                name: "Prisma",
                note: "Type-safe ORM.",
            },
            {
                name: "LangGraph",
                note: "Building AI agents and workflows.",
            },
            {
                name: "LangChain",
                note: "LLM integrations and tooling.",
            },
            {
                name: "gRPC",
                note: "Exploring high-performance service communication.",
            },
        ],
    },
    {
        name: "Current Projects",
        items: [
            {
                name: "Code-Master",
                note: "LeetCode-style coding platform built with Next.js.",
            },
            {
                name: "GitHub Repository AI Agent",
                note: "AI-powered repository analysis using LangGraph and RAG.",
            },
            {
                name: "GenAI Experiments",
                note: "Exploring agents, memory, MCPs, and retrieval systems.",
            },
        ],
    },
];

export const metadata: Metadata = {
    title: `Uses — ${SITE.name}`,
    description:
        "Tools, software, and hardware I use for development and everyday work.",
    alternates: { canonical: `${SITE.url}/uses` },
    openGraph: {
        type: "website",
        url: `${SITE.url}/uses`,
        title: `Uses — ${SITE.name}`,
        description:
            "Tools, software, and hardware I use for development and everyday work.",
        images: [`${SITE.url}${SITE.ogImage}`],
    },
    twitter: {
        card: "summary_large_image",
        title: `Uses — ${SITE.name}`,
        description:
            "Tools, software, and hardware I use for development and everyday work.",
    },
};

export default function UsesPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24 relative z-10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-(--color-text-muted) mb-4">
                Hardware · Software · Stack
            </p>
            <h1 className="display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">
                What I{" "}
                <span className="display-italic text-(--color-text-secondary)">
                    use
                </span>
            </h1>
            <p className="text-(--color-text-secondary) max-w-xl mb-16 leading-relaxed">
                Tools, software, and hardware that power my daily workflow.
                Constantly evolving, rarely settled.
            </p>

            <div className="space-y-16">
                {USES.map((category, index) => (
                    <section key={category.name}>
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="display text-3xl text-(--color-text-muted) leading-none tabular-nums">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-xs uppercase tracking-[0.25em] text-(--color-text-muted)">
                                {category.name}
                            </h2>
                            <div className="flex-1 h-px bg-(--color-border) translate-y-[-4px]" />
                        </div>
                        <ul className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                            {category.items.map((item) => (
                                <li key={item.name} className="group">
                                    <div className="display text-xl text-(--color-text) group-hover:text-(--color-accent) transition-colors">
                                        {item.name}
                                    </div>
                                    <div className="text-sm text-(--color-text-muted) mt-0.5">
                                        {item.note}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
