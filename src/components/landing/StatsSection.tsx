"use client";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { stat: "500K+", label: "Interviews Conducted" },
    { stat: "1M+", label: "Code Submissions" },
    { stat: "1,000+", label: "Hiring Teams" },
  ];

  return (
    <section className="py-24 bg-black text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Trusted by Teams Worldwide
        </h3>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Interview smarter with EvalMeet — used by top hiring teams to streamline tech assessments.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {stats.map(({ stat, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 + i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 w-[220px] shadow-md hover:shadow-[0_0_20px_#0ba38044] transition hover:-translate-y-1"
          >
            <h4 className="text-3xl font-bold text-[#0ba380]">{stat}</h4>
            <p className="mt-2 text-sm text-white/70">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
