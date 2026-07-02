export const SITE = {
  name: "rahulpal.dev",
  title: "Rahul Pal — Full Stack AI Developer",
  description:
    "Full Stack AI Developer building scalable web apps and agentic AI products with Next.js, React, TypeScript, Node.js, and Python.",
  url: "https://rahulpal.dev",
  email: "dev.rahul.code@gmail.com",
  cv: "/cv",
  ogImage: "/images/og-image.jpg",
} as const

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/rahulholkar16",
    label: "GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rahulpal01",
    label: "LinkedIn profile",
  },
] as const

export const EXPERIENCE = [
  {
    role: "Full Stack Intern",
    company: "CloudTrains Global",
    period: "JUNE 2026 — Present",
    description: "Contributing to full-stack development of the CloudTrain Global site, building reliable, user-focused features in a collaborative team environment.",
  },
] as const

export type Project = {
  name: string
  description: string
  url: string
  sourceUrl?: string
  tech: string[]
  status?: string
}

export const PROJECTS: Project[] = [
  {
    name: "Repo Mind",
    description:
      "Agentic AI system that autonomously analyzes GitHub repositories using LangChain agents, multi-step reasoning, and tool orchestration. Includes a RAG pipeline with Pinecone, Google Generative AI embeddings, and PostgreSQL-backed persistent memory.",
    url: "https://repo-mind-rose.vercel.app/dashboard",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Groq",
      "Pinecone",
      "PostgreSQL",
    ],
    status: "2026",
  },
  {
    name: "Code Master",
    description:
      "A LeetCode-inspired coding platform with problem filtering, role-based access control, and an interactive code execution workspace. Uses Redis and BullMQ for async job queuing.",
    url: "https://github.com/rahulholkar16/Code-Master",
    sourceUrl: "https://github.com/rahulholkar16/Code-Master",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Redis",
      "BullMQ",
    ],
    status: "Ongoing",
  },
  {
    name: "Mind Vault",
    description:
      "Full-stack productivity app with JWT authentication, role-based access control, and HTTP-only cookie security. RESTful APIs for content management with lazy loading and optimized routing.",
    url: "https://mindvault-kappa.vercel.app/",
    tech: ["React.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS", "JWT"],
    status: "2026",
  },
  {
    name: "Path Shala",
    description:
      "Multi-role LMS backend with JWT auth for Admin, Instructor, and Student roles. Course management APIs with search, filtering, pagination, and Cloudinary media integration.",
    url: "https://pathshal-fr.onrender.com/",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    status: "2025",
  },
  {
    name: "AI Quiz App",
    description:
      "AI-powered quiz generation backend using Google Gemini API with submission tracking, result evaluation, and user progress analytics.",
    url: "https://ai-quiz-frontend-red.vercel.app/",
    tech: ["Node.js", "Express.js", "MongoDB", "Gemini API", "JWT"],
    status: "2025",
  },
]

export const CV_SKILLS = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    label: "AI/ML",
    items: ["LangChain", "LangGraph", "RAG", "Vector Databases", "Agentic AI"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "Pinecone"],
  },
  {
    label: "State & Validation",
    items: ["Zustand", "Zod", "TanStack Query"],
  },
  {
    label: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    label: "CS Fundamentals",
    items: ["Data Structures & Algorithms"],
  },
] as const

export const CV_EDUCATION = [
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Accurate Institute of Management & Technology",
    location: "Noida, Uttar Pradesh",
    period: "Aug. 2023 – May 2027",
    gpa: "CGPA: 7.5",
  },
] as const

export const ACHIEVEMENTS = [
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
] as const
