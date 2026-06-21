import { ProjectItem } from "@/components/project-item";
import { SectionLabel } from "@/components/section-label";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="max-w-5xl mx-auto px-6 py-16 sm:py-20"
        >
            <SectionLabel number="03">Selected Work</SectionLabel>
            <div>
                {PROJECTS.map((project, index) => (
                    <ProjectItem
                        key={project.name}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
