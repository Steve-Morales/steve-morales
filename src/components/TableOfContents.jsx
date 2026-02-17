import React, { useState, useEffect } from "react";

export default function TableOfContents({ sections }) {
    const [activeSection, setActiveSection] = useState("");

    // default sections if none provided
    sections = sections?sections : [{id: "", title: ""}]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -70% 0px",
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    return (
        <nav className="flex flex-col sticky top-0">
            <h2 className="font-bold py-4 sm:text-xl md:text-2xl lg:text-4xl text-white">
                Table of Contents
            </h2>
            <ul className="space-y-2">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className={`text-base sm:text-xl md:text-2xl transition-colors ${
                                activeSection === section.id
                                    ? "text-blue-300 font-bold underline"
                                    : "text-blue-400 hover:text-blue-300 hover:underline"
                            }`}
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};