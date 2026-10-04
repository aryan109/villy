"use client";

import React from "react";
import { Search, FileCheck2, ShieldAlert, ArrowRight, Database, Globe, CheckCircle2 } from "lucide-react";

interface HowItWorksProps {
  onOpenFreeCase: () => void;
}

export default function HowItWorks({ onOpenFreeCase }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      title: "Crawl & Reverse Fingerprint",
      description: "Our crawlers scan cyberlockers, torrent swarms, social platforms, and unauthorized AI training datasets using perceptual hashing and code AST token matching.",
      details: ["Continuous 24/7 web scraping", "EXIF & perceptual hash matching", "Domain & IP infrastructure mapping"],
    },
    {
      num: "02",
      title: "Compile Statutory Notice",
      description: "VILLY drafts legally binding DMCA notices under 17 U.S.C. § 512 and commercial cease-and-desist demands containing required statutory perjury clauses and evidence.",
      details: ["Statutory safe harbor forfeiture notice", "Direct host & CDN abuse desk routing", "Digital signature & legal declaration"],
    },
    {
      num: "03",
      title: "Enforce Takedown & De-index",
      description: "We dispatch notices directly to server hosts, domain registrars, and cloud proxies. Concurrently, we submit expedited de-indexing requests to Google and Bing.",
      details: ["Average <24 hour host response", "Google Lumen database de-listing", "Live tracking & Certificate of Service"],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>The Enforcement Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            How VILLY Takes Down Infringements
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From detection to takedown, our automated legal infrastructure executes the entire enforcement lifecycle.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-white font-mono group-hover:scale-105 transition-transform inline-block">
                    {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-400">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <span className="text-zinc-500">—</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Phase {step.num}</span>
                <span className="text-white">Active Automation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenFreeCase}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-lg"
          >
            <span>Test With Your First Case Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
