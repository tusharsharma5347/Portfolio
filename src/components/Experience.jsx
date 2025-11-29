import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
                        Experience. <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb347] to-[#ffcc33]">
                            Academic and Professional.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Here it is !!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl font-bold">Education</h3>
                        <div className="border-l-2 border-gray-800 pl-6 py-2">
                            <h4 className="text-xl font-semibold">IIIT Una</h4>
                            <p className="text-gray-400">B.Tech in Information Technology</p>
                            <p className="text-gray-500 text-sm">2022 - 2026</p>
                            <p className="text-gray-500 text-sm">CGPA: 8.85</p>
                        </div>
                        <div className="border-l-2 border-gray-800 pl-6 py-2">
                            <h4 className="text-xl font-semibold">Senior Secondary</h4>
                            <p className="text-gray-400">CBSE</p>
                            <p className="text-gray-500 text-sm">2020 - 2021</p>
                            <p className="text-gray-500 text-sm">Percentage: 95%</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl font-bold">Work</h3>
                        <div className="border-l-2 border-gray-800 pl-6 py-2">
                            <h4 className="text-xl font-semibold">Full Stack Developer Intern</h4>
                            <p className="text-gray-400">AP Health and Wellness</p>
                            <p className="text-gray-500 text-sm">March 2025 - July 2025</p>
                            <p className="text-gray-500 text-sm">-- Developed the homepage, enhanced backend functionalities, and integrated cloud infrastructure using Amazon Web Services (AWS) like AWS S3 and AWS Lambda to deliver a highly scalable web application.</p>
                            <p className="text-gray-500 text-sm">-- Integrated Shopify RESTful and GraphQL APIs to enhance performance, enabling the platform to handle data for
                                over 1000+ active users with low latency.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
