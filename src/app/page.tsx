// src/app/page.tsx
"use client";

import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-black dark:to-neutral-900 text-gray-900 dark:text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Advance Interview Platform
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          Schedule, conduct, and manage interviews seamlessly — built for modern teams.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/sign-in?redirect_url=/home"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg transition-all text-base"
          >
            Sign In <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/sign-up?redirect_url=/home"
            className="inline-flex items-center gap-2 border border-sky-600 text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-900 font-medium px-6 py-3 rounded-lg transition-all text-base"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}
