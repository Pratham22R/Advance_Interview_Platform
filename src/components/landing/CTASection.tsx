"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-tr from-black via-neutral-900 to-black text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-[#0ba380] uppercase tracking-wide text-sm font-medium mb-3">
          Get Started
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to level up your tech hiring?
        </h3>
        <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">
          Start using EvalMeet today or talk to our team to see how we can support your hiring process.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center flex-wrap gap-4 max-w-3xl mx-auto"
      >
        <Link
          href="/sign-in?redirect_url=/home"
          className="inline-flex items-center gap-2 bg-[#0ba380] hover:bg-[#0a9274] text-white font-medium px-6 py-3 rounded-xl transition-all text-base shadow-lg backdrop-blur-md"
        >
          Get Started
        </Link>
        <button className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white hover:text-black hover:bg-white transition-all font-medium px-6 py-3 rounded-xl text-base shadow-md backdrop-blur-md">
          Talk to Sales
        </button>
      </motion.div>
    </section>
  );
}
