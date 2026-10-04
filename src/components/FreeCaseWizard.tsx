"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Shield, FileText, Check, Lock, Sparkles, Copy } from "lucide-react";
import confetti from "canvas-confetti";
import { generateCaseId } from "@/lib/utils";
import { TakedownCase } from "@/lib/mockData";

interface FreeCaseWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onCaseCreated: (newCase: TakedownCase) => void;
  onViewTracker: (caseId: string) => void;
}

export default function FreeCaseWizard({ isOpen, onClose, onCaseCreated, onViewTracker }: FreeCaseWizardProps) {
  const [step, setStep] = useState(1);
  const [copiedNotice, setCopiedNotice] = useState(false);

  // Form State
  const [workTitle, setWorkTitle] = useState("");
  const [category, setCategory] = useState<TakedownCase["category"]>("Course & E-Book");
  const [originalUrl, setOriginalUrl] = useState("");
  const [creationDetails, setCreationDetails] = useState("");

  const [infringingUrl, setInfringingUrl] = useState("");
  const [platform, setPlatform] = useState("Offshore File Host / Direct Link");
  const [infringementNotes, setInfringementNotes] = useState("");

  const [claimantName, setClaimantName] = useState("");
  const [claimantEmail, setClaimantEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [swornDeclaration, setSwornDeclaration] = useState(true);

  // Completed State
  const [generatedCase, setGeneratedCase] = useState<TakedownCase | null>(null);

  if (!isOpen) return null;

  const categories: TakedownCase["category"][] = [
    "Course & E-Book",
    "Code & Software",
    "Photography",
    "Art & Illustration",
    "Video & Film",
    "Music & Audio",
    "Brand Asset",
  ];

  const platforms = [
    "Offshore File Host / Direct Link",
    "Social Media (Instagram, TikTok, X)",
    "YouTube / Streaming Mirror",
    "Pirate Blog / Torrent Index",
    "GitHub / Leaked Source Repository",
    "Telegram Channel / Cloud Drive",
    "Unauthorized AI Training Dataset",
  ];

  const handleNext = () => {
    if (step === 1 && (!workTitle.trim() || !originalUrl.trim())) {
      alert("Please provide the title of your work and the original link.");
      return;
    }
    if (step === 2 && !infringingUrl.trim()) {
      alert("Please provide the URL where your work is being illegally hosted.");
      return;
    }
    if (step === 3 && (!claimantName.trim() || !claimantEmail.trim() || !swornDeclaration)) {
      alert("Please fill in your legal name, contact email, and confirm the statutory declaration.");
      return;
    }
    setStep(step + 1);
  };

  const handleFinalSubmit = () => {
    const newCaseId = generateCaseId();
    const newCase: TakedownCase = {
      id: newCaseId,
      title: workTitle,
      category,
      infringingUrl,
      platform,
      submittedAt: "Just now",
      status: "dispatched",
      statusText: "DMCA Notice Dispatched to Host & Registrar",
      progressPercent: 50,
      timeline: [
        {
          title: "First Case Free Claim Received",
          description: `Logged claim for "${workTitle}" under VILLY Free Launch Offer.`,
          timestamp: "Just now",
          completed: true,
        },
        {
          title: "Statutory 17 U.S.C. § 512(c) Notice Compiled",
          description: `Formal legal notice drafted for claimant ${claimantName}.`,
          timestamp: "Just now",
          completed: true,
        },
        {
          title: "Notice Dispatched to Abuse Desk",
          description: `Automated transmission to target host abuse contact at ${infringingUrl.slice(0, 30)}...`,
          timestamp: "In progress",
          completed: true,
        },
        {
          title: "Removal Confirmation & Search De-indexing",
          description: "Target URL verification and Google DMCA removal queue.",
          timestamp: "Pending host compliance (Est. 12-24h)",
          completed: false,
        },
      ],
    };

    setGeneratedCase(newCase);
    onCaseCreated(newCase);

    // Trigger celebratory confetti in monochrome/silver style
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        colors: ["#ffffff", "#a1a1aa", "#52525b", "#d4d4d8"],
      });
    } catch (e) {
      // ignore
    }

    setStep(4);
  };

  const sampleNoticeText = `FORMAL DMCA TAKEDOWN NOTICE PURSUANT TO 17 U.S.C. § 512(c)

Date: ${new Date().toLocaleDateString()}
To: Designated Copyright Agent / Abuse Department for Host of ${infringingUrl || "[Infringing URL]"}

Dear Copyright Agent,

This letter serves as formal notification pursuant to Title 17, United States Code, Section 512(c)(3) (Digital Millennium Copyright Act), that content hosted on your network is infringing upon copyrighted intellectual property owned by the undersigned.

1. IDENTIFICATION OF COPYRIGHTED WORK:
Work Title: ${workTitle || "[Original Work Title]"}
Category: ${category}
Authorized Canonical Source: ${originalUrl || "[Original Work URL]"}

2. IDENTIFICATION OF INFRINGING MATERIAL TO BE REMOVED:
The following URL contains unauthorized copies, distributions, or mirrors of the protected work:
${infringingUrl || "[Infringing Content URL]"}

3. CONTACT INFORMATION OF COPYRIGHT HOLDER / AGENT:
Name: ${claimantName || "[Full Legal Name]"}
${companyName ? `Company: ${companyName}\n` : ""}Email: ${claimantEmail || "[Contact Email]"}
Authorized Agent Service: VILLY Intellectual Property Protection Intelligence

4. STATUTORY GOOD FAITH STATEMENTS:
I have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.

The information in this notification is accurate, and under penalty of perjury, I declare that I am the copyright owner or an agent authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.

ELECTRONIC SIGNATURE:
/s/ ${claimantName || "Authorized Claimant"}
Represented via VILLY Automated DMCA Enforcement Network`;

  const copyNotice = () => {
    navigator.clipboard.writeText(sampleNoticeText);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-white text-black font-mono font-bold flex items-center justify-center text-xs">
              01
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Submit Your First Case Free
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Launch Offer: $0 Cost • 1 Full DMCA Notice & Platform Dispatch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps indicator */}
        {step < 4 && (
          <div className="py-4 border-b border-zinc-900 flex items-center justify-between text-xs font-mono">
            <span className={step >= 1 ? "text-white font-bold" : "text-zinc-600"}>1. Original Work</span>
            <span className="text-zinc-700">→</span>
            <span className={step >= 2 ? "text-white font-bold" : "text-zinc-600"}>2. Infringer URL</span>
            <span className="text-zinc-700">→</span>
            <span className={step >= 3 ? "text-white font-bold" : "text-zinc-600"}>3. Legal Declaration</span>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="py-5 space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Title / Name of Copyrighted Work *
              </label>
              <input
                type="text"
                placeholder="e.g. Master React 19 Course, Photography Portfolio Vol 3, Proprietary Codebase"
                value={workTitle}
                onChange={(e) => setWorkTitle(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Work Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TakedownCase["category"])}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-zinc-900 text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Original Canonical URL / Proof of Ownership *
              </label>
              <input
                type="url"
                placeholder="https://yourwebsite.com/my-course or https://gumroad.com/l/product"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
              <p className="text-[11px] text-zinc-500 mt-1">
                Link to your original publication, portfolio, store, or repository demonstrating you are the creator.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Creation Date / Registration (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Published January 2024, US Copyright Reg #TX-0000000"
                value={creationDetails}
                onChange={(e) => setCreationDetails(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="py-5 space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Infringing Content URL (Target to Take Down) *
              </label>
              <input
                type="url"
                placeholder="https://pirate-site.net/download/stolen-content or https://instagram.com/p/..."
                value={infringingUrl}
                onChange={(e) => setInfringingUrl(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors font-mono"
              />
              <p className="text-[11px] text-zinc-500 mt-1">
                Provide the exact direct URL where the unauthorized copy or file download is hosted.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Host / Platform Classification
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
              >
                {platforms.map((p) => (
                  <option key={p} value={p} className="bg-zinc-900 text-white">
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Additional Infringement Evidence / Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific filenames, unauthorized price, stolen watermark, or how they copied your work..."
                value={infringementNotes}
                onChange={(e) => setInfringementNotes(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              />
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="py-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Johnathan Doe"
                  value={claimantName}
                  onChange={(e) => setClaimantName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                  Contact Email (For Status Updates) *
                </label>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  value={claimantEmail}
                  onChange={(e) => setClaimantEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1.5">
                Company / Studio / Alias (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Doe Media LLC / Studio Nine"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none"
              />
            </div>

            {/* Legal DMCA Perjury Check */}
            <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 space-y-2.5">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={swornDeclaration}
                  onChange={(e) => setSwornDeclaration(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-white rounded border-zinc-700 bg-zinc-800"
                />
                <span className="text-xs text-zinc-300 leading-relaxed">
                  I state under penalty of perjury under 17 U.S.C. § 512(c)(3) that I am the copyright owner or authorized to act on behalf of the owner, and that this notice is submitted in good faith.
                </span>
              </label>
            </div>

            <div className="p-3 rounded-lg border border-zinc-800 bg-black flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Electronic Signature:</span>
              <span className="text-white font-serif italic text-sm">/s/ {claimantName || "Your Full Legal Name"}</span>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMATION & CASE ID */}
        {step === 4 && generatedCase && (
          <div className="py-6 space-y-6 text-center">
            <div className="w-14 h-14 rounded-full bg-white text-black mx-auto flex items-center justify-center font-bold">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 mb-2">
                FREE CASE ACCEPTED • $0 BILLED
              </span>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Takedown Notice Successfully Dispatched
              </h4>
              <p className="text-sm text-zinc-400 max-w-md mx-auto mt-1">
                Your statutory DMCA notice has been compiled and transmitted to the abuse desk of the infringing host.
              </p>
            </div>

            {/* Case Badge Box */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="text-xs text-zinc-500 font-mono uppercase">Case Reference ID</span>
                <span className="text-sm font-mono font-bold text-white bg-black px-2.5 py-1 rounded border border-zinc-700">
                  {generatedCase.id}
                </span>
              </div>
              <div className="text-xs space-y-1 text-zinc-400">
                <p><strong className="text-zinc-200">Asset:</strong> {generatedCase.title}</p>
                <p><strong className="text-zinc-200">Infringing URL:</strong> <span className="font-mono text-zinc-300">{generatedCase.infringingUrl}</span></p>
                <p><strong className="text-zinc-200">Target Host:</strong> {generatedCase.platform}</p>
              </div>
            </div>

            {/* Notice Preview Accordion */}
            <div className="text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-zinc-400">Dispatched Notice Copy</span>
                <button
                  onClick={copyNotice}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white"
                >
                  <Copy className="w-3 h-3" />
                  {copiedNotice ? "Copied" : "Copy Legal Notice"}
                </button>
              </div>
              <pre className="p-3 bg-black border border-zinc-800 rounded-lg text-[11px] text-zinc-400 font-mono overflow-x-auto max-h-36 whitespace-pre-wrap select-all">
                {sampleNoticeText}
              </pre>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onViewTracker(generatedCase.id);
                }}
                className="flex-1 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                Track Live Progress Now
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 hover:text-white text-sm hover:bg-zinc-900 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        {step < 4 && (
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-600 text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">Step 1 of 3</span>
            )}

            <div className="flex items-center gap-3">
              {step < 3 ? (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
                >
                  Continue
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleFinalSubmit}
                  className="px-6 py-2.5 rounded-lg bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Dispatch Free Notice Now
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
