import { SectionLabel } from "@/components/section-label";
import { ACHIEVEMENTS } from "@/lib/constants";

export function AchievementsSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <SectionLabel number="05">Achievements</SectionLabel>
            <div className="space-y-6">
                {ACHIEVEMENTS.map((achievement, index) => (
                    <div
                        key={achievement.title}
                        className="grid grid-cols-[auto_1fr] gap-6 items-start py-5 border-b border-(--color-border) last:border-0"
                    >
                        <span className="display text-xl text-(--color-text-muted) leading-none w-6 tabular-nums">
                            {String(index + 1).padStart(2, "0")}
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
    );
}
