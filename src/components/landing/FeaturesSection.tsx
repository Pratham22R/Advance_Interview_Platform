"use client";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    { icon: "💻", title: "Live IDE", desc: "Real-time collaborative coding with multi-language support." },
    { icon: "📅", title: "Smart Scheduling", desc: "Built-in scheduling with reminders and calendar sync." },
    { icon: "🎥", title: "Session Recording", desc: "Record interviews to review or share with panelists." },
    { icon: "📝", title: "Candidate Feedback", desc: "Score and review candidates with structured forms." },
  ];

  return (
    <section className="py-24 bg-gradient-to-tr from-black via-neutral-900 to-black text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-sky-400 uppercase tracking-wide text-sm font-medium mb-3">
          Platform Features
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Everything You Need for Technical Interviews
        </h3>
        <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">
          Built to help you conduct better interviews, collaborate live, and hire smarter.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 + i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-md hover:shadow-[#0ba380]/30 transition hover:-translate-y-1 backdrop-blur-md"
          >
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="text-xl font-semibold text-white">{title}</h4>
            <p className="mt-2 text-white/70 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
