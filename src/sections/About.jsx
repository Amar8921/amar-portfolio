import { motion } from "framer-motion";
import { FaGraduationCap, FaBullseye, FaUser } from "react-icons/fa";

import about from "../data/about";
import SectionTitle from "../components/SectionTitle";

function About() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section
            id="about"
            className="py-28 bg-slate-950 relative overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <SectionTitle
                    title={about.title}
                    subtitle="A little about me and my trajectory"
                />

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Biography Text - Span 7 */}
                    <motion.div
                        className="lg:col-span-7 space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        {/* Who I Am */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-slate-900/60 backdrop-blur border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700/80 transition duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <FaUser size={16} />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Who I Am
                                </h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {about.introduction}
                            </p>
                        </motion.div>

                        {/* Career Goal */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-slate-900/60 backdrop-blur border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700/80 transition duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                    <FaBullseye size={16} />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Career Goal
                                </h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {about.mission}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Mock IDE Editor Code Window - Span 5 */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                            {/* Window Header */}
                            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/60 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                </div>
                                <span className="text-slate-500">amar_h.py</span>
                            </div>

                            {/* Window Code Editor Content */}
                            <div className="p-6 space-y-2 text-slate-400 select-none">
                                <p><span className="text-pink-400">class</span> <span className="text-emerald-400">Developer</span>:</p>
                                <p className="pl-4"><span className="text-pink-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-400">self</span>):</p>
                                <p className="pl-8"><span className="text-orange-400">self</span>.name = <span className="text-teal-400">"Amarnath H"</span></p>
                                <p className="pl-8"><span className="text-orange-400">self</span>.role = <span className="text-teal-400">"Data & MLOps Engineer"</span></p>
                                <p className="pl-8"><span className="text-orange-400">self</span>.loc = <span className="text-teal-400">"Kerala, India"</span></p>
                                <br />
                                <p className="pl-4"><span className="text-pink-400">def</span> <span className="text-blue-400">get_tech_stack</span>(<span className="text-orange-400">self</span>):</p>
                                <p className="pl-8"><span className="text-pink-400">return</span> &#91;</p>
                                <p className="pl-12"><span className="text-teal-400">"Python"</span>, <span className="text-teal-400">"SQL"</span>, <span className="text-teal-400">"FastAPI"</span>,</p>
                                <p className="pl-12"><span className="text-teal-400">"Airflow"</span>, <span className="text-teal-400">"MLflow"</span>, <span className="text-teal-400">"Docker"</span>,</p>
                                <p className="pl-12"><span className="text-teal-400">"Grafana"</span>, <span className="text-teal-400">"Prometheus"</span></p>
                                <p className="pl-8">&#93;</p>
                                <br />
                                <p className="text-slate-600"># Currently processing financial forecasting</p>
                                <p className="text-slate-600"># pipelines and optimizing MLOps triggers...</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Education */}
                <div className="mt-20">

                    <h3 className="text-2xl font-bold text-center text-white mb-12">
                        Education Background
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">

                        {about.education.map((edu, idx) => (

                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/60 backdrop-blur rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700/80 transition group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
                                        <FaGraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-slate-400 mt-2 font-medium">
                                            {edu.year}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;