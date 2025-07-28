"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden font-sans">

      {/* 🔵 HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            EvalMeet
          </Link>

          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition px-5 py-2 rounded-full text-sm font-medium shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* 🎯 HERO */}
      <section className="pt-32 pb-24 text-center px-6 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Simplify Your <span className="text-purple-400">Technical Hiring</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
            EvalMeet is the all‑in‑one platform to schedule interviews, code in real time,
            record sessions, and collect feedback — all in one seamless interface.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/sign-in?redirect_url=/home"
              className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-purple-600 transition"
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
              src="/chatbox-preview.png"
              alt="EvalMeet IDE Preview"
              width={960}
              height={540}
              className="w-full h-auto rounded-[10px] shadow-[0_10px_50px_rgba(56,189,248,0.3)]"
            />
            {/* Bottom fade overlay */}
            <div className="absolute inset-0 rounded-[10px] pointer-events-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
              }}
            />
          </div>
        </div>


      </section>

      {/* 🔥 FEATURES */}
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
          {[
            {
              title: "Live IDE",
              desc: "Real-time collaborative coding with multi-language support.",
              icon: "💻",
            },
            {
              title: "Smart Scheduling",
              desc: "Built-in scheduling with reminders and calendar sync.",
              icon: "📅",
            },
            {
              title: "Session Recording",
              desc: "Record interviews to review or share with panelists.",
              icon: "🎥",
            },
            {
              title: "Candidate Feedback",
              desc: "Score and review candidates with structured forms.",
              icon: "📝",
            },
          ].map(({ title, desc, icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + i * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-md hover:shadow-purple-500/30 transition hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold text-white">{title}</h4>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 📊 STATS */}
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
          {[
            { stat: "500K+", label: "Interviews Conducted" },
            { stat: "1M+", label: "Code Submissions" },
            { stat: "1,000+", label: "Hiring Teams" },
          ].map(({ stat, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + i * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 w-[220px] shadow-md hover:shadow-sky-500/20 transition hover:-translate-y-1"
            >
              <h4 className="text-3xl font-bold text-purple-400">{stat}</h4>
              <p className="mt-2 text-sm text-white/70">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 🚀 CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-center px-6">
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
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl transition-all text-base shadow-lg"
            >
              Get Started
            </Link>
            <button className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 rounded-xl transition-all text-base">
              Talk to Sales
            </button>
          </div>
        </motion.div>
      </section>

      {/* 🔚 MODERN FOOTER */}
      <footer className="relative bg-gradient-to-tr from-black via-neutral-900 to-black text-center text-white/70 px-6 pt-24 pb-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-black to-blue-700/20 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-xl font-bold text-white mb-4">EvalMeet</h3>
            <p className="text-sm leading-relaxed mb-4">
              A modern platform to run and manage your technical interviews with real-time IDE,
              scheduling, feedback and recording — all in one seamless experience.
            </p>
            <p className="text-white/40 text-sm">contact@evalmeet.com</p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Product</Link></li>
              <li><Link href="#" className="hover:text-white transition">Use Cases</Link></li>
              <li><Link href="#" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">About</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="inline-flex items-center gap-2 hover:text-white transition"><span>🔗</span> LinkedIn</Link></li>
              <li><Link href="#" className="inline-flex items-center gap-2 hover:text-white transition"><span>🐦</span> Twitter</Link></li>
              <li><Link href="#" className="inline-flex items-center gap-2 hover:text-white transition"><span>💻</span> GitHub</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-white/40">
          © {new Date().getFullYear()} EvalMeet, Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
