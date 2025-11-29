import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Me</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        I am a final year Information Technology undergraduate at IIIT Una, passionate about building software that solves real-world problems.
                        With a strong foundation in Data Structures and Algorithms, and hands-on experience in full-stack development,
                        I enjoy creating intuitive and performant web applications.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies, warching yes watching not playin cricket,
                        or maybe thinking of some random startup idea.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
