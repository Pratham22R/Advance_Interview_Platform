"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 text-center px-6 bg-gradient-to-br from-black via-neutral-900 to-blue-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Simplify Your <span className="text-[#0ba380]">Technical Hiring</span>
        </h1>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
          EvalMeet is the all‑in‑one platform to schedule interviews, code in real time,
          record sessions, and collect feedback — all in one seamless interface.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/sign-in?redirect_url=/home"
            className="bg-[#0ba380] text-white px-6 py-3 rounded-full shadow-xl hover:bg-[#0a926f] transition"
          >
            Try EvalMeet
          </Link>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Watch Demo
          </button>
        </div>
      </motion.div>

      <div className="mt-20 flex justify-center">
        <div className="relative w-full max-w-5xl p-2 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden">
          <Image
            src="/hero.png"
            alt="EvalMeet IDE Preview"
            width={960}
            height={540}
            className="w-full h-auto rounded-[10px] shadow-[0_10px_50px_rgba(56,189,248,0.3)]"
          />
          <div
            className="absolute inset-0 rounded-[10px] pointer-events-none"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
