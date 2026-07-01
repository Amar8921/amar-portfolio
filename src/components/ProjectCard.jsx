import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="group bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col h-full"
        >
            {/* Image Container with Zoom effect */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550 ease-out"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                </span>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-slate-400 mt-3 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-slate-950 text-slate-300 border border-slate-850 px-2.5 py-0.5 rounded-md text-xs font-mono"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-900/80">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-semibold transition"
                    >
                        <FaGithub size={16} />
                        Code
                    </a>

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 text-sm font-semibold transition"
                        >
                            <FaLink size={14} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;