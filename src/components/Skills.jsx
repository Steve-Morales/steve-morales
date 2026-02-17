import React from 'react';
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiGit, SiLinux, SiDocker, SiAmazonaws, SiBitbucket } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillsData = [
    {
        category: "Languages",
        items: [
            { name: "C++", icon: <SiCplusplus className="text-5xl" />, color: "text-blue-500", highlighted: true },
            { name: "Python", icon: <SiPython className="text-5xl" />, color: "text-yellow-400", highlighted: true },
            { name: "Java", icon: <FaJava className="text-5xl" />, color: "text-red-500" },
            { name: "JavaScript", icon: <SiJavascript className="text-5xl" />, color: "text-yellow-300" },
        ]
    },
    {
        category: "Technologies & Tools",
        items: [
            { name: "Git/GitLab", icon: <SiGit className="text-5xl" />, color: "text-orange-500", highlighted: true },
            { name: "Bitbucket", icon: <SiBitbucket className="text-5xl" />, color: "text-blue-500" },
            { name: "Linux", icon: <SiLinux className="text-5xl" />, color: "text-gray-200", highlighted: true },
            { name: "Docker", icon: <SiDocker className="text-5xl" />, color: "text-blue-400" },
            { name: "AWS EC2", icon: <SiAmazonaws className="text-5xl" />, color: "text-orange-400", highlighted: true },
            { name: "React", icon: <SiReact className="text-5xl" />, color: "text-cyan-400" },
        ]
    }
];

export default function Skills() {
    return (
        <section className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Skills & Technologies</h2>
                    <p className="text-gray-400 text-lg">Core technical competencies from professional experience</p>
                </div>

                {skillsData.map((skillGroup, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">{skillGroup.category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {skillGroup.items.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-gray-800/50 border-2 ${skill.highlighted ? 'border-yellow-500' : 'border-gray-700'} rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 hover:scale-105 transition-all duration-300 group`}
                                >
                                    <div className={`${skill.color} group-hover:scale-110 transition-transform mb-3`}>
                                        {skill.icon}
                                    </div>
                                    <span className="text-gray-300 font-medium text-center">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="mt-12 bg-gradient-to-br from-blue-900/20 to-gray-800/20 border border-blue-500/30 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Additional Expertise</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-400">▸</span>
                            <p>Valgrind, GDB, Vim, VS Code</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-400">▸</span>
                            <p>GoogleTest, Unit Testing</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-400">▸</span>
                            <p>UDP Multicasting, N3N VPN</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-400">▸</span>
                            <p>CI/CD Pipelines (GitLab)</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-400">▸</span>
                            <p>ROS (Robot Operating System)</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-blue-400">▸</span>
                            <p>Unity, Mixed Reality Toolkit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
