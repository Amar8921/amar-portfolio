function StatCard({ value, label }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">

            <h2 className="text-3xl font-bold text-cyan-400">

                {value}

            </h2>

            <p className="text-slate-400 mt-2">

                {label}

            </p>

        </div>

    )

}

export default StatCard;