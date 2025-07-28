"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-black via-neutral-900 to-black text-white/70 px-4 sm:px-6 pt-20 sm:pt-24 pb-10">
      {/* Teal Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0ba380]/20 via-black to-blue-700/20 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">EvalMeet</h3>
          <p className="text-sm leading-relaxed mb-4">
            A modern platform to run and manage your technical interviews with real-time IDE,
            scheduling, feedback and recording — all in one seamless experience.
          </p>
          <p className="text-white/40 text-sm break-words">contact@evalmeet.com</p>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-[#0ba380] transition">Product</Link></li>
            <li><Link href="#" className="hover:text-[#0ba380] transition">Use Cases</Link></li>
            <li><Link href="#" className="hover:text-[#0ba380] transition">Security</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-[#0ba380] transition">About</Link></li>
            <li><Link href="#" className="hover:text-[#0ba380] transition">Careers</Link></li>
            <li><Link href="#" className="hover:text-[#0ba380] transition">Privacy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Follow Us</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#" className="inline-flex items-center gap-2 hover:text-[#0ba380] transition">
                <span>🔗</span> LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-flex items-center gap-2 hover:text-[#0ba380] transition">
                <span>🐦</span> Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-flex items-center gap-2 hover:text-[#0ba380] transition">
                <span>💻</span> GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Credit */}
      <div className="relative z-20 mt-12 text-center text-sm text-white">
        Built by <span className="text-[#0ba380] font-semibold">Pratham</span> ❤️
      </div>

      {/* Copyright */}
      <div className="relative z-20 mt-2 text-center text-xs text-white/40">
        © {new Date().getFullYear()} EvalMeet, Inc. All rights reserved.
      </div>
    </footer>
  );
}
