import type { Metadata } from "next";
import { AboutSection } from "@/components/home/about-section";
import { AchievementsSection } from "@/components/home/achievements-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { SITE } from "@/lib/constants";

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

export default function HomePage() {
    return (
        <div className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <TechStackSection />
            <AchievementsSection />
        </div>
    );
}
