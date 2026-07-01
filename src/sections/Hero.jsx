import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import profile from "../data/profile";
import stats from "../data/stats";
import heroImage from "../assets/profile.png";

const titles = ["Python Developer", "Data Engineer", "MLOps Engineer"];

function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 relative overflow-hidden pt-20">
            {/* Background Grid Pattern & Ambient Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-5000"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full py-12">
                
                {/* Left Side Content - Span 7 */}
                <motion.div
                    className="lg:col-span-7"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Available for Trainee / Junior Roles
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">{profile.name}</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="h-16 mt-4 flex items-center">
                        <span className="text-2xl sm:text-3xl font-bold text-slate-300 mr-2">I am a</span>
                        <div className="relative overflow-hidden h-full flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={titleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
                                >
                                    {titles[titleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-slate-300 mt-6 leading-relaxed text-base sm:text-lg max-w-xl">
                        {profile.description}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
                        >
                            Get In Touch
                            <FaArrowRight size={14} />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
                        >
                            <FaDownload size={14} />
                            Resume
                        </a>

                        <div className="flex gap-2">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition duration-200"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition duration-200"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Metric Row */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-900/60 max-w-2xl">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col">
                                <span className="text-3xl font-extrabold text-white bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </span>
                                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side Image - Span 5 */}
                <motion.div
                    className="lg:col-span-5 flex justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
                >
                    {/* Glowing Backdrop Ring */}
                    <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 filter blur-xl opacity-20 animate-pulse pointer-events-none"></div>
                    
                    <div className="relative p-2 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-400 to-indigo-400">
                        <img
                            src={heroImage}
                            alt="Amar H"
                            className="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-slate-950 bg-slate-900 shadow-2xl relative z-10"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;