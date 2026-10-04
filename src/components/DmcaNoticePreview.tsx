"use client";

import React, { useState } from "react";
import { FileText, Copy, Check, Shield, Scale, ExternalLink } from "lucide-react";

export default function DmcaNoticePreview() {
  const [activeTab, setActiveTab] = useState<"dmca" | "cease_desist" | "search_delist">("dmca");
  const [copied, setCopied] = useState(false);

  const notices = {
    dmca: {
      title: "17 U.S.C. § 512(c) Statutory Web Host Notice",
      badge: "Standard DMCA Takedown",
      description: "Served directly to cloud providers, hosting companies, and abuse desks to force immediate removal under safe harbor compliance.",
      content: `VIA ELECTRONIC TRANSMISSION & REGISTERED AGENT DISPATCH

DATE: ${new Date().toLocaleDateString()}
TO: Designated Copyright Agent & Abuse Department
ENTITY / HOST: Cloudflare, Inc. / Server Hosting Network
RE: Statutory Notification of Copyright Infringement pursuant to 17 U.S.C. § 512(c)(3)

Dear Designated Agent:

This notification is formally transmitted by VILLY Intellectual Property Enforcement Intelligence on behalf of the exclusive copyright owner referenced below.

1. IDENTIFIED COPYRIGHTED WORK:
Title of Protected Work: "Full-Stack Distributed System Architecture Blueprint"
Original Canonical Source: https://author-creator.org/blueprints/v2
Copyright Registration / First Publication: 2024 / All Rights Reserved.

2. INFRINGING MATERIAL LOCATION (URL):
The following URL(s) are hosting or distributing unauthorized copies without license, consent, or attribution:
https://pirated-digital-warez.io/downloads/leaked-architecture-blueprint.zip
Server IP: 198.51.100.42 | Port: 443

3. INFRINGEMENT REMOVAL DEMAND:
Pursuant to Title 17, United States Code, Section 512(c), you are required to expeditiously remove or disable access to the infringing material referenced above to maintain qualification for the limitation on liability.

4. STATUTORY DECLARATION (17 U.S.C. § 512(c)(3)(A)(v)-(vi)):
- The undersigned has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
- The information in this notification is accurate, and under penalty of perjury, the undersigned states that VILLY is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.

ELECTRONIC SIGNATURE:
/s/ VILLY Automated Legal Takedown Network
On behalf of Verified Rights Holder
Case Reference: VLY-AUTO-ENFORCE-9901`,
    },
    cease_desist: {
      title: "Formal Commercial Cease & Desist Demand",
      badge: "Commercial Infringer Demand",
      description: "Sent directly to unauthorized resellers, pirate storefronts, or copycats profiting from stolen digital goods.",
      content: `LEGAL NOTICE & DEMAND TO CEASE AND DESIST
UNAUTHORIZED COMMERCIAL EXPLOITATION OF INTELLECTUAL PROPERTY

DATE: ${new Date().toLocaleDateString()}
VIA ELECTRONIC SERVICE & MERCHANT DISCLOSURE
TO: Operator / Merchant of unauthorized storefront

DEMAND SUMMARY:
It has come to our attention that you are commercially distributing, advertising, and selling digital assets owned exclusively by our client, without license, authorization, or commercial rights.

VIOLATIONS IDENTIFIED:
- Willful copyright infringement under 17 U.S.C. § 501
- Lanham Act Trademark infringement and false designation of origin (15 U.S.C. § 1125)
- Unfair commercial competition and unjust enrichment

STATUTORY REMEDIES:
Under federal copyright law, willful infringement carries statutory damages of up to $150,000 per registered work infringed (17 U.S.C. § 504(c)(2)), as well as full recovery of attorney's fees.

MANDATORY CORRECTIVE ACTIONS (REQUIRED WITHIN 48 HOURS):
1. Immediately remove all listings, download mirrors, and payment processing endpoints for the stolen assets.
2. Provide an accounting of all gross revenues received from unauthorized sales.
3. Certify permanent deletion of all master files and backups in your possession.

Failure to comply will result in immediate escalation to payment processors (Stripe, PayPal), upstream ISP deactivation, and formal legal proceedings.

VILLY Legal Enforcement Division
Counsel for Rights Holder`,
    },
    search_delist: {
      title: "Search Engine & De-Indexing Notice",
      badge: "Google & Bing Delisting",
      description: "Submitted to Google Search, Bing, and Lumen database to scrub pirate links from search engine index results.",
      content: `FORMAL SEARCH ENGINE EXPEDITED DE-INDEXING REQUEST
UNDER 17 U.S.C. § 512(d) (INFORMATION LOCATION TOOLS)

DATE: ${new Date().toLocaleDateString()}
TO: Google LLC / Microsoft Bing Search Legal Compliance
RE: Removal of Infringing Search Result Links

REQUEST SUMMARY:
The search engine results indexed by your service currently link to unauthorized copies of proprietary copyrighted material. We request prompt de-indexing pursuant to 17 U.S.C. § 512(d).

ORIGINAL COPYRIGHTED WORK:
Title: "Mastering TypeScript & Cloud Infrastructure 2025"
Canonical Author Link: https://creatorcourse.io/mastering-ts

SEARCH RESULT URLS TO REMOVE:
- https://torrent-index-mirror.org/torrent/83910283/mastering-ts-2025
- https://free-courses-download.xyz/post/mastering-typescript-cloud
- https://mega-course-links.net/view/ts-course-full-hd

SWORN DECLARATION:
I swear, under penalty of perjury, that I have a good faith belief that the display of these links in your search index facilitates willful copyright infringement.

VILLY Search Index Enforcement Protocol
Notice ID: VLY-DELIST-SEARCH-22`,
    },
  };

  const current = notices[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="notice-preview" className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Statutory DMCA Notices That Get Respected
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Unprofessional emails get ignored. VILLY drafts rigorous, legally compliant notices citing 17 U.S.C. § 512, ensuring web hosts take immediate action under federal safe harbor obligations.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-8">
          <button
            onClick={() => setActiveTab("dmca")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === "dmca"
                ? "bg-white text-black font-bold shadow-md"
                : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            17 U.S.C. § 512(c) Host Notice
          </button>
          <button
            onClick={() => setActiveTab("cease_desist")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === "cease_desist"
                ? "bg-white text-black font-bold shadow-md"
                : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            Commercial Cease & Desist
          </button>
          <button
            onClick={() => setActiveTab("search_delist")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === "search_delist"
                ? "bg-white text-black font-bold shadow-md"
                : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            Search De-indexing Notice
          </button>
        </div>

        {/* Notice Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-900 border border-zinc-700 text-white font-bold">
                  {current.badge}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  • 100% Statutory Compliance
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                {current.description}
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs font-mono text-white flex items-center gap-2 transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Notice Template</span>
                </>
              )}
            </button>
          </div>

          {/* Legal Code Block */}
          <div className="mt-6">
            <pre className="p-4 sm:p-6 bg-black border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
              {current.content}
            </pre>
          </div>

          {/* Statutory checklist footer */}
          <div className="mt-6 pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>512(c)(3)(A) Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Perjury Sworn Clause Included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Auto-Dispatched via Abuse API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
