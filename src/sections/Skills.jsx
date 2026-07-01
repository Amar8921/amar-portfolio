import { motion } from "framer-motion";
import skills from "../data/skills";
import SkillCard from "../components/SkillCard";
import SectionTitle from "../components/SectionTitle";

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section
            id="skills"
            className="py-28 max-w-6xl mx-auto px-6 relative overflow-hidden"
        >
            <SectionTitle
                title="Technical Stack"
                subtitle="The tools, languages, and frameworks I use to build scalable systems"
            />

            <motion.div 
                className="space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {skills.map((group) => (
                    <motion.div
                        key={group.category}
                        variants={sectionVariants}
                        className="space-y-4"
                    >
                        {/* Category Heading */}
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-slate-300 uppercase tracking-widest text-sm">
                                {group.category}
                            </h3>
                            <div className="h-[1px] bg-slate-800 flex-grow"></div>
                        </div>

                        {/* Grid of skill cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {group.items.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Skills;