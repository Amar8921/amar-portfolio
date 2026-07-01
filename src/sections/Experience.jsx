import experience from "../data/experience";
import TimelineCard from "../components/TimelineCard";
import SectionTitle from "../components/SectionTitle";

function Experience() {
    return (
        <section
            id="experience"
            className="py-28 bg-slate-950 relative overflow-hidden"
        >
            {/* Glow Accent */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Work Experience"
                    subtitle="My professional journey and trainee development milestones"
                />

                <div className="mt-12 relative border-slate-800">
                    {experience.map((item) => (
                        <TimelineCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;