"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          EvalMeet
        </Link>
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 border border-[#0ba380]/60 text-[#0ba380]/60 hover:bg-[#0ba380]/60 hover:text-white transition px-5 py-2 rounded-full text-sm font-medium shadow-sm"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
