import { motion } from "framer-motion";
import { DevIcon } from "./DevIcon";

const colorMap = {
    python: "text-blue-400",
    sql: "text-cyan-400",
    javascript: "text-yellow-400",
    airflow: "text-teal-400",
    fastapi: "text-emerald-400",
    mlflow: "text-blue-500",
    prophet: "text-orange-400",
    prometheus: "text-orange-600",
    grafana: "text-amber-500",
    docker: "text-blue-400",
    githubactions: "text-indigo-450",
    git: "text-rose-500"
};

function SkillCard({ skill }) {
    const iconColor = colorMap[skill.icon] || "text-slate-450";

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-slate-900/60 backdrop-blur border border-slate-800/80 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-700/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition duration-300 relative overflow-hidden"
        >
            {/* Glowing Accent Border */}
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${skill.color} opacity-30 group-hover:opacity-100 transition duration-300`}></div>

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-850 group-hover:border-slate-750 transition duration-300">
                <DevIcon type={skill.icon} className={`w-6 h-6 ${iconColor}`} />
            </div>

            {/* Skill Name */}
            <div>
                <h4 className="text-slate-200 group-hover:text-white font-semibold transition text-sm sm:text-base">
                    {skill.name}
                </h4>
            </div>
        </motion.div>
    );
}

export default SkillCard;