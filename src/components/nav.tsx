"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import profileImg from "@/../public/profile.jpg";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
    { href: "/#projects", label: "projects" },
    { href: "/uses", label: "uses" },
    { href: "/cv", label: "cv" },
];

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="relative z-20 flex items-center justify-between py-5 px-6 max-w-5xl mx-auto w-full">
            <Link
                href="/"
                className="flex items-center gap-2.5 group"
                aria-label="Home"
                onClick={closeMenu}
            >
                <Image
                    src={profileImg}
                    alt="Rahul Pal"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                    quality={80}
                    priority={false}
                />
                <span className="text-sm font-semibold text-(--color-text) group-hover:opacity-70 transition-opacity">
                    Rahul Pal
                </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
                {LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-(--color-text-secondary) hover:text-(--color-text) transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
                <ThemeToggle />
            </div>

            <div className="flex lg:hidden items-center gap-2">
                <ThemeToggle />
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsOpen((open) => !open)}
                    className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-(--color-text) transition-opacity hover:opacity-70"
                >
                    <span
                        className={`h-px w-4 bg-current transition-transform ${
                            isOpen ? "translate-y-[3px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`h-px w-4 bg-current transition-transform ${
                            isOpen ? "-translate-y-[3px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            {isOpen ? (
                <div
                    id="mobile-menu"
                    className="absolute left-6 right-6 top-full mt-2 lg:hidden border border-(--color-border) bg-(--color-bg) shadow-lg"
                >
                    <div className="flex flex-col py-2">
                        {LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="px-4 py-3 text-sm text-(--color-text-secondary) hover:text-(--color-text) transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
