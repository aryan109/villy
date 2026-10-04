"use client";

import React from "react";
import { Shield, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenFreeCase: () => void;
  onScrollTo: (id: string) => void;
}

export default function Footer({ onOpenFreeCase, onScrollTo }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white text-black font-black flex items-center justify-center text-lg font-mono">
                V
              </div>
              <span className="font-extrabold text-white text-base tracking-widest font-mono">
                VILLY
              </span>
            </div>
            <p className="text-zinc-500 leading-relaxed text-xs">
              Autonomous copyright monitoring, reverse perceptual hashing, and automated DMCA & Cease-and-Desist enforcement for creators and digital companies.
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                Launch Offer: First Case Free ($0)
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs uppercase tracking-wider font-semibold">
              Enforcement
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={onOpenFreeCase} className="hover:text-white transition-colors">
                  File Free Takedown Case
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("scanner")} className="hover:text-white transition-colors">
                  Infringement Scanner Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("tracker")} className="hover:text-white transition-colors">
                  Case Status Lookup
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("notice-preview")} className="hover:text-white transition-colors">
                  Statutory DMCA Notice Preview
                </button>
              </li>
            </ul>
          </div>

          {/* Pricing & Protection */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs uppercase tracking-wider font-semibold">
              Plans & Services
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onScrollTo("pricing")} className="hover:text-white transition-colors">
                  $100/mo Guardian Pro Subscription
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("pricing")} className="hover:text-white transition-colors">
                  Enterprise Anti-Piracy Shield
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("how-it-works")} className="hover:text-white transition-colors">
                  3-Phase Enforcement Workflow
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("faq")} className="hover:text-white transition-colors">
                  DMCA Compliance & Rights
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs uppercase tracking-wider font-semibold">
              Legal & Disclaimers
            </h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              VILLY compiles and transmits statutory notices pursuant to Title 17, United States Code, Section 512. VILLY is an intellectual property automation tool and legal technology platform. No attorney-client relationship is created.
            </p>
            <div className="flex gap-4 text-zinc-500 text-[11px] pt-1">
              <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-zinc-300 cursor-pointer">DMCA Safe Harbor</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} VILLY Intelligence Ltd. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
