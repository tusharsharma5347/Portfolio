import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C/C++", "Python", "JavaScript", "Go (Golang)"]
        },
        {
            title: "Technologies/Frameworks",
            skills: ["HTML5", "CSS3", "React.js", "Node.js", "Next.js", "Express.js", "WordPress", "Flask", "Docker"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQL/NoSQL"]
        },
        {
            title: "Developer Tools",
            skills: ["Git", "Github", "VS Code", "PyCharm", "Anaconda", "AWS", "CI/CD (Github Actions, Vercel)"]
        },
        {
            title: "Other Skills",
            skills: ["Windows", "Linux", "Unix (MacOS)", "Debugging", "System Design (Basic)", "Agile"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        Skills.
                    </h2>
                    <p className="text-xl text-gray-500">
                        The tools of my trade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
