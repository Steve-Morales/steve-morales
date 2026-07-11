import React from "react";

export default function TableOfContents({ sections }) {
    // default sections if none provided
    sections = sections?sections : [{id: "", title: ""}]

    return (
        <nav className="flex flex-col sticky top-0">
            <h2 className="font-bold py-4 sm:text-xl md:text-2xl lg:text-4xl">
                Table of Contents
            </h2>
            <ul className="space-y-2">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className="text-base sm:text-xl md:text-2xl text-blue-500 hover:underline"
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};