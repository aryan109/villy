"use client";

import React from "react";
import { ShieldAlert, ArrowRight, Sparkles } from "lucide-react";

interface OfferBannerProps {
  onOpenFreeCase: () => void;
}

export default function OfferBanner({ onOpenFreeCase }: OfferBannerProps) {
  return (
    <div className="w-full bg-zinc-950 border-b border-zinc-800 text-zinc-300 py-2.5 px-4 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2.5 justify-center">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-white text-black">
            Limited Launch Offer
          </span>
          <span className="text-zinc-200 font-medium">
            First Copyright Infringement Case is <strong className="text-white underline decoration-zinc-500">100% Free</strong>. No credit card required.
          </span>
        </div>
        <button
          onClick={onOpenFreeCase}
          className="group inline-flex items-center gap-1.5 text-white hover:text-zinc-300 font-medium transition-colors"
        >
          <span>Claim Free Takedown</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
