import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Dynamic list of categories
    const categories = ["All", ...new Set(projects.map((p) => p.category))];

    // Filter projects
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <section
            id="projects"
            className="py-28 max-w-7xl mx-auto px-6"
        >
            <SectionTitle
                title="Featured Projects"
                subtitle="A showcase of pipelines, forecasting engines, and developer utilities"
            />

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold relative transition duration-300 ${
                            selectedCategory === cat
                                ? "text-slate-950 font-bold"
                                : "text-slate-400 hover:text-slate-200 bg-slate-900/40 border border-slate-800/80"
                        }`}
                    >
                        {selectedCategory === cat && (
                            <motion.span
                                layoutId="activeProjectTab"
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl z-0"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div 
                layout
                className="grid md:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

export default Projects;