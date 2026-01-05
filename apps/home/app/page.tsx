import Audience from "@/components/Audience";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Audience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
