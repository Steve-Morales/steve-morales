import React, { useState, useEffect } from "react";

export default function TableOfContents({ sections }) {
    const [activeSection, setActiveSection] = useState("");

    // default sections if none provided
    sections = sections?sections : [{id: "", title: ""}]

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-10% 0px -60% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
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
                            onClick={(e) => handleClick(e, section.id)}
                            className={`text-base sm:text-xl md:text-2xl transition-all duration-300 ease-in-out ${
                                activeSection === section.id
                                    ? "text-blue-300 font-bold underline scale-105"
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