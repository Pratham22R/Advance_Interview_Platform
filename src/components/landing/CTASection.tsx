"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-neutral-900 to-blue-900 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to level up your tech hiring?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Start using EvalMeet today or talk to our team to see how we can support your hiring process.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Link
            href="/sign-in?redirect_url=/home"
            className="inline-flex items-center gap-2 bg-[#0ba380] hover:bg-[#0a9274] text-white font-medium px-6 py-3 rounded-xl transition-all text-base shadow-lg"
          >
            Get Started
          </Link>
          <button className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 rounded-xl transition-all text-base">
            Talk to Sales
          </button>
        </div>
      </motion.div>
    </section>
  );
}
