"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Indie Game Developer & Asset Creator",
      asset: "Unity & Unreal Shader Toolkits",
      quote: "A rogue Russian site was selling my full 3D asset package and collecting payments via crypto. I submitted the URL under VILLY's free first case. The file link was dead within 14 hours and de-indexed from Google.",
      outcome: "100% Removed • $0 Spent on First Case",
    },
    {
      name: "Sarah Lin",
      role: "Digital Illustrator & Concept Artist",
      asset: "Original Fantasy Illustration Prints",
      quote: "Someone took my entire high-res portfolio, printed it onto t-shirts, and listed them on mock storefronts. VILLY's notice cited 17 U.S.C. § 512 and had all listings deleted within 24 hours. The $100/mo plan is a no-brainer for full peace of mind.",
      outcome: "Enforced Across 6 Rogue Storefronts",
    },
    {
      name: "David K.",
      role: "Full-Stack Instructor & Author",
      asset: "Advanced Cloud Architecture Masterclass",
      quote: "My $350 video course was leaked across Mega and Telegram cyberlockers. Before VILLY, sending manual emails felt like shouting into the void. VILLY automated the statutory notices and de-indexed every single pirate search link.",
      outcome: "18 Pirate Mirrors Neutralized",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>Verified Creator Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Protecting Creators Worldwide
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            See how creators and developers recovered their revenue and wiped unauthorized distributions using VILLY.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-4">
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">
                    Verified Resolution
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed italic mb-6">
                  &quot;{r.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{r.name}</h4>
                    <p className="text-[11px] text-zinc-400">{r.role}</p>
                  </div>
                </div>
                <div className="mt-3 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300 inline-block">
                  {r.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
