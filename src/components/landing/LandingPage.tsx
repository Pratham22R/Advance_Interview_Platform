"use client";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
