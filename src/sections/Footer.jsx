import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import social from "../data/social";

function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Amarnath H.
                    </span>
                    <span className="text-sm text-slate-500">
                        Python Developer & MLOps / Data Engineer
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                    <a href="#about" className="hover:text-cyan-400 transition">About</a>
                    <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                    <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
                    <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
                </div>

                {/* Social links */}
                <div className="flex gap-4">
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href={`mailto:${social.email}`}
                        className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition"
                        aria-label="Email"
                    >
                        <FaEnvelope size={18} />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-900/60 text-center text-xs text-slate-600">
                &copy; {new Date().getFullYear()} Amarnath H. All rights reserved. Built with React, Tailwind CSS & Framer Motion.
            </div>
        </footer>
    );
}

export default Footer;