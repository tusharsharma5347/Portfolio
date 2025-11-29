import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const extensions = [".js", ".cpp", ".go", ".py", ".tsx"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % extensions.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 relative overflow-hidden bg-[#fbfbfd]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl md:text-8xl font-semibold tracking-tight text-gray-900 mb-2">
                        Hello World !!
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-900 mb-8 font-medium">
                        Welcome to my portfolio.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#experience"
                            className="px-6 py-2 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] transition-colors duration-300 text-sm md:text-base"
                        >
                            Experience
                        </a>
                        <a
                            href="#projects"
                            className="px-6 py-2 rounded-full border border-[#0071e3] text-[#0071e3] font-medium hover:bg-blue-50 transition-colors duration-300 text-sm md:text-base"
                        >
                            Projects
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* MacBook Visual */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative w-full max-w-4xl mx-auto px-4"
            >
                {/* Screen Top (Lid) */}
                <div className="relative bg-black rounded-t-[2rem] p-2 shadow-2xl border-[4px] border-gray-800 mx-auto w-[80%] md:w-[90%] aspect-[16/10] flex items-center justify-center overflow-hidden">
                    {/* Screen Content */}
                    <div className="w-full h-full bg-gray-900 rounded-t-[1.5rem] relative overflow-hidden flex items-center justify-center">
                        {/* Wallpaper / Content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-80"></div>

                        {/* Dynamic Text */}
                        <div className="relative z-10 text-center">
                            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter flex items-center justify-center">
                                TUSHAR
                                <span className="w-[120px] md:w-[200px] text-left ml-2">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gray-400 inline-block"
                                        >
                                            {extensions[index]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Camera Notch (Dynamic Island style) */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                </div>

                {/* Base (Bottom) */}
                <div className="relative mx-auto w-full h-4 md:h-6 bg-gray-300 rounded-b-xl shadow-xl mt-[-2px] border-t border-gray-400 flex justify-center">
                    {/* Trackpad indentation */}
                    <div className="w-1/3 h-full border-l border-r border-gray-400/30"></div>
                </div>
                {/* Shadow under laptop */}
                <div className="mx-auto w-[90%] h-4 bg-black/20 blur-xl rounded-full mt-2"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
