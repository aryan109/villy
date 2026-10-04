"use client";

import React from "react";
import { Eye, ShieldCheck, Lock, Globe2, Fingerprint, SearchSlash, Cpu, Scale } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Fingerprint,
      title: "Reverse Media Fingerprinting",
      description: "Our proprietary perceptual hashing detects your photos, video clips, and 3D assets even when cropped, compressed, watermarked, or flipped by infringers.",
    },
    {
      icon: SearchSlash,
      title: "Google & Bing De-indexing",
      description: "We don't just target the pirate hosts. We immediately submit expedited de-indexing notices to ensure infringing links vanish from search engine results.",
    },
    {
      icon: Globe2,
      title: "Cloudflare & Proxy Origin Unmasking",
      description: "Pirate sites hide behind reverse proxies. VILLY bypasses proxy shields, identifies the real upstream hosting provider and data center, and dispatches notices directly.",
    },
    {
      icon: Cpu,
      title: "AI Training Dataset Takedowns",
      description: "Stop commercial AI model creators from scraping your proprietary writing, artwork, or code into training corpora without consent or licensing compensation.",
    },
    {
      icon: ShieldCheck,
      title: "Automated Evidence Preservation",
      description: "Every infringing webpage, mirror link, and file size is archived with SHA-256 cryptographic timestamps to provide court-admissible proof of willful infringement.",
    },
    {
      icon: Scale,
      title: "Statutory Safe Harbor Forfeiture",
      description: "We structure every notice with statutory precision. Web hosts must take down the content within 24–48 hours or lose immunity from direct copyright damages.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Industrial-Grade IP Protection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Built for Modern Creators & Digital Assets
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Standard legal methods take weeks and cost thousands. VILLY automates copyright discovery and enforcement with algorithmic precision.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-950 border border-zinc-800 p-7 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-500">
                  Feature 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
