import { motion } from "framer-motion";

function TimelineCard({ item }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 sm:pl-10 pb-12 border-l-2 border-slate-800/80 last:pb-0"
        >
            {/* Timeline Pulsing Node */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-slate-950 border-2 border-cyan-400 rounded-full z-10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping absolute"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
            </div>

            {/* Content card */}
            <div className="bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur border border-slate-850 hover:border-slate-800/80 rounded-2xl p-6 sm:p-8 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400">
                            {item.role}
                        </h3>
                        <p className="text-slate-400 font-medium mt-1">
                            {item.company}
                        </p>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-cyan-400 text-xs font-semibold self-start sm:self-center font-mono">
                        {item.duration}
                    </span>
                </div>

                <ul className="mt-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed list-none">
                    {item.description.map((point, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                            <span className="text-cyan-500 font-bold mt-1.5 shrink-0 select-none">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech tags used in this job */}
                {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-950/60">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-slate-950 text-slate-400 border border-slate-900 px-2 py-0.5 rounded text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default TimelineCard;