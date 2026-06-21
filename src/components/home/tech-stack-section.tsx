import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { CV_SKILLS } from "@/lib/constants";

const TECH_ICONS: Record<string, string> = {
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

export function TechStackSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <SectionLabel number="04">Tech Stack</SectionLabel>
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
                                        {TECH_ICONS[item] ? (
                                            <Image
                                                src={TECH_ICONS[item]}
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
    );
}
