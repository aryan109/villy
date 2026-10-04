"use client";

import React, { useState } from "react";
import { Shield, Menu, X, Search, FileText, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  onOpenFreeCase: () => void;
  onScrollTo: (id: string) => void;
}

export default function Navbar({ onOpenFreeCase, onScrollTo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Scanner", id: "scanner" },
    { label: "How It Works", id: "how-it-works" },
    { label: "$100 Subscription", id: "pricing" },
    { label: "Case Tracker", id: "tracker" },
    { label: "DMCA Preview", id: "notice-preview" },
    { label: "FAQ", id: "faq" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-black font-black text-xl tracking-tighter shadow-sm transition-transform group-hover:scale-105">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-widest text-lg text-white font-mono uppercase">
              VILLY
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider -mt-1 uppercase">
              Copyright Shield
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onScrollTo("tracker")}
            className="px-3.5 py-1.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-xs font-medium text-zinc-300 hover:text-white transition-all bg-zinc-900/50"
          >
            Track Status
          </button>
          <button
            onClick={onOpenFreeCase}
            className="px-4 py-1.5 rounded-lg bg-white text-black font-semibold text-xs tracking-wide hover:bg-zinc-200 transition-all shadow-sm"
          >
            Start First Case Free
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenFreeCase}
            className="px-3 py-1 rounded bg-white text-black font-semibold text-xs"
          >
            Free Case
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left py-2 text-sm text-zinc-300 hover:text-white font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick("tracker")}
              className="w-full py-2 text-center rounded border border-zinc-700 text-sm text-zinc-300 font-medium"
            >
              Track Existing Case
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreeCase();
              }}
              className="w-full py-2.5 text-center rounded bg-white text-black font-semibold text-sm"
            >
              Claim Free First Case ($0)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
