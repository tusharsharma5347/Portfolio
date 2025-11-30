import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                            <div className="space-y-4">
                                <a href="mailto:tushar@example.com" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                                    <Mail size={20} />
                                    <span>tusharshwork@gmail.com</span>
                                </a>
                                <div className="flex gap-4 mt-8">
                                    <a href="https://www.linkedin.com/in/tushar53/" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://github.com/tusharsharma5347" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://x.com/tusharsharma996" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                    placeholder="Hello..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
