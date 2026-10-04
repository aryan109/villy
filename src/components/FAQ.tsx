"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FAQProps {
  onOpenFreeCase: () => void;
}

export default function FAQ({ onOpenFreeCase }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 'First Case Free' launch promotion work?",
      a: "You can submit any single URL or platform hosting your stolen copyrighted content. VILLY will verify the evidence, format a statutory DMCA Notice under 17 U.S.C. § 512, dispatch it directly to the host's abuse desk, and provide you with a real-time tracking ID. No credit card or commitment is required.",
    },
    {
      q: "What is included in the $100/month VILLY Guardian subscription?",
      a: "Our $100/month plan is a continuous, automated anti-piracy shield. We continuously crawl 45M+ web pages, forums, and cyberlockers using perceptual image and code hashing. As soon as unauthorized mirrors or leaked downloads of your assets appear, VILLY automatically prepares and dispatches statutory takedown notices without you needing to manually hunt them down.",
    },
    {
      q: "What types of creative work and data does VILLY protect?",
      a: "We protect all digital intellectual property, including video courses, eBooks, photography portfolios, proprietary source code, 3D models and shaders, UI kits, digital illustrations, podcasts/music, and unauthorized AI training dataset scrapers.",
    },
    {
      q: "How fast does an infringing file get taken down?",
      a: "Most major web hosts (Cloudflare, AWS, Google Cloud, DigitalOcean, Hetzner) and social platforms (YouTube, Instagram, Reddit, GitHub) comply within 12 to 24 hours of receiving a formal DMCA notice. Search engine de-indexing requests via Google Lumen typically take 24 to 72 hours.",
    },
    {
      q: "What if the pirate website is located on an offshore host?",
      a: "Offshore cyberlockers often try to ignore informal emails. VILLY tracks down their DNS routing, upstream network transit providers, and ICANN domain registrars. If the host refuses, we serve the registrar and upstream transit carrier, and remove the link from all major search engines so no traffic can reach the pirated copy.",
    },
    {
      q: "Do I need a registered US Copyright Office certificate to file a takedown?",
      a: "No. Under international and US copyright law (Berne Convention and 17 U.S.C. § 102), your work is copyrighted the exact moment it is created in tangible form. You do not need formal registration to issue binding DMCA takedown notices.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our takedown technology, the Free First Case offer, and our $100/mo Guardian monitoring plan.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-zinc-300 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Card in FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a live infringement right now?</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Don&apos;t let pirate sites siphon your income. Get your first takedown executed today at zero cost.
            </p>
          </div>
          <button
            onClick={onOpenFreeCase}
            className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shrink-0"
          >
            Claim Free Takedown
          </button>
        </div>
      </div>
    </section>
  );
}
