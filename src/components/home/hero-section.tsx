import Image from "next/image";
import Link from "next/link";
import profileImg from "@/../public/profile.jpg";
import { SocialIcon } from "@/components/social-icon";
import { SITE, SOCIALS } from "@/lib/constants";

export function HeroSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 pt-10 sm:pt-16 pb-20 sm:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-12 lg:gap-16 items-center">
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
                        Developer<span className="text-(--color-accent)">.</span>
                    </h1>

                    <p className="fade-up delay-3 text-base sm:text-lg text-(--color-text-secondary) leading-relaxed max-w-md mb-6">
                        I build products people actually use — and I care about
                        every part of that experience.{" "}
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
                        <span className="hidden sm:inline text-(--color-border)">/</span>
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 font-mono text-sm tracking-wide text-(--color-text-muted) hover:text-(--color-text) transition-colors"
                                aria-label={social.label}
                            >
                                <SocialIcon
                                    name={social.name}
                                    className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100"
                                />
                                <span>{social.name}</span>
                                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                </span>
                            </a>
                        ))}
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
    );
}
