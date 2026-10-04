"use client";

import React from "react";
import { Shield, ArrowRight, Search, FileCheck, CheckCircle2, Lock, Zap } from "lucide-react";

interface HeroProps {
  onOpenFreeCase: () => void;
  onScrollTo: (id: string) => void;
}

export default function Hero({ onOpenFreeCase, onScrollTo }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-zinc-800">
      {/* Background Grid & Subtle Vignette */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-radial-gradient opacity-30 pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-950/80 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-zinc-300">
              Automated Copyright Protection & Enforcement
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-sans">
            Someone Stole Your Work?{" "}
            <span className="block text-zinc-400 font-light mt-1">
              We Find It & Take It Down.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            <strong className="text-white font-medium">VILLY</strong> hunts down copyright infringements, illegal course mirrors, leaked code, and stolen creative assets across the web. We dispatch legally binding DMCA takedown notices and enforce removals.
          </p>

          {/* Key Launch Callouts / Offers */}
          <div className="w-full max-w-xl p-4 mb-10 rounded-xl bg-zinc-900/70 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white text-black mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Launch Promotion</p>
                <p className="text-sm font-semibold text-white">Your First Case Is 100% Free</p>
                <p className="text-xs text-zinc-400">Submit the stolen content URL. We prepare & dispatch the notice.</p>
              </div>
            </div>
            <div className="h-px sm:h-8 w-full sm:w-px bg-zinc-800" />
            <div className="text-left sm:text-right shrink-0">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Ongoing Shield</span>
              <span className="text-sm font-bold text-white">$100 / month</span>
              <span className="text-[11px] text-zinc-500 block">24/7 web scan & auto-notices</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenFreeCase}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg group"
            >
              <span>Submit Your Free Case</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onScrollTo("scanner")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Simulate Infringement Scan</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mt-16 pt-10 border-t border-zinc-900 w-full text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">98.6%</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Takedown Success</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">&lt; 24 Hrs</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Average Response</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">45M+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Scanned Pages/Day</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">17 U.S.C. § 512</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Statutory Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
