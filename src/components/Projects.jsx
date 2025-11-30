import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "KrishiConnect",
            subtitle: "E-commerce Platform for Agricultural Products",
            description: "React • Node.js • MongoDB • Stripe • TailwindCSS • Tailwind CSS",
            image: "bg-gray-100", // Placeholder for image
            link: "https://github.com/tusharsharma5347/KrishiConnect"
        },
        {
            title: "Epicurean Explorer",
            subtitle: "",
            description: "React • Node.js • MongoDB • Stripe • TailwindCSS • Gemini AI",
            image: "bg-gray-100",
            link: "https://github.com/tusharsharma5347/Epicurean-Explorer"
        },
        {
            title: "StockPredict",
            subtitle: "Stock Market Prediction",
            description: "Python • Streamlit • Machine Learning • Version Control • Google Colab",
            image: "bg-gray-100",
            link: "https://github.com/tusharsharma5347/StockPredict"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
                    The latest. <span className="text-gray-400">Take a look.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[400px] flex flex-col p-8 border border-gray-100"
                        >
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-3xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                {project.subtitle && <p className="text-lg text-gray-500 mb-4 font-medium">{project.subtitle}</p>}
                                <p className="text-gray-600 mb-6 leading-relaxed flex-1">{project.description}</p>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.link} className="text-[#0071e3] hover:underline flex items-center gap-1 text-sm font-medium">
                                        Github <ChevronRight size={14} />
                                    </a>
                                    <a href={project.link} className="text-[#0071e3] hover:underline flex items-center gap-1 text-sm font-medium">
                                        View Demo(Currently Not Available) <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
