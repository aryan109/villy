"use client";

import React from "react";
import { Check, Shield, Sparkles, ArrowRight, Zap, Bell, Globe, FileCheck } from "lucide-react";

interface PricingProps {
  onOpenFreeCase: () => void;
}

export default function Pricing({ onOpenFreeCase }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Fair, Transparent Protection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            First Case Free. Then 24/7 Protection for $100/mo.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Take down your first stolen asset immediately with zero risk. Upgrade to our Guardian subscription to autonomously monitor the web and take down future piracy as soon as it appears.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {/* TIER 1: FIRST CASE FREE */}
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Launch Offer
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-[11px] font-mono font-bold text-white uppercase">
                  100% Free
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">First Case Free</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Perfect for creators experiencing their first unauthorized leak or stolen file.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-white font-mono">$0</span>
                <span className="text-xs font-mono text-zinc-500 uppercase">/ one-time case</span>
              </div>

              <div className="space-y-3.5 pt-6 border-t border-zinc-900 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>1 Complete Statutory DMCA Notice</strong> compiled & served</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Cryptographic evidence hash & ownership verification</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Dispatched to target hosting provider & abuse desk</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Live Case Tracking reference ID (`VLY-XXXX`)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Google de-indexing submission for infringing link</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900">
              <button
                onClick={onOpenFreeCase}
                className="w-full py-3.5 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Claim First Free Case
              </button>
              <p className="text-[11px] text-center text-zinc-500 mt-2.5 font-mono">
                No credit card required. Instant processing.
              </p>
            </div>
          </div>

          {/* TIER 2: $100/MO GUARDIAN (FEATURED) */}
          <div className="relative rounded-2xl bg-zinc-950 border-2 border-white p-8 flex flex-col justify-between shadow-2xl scale-[1.02] z-10">
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Most Popular • 24/7 Automated Guardian</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  Continuous Shield
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-black text-[11px] font-mono font-bold uppercase">
                  Auto-Enforcement
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VILLY Guardian Pro</h3>
              <p className="text-xs text-zinc-400 mb-6">
                We continuously crawl the web for your stolen content and automatically issue notices on your behalf.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-white font-mono">$100</span>
                <span className="text-xs font-mono text-zinc-400 uppercase">/ month</span>
              </div>

              <div className="space-y-3.5 pt-6 border-t border-zinc-800 text-xs text-zinc-200">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>24/7 Autonomous Web & Social Crawling:</strong> Constant search across cyberlockers, forums & mirror sites</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Up to 50 Automated Takedown Notices / mo:</strong> Dispatched instantly upon detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Reverse Image & Text Fingerprinting:</strong> Deep visual matching even if files are renamed or cropped</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Search Engine De-listing:</strong> Automated removal from Google, Bing, and Lumen</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Priority Host Escalation:</strong> Cloudflare, AWS, OVH, and offshore hoster escalation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Instant Notifications:</strong> Instant alert whenever someone attempts to distribute your work</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <button
                onClick={() => {
                  alert("VILLY $100/mo Guardian subscription checkout simulated. First claim your free case to test the system!");
                }}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Subscribe to Guardian Pro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-zinc-400 mt-2.5 font-mono">
                Cancel anytime. 30-day money-back resolution guarantee.
              </p>
            </div>
          </div>

          {/* TIER 3: ENTERPRISE */}
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Media & Studios
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-zinc-300 uppercase">
                  Custom Fleet
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Shield</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Tailored for large digital catalogs, software publishers, video courses & game studios.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-white font-mono">$499+</span>
                <span className="text-xs font-mono text-zinc-500 uppercase">/ month</span>
              </div>

              <div className="space-y-3.5 pt-6 border-t border-zinc-900 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Unlimited Automated Takedowns</strong> across all global platforms</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Dedicated IP Paralegal & Human Legal Review</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Custom Anti-Piracy API, Webhooks & Automated Ingestion</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>P2P Torrent Swarm Poisoning & Torrent Delisting</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Custom Legal Cease & Desist letters with litigation escalation</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900">
              <button
                onClick={() => {
                  alert("Enterprise Shield inquiry submitted. An IP specialist will contact you within 2 business hours.");
                }}
                className="w-full py-3.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Contact Enterprise Team
              </button>
              <p className="text-[11px] text-center text-zinc-500 mt-2.5 font-mono">
                Custom SLA & Master Services Agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
