"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, Clock, ShieldCheck, AlertCircle, ArrowRight, ExternalLink, RefreshCw, FileText } from "lucide-react";
import { TakedownCase, INITIAL_TRACKING_CASES } from "@/lib/mockData";

interface CaseTrackerProps {
  customCases?: Record<string, TakedownCase>;
  selectedCaseId?: string;
  onOpenFreeCase: () => void;
}

export default function CaseTracker({ customCases = {}, selectedCaseId, onOpenFreeCase }: CaseTrackerProps) {
  const allCases = { ...INITIAL_TRACKING_CASES, ...customCases };
  const [searchInput, setSearchInput] = useState(selectedCaseId || "VLY-1042");
  const [activeCaseId, setActiveCaseId] = useState(selectedCaseId || "VLY-1042");
  const [errorMsg, setErrorMsg] = useState("");

  const currentCase: TakedownCase | undefined = allCases[activeCaseId];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = searchInput.trim().toUpperCase();
    if (!cleanId) return;

    if (allCases[cleanId]) {
      setActiveCaseId(cleanId);
      setErrorMsg("");
    } else {
      setErrorMsg(`No active case found for "${cleanId}". Check your Case ID or submit a new case.`);
    }
  };

  const handleSelectCase = (id: string) => {
    setActiveCaseId(id);
    setSearchInput(id);
    setErrorMsg("");
  };

  return (
    <section id="tracker" className="py-20 md:py-32 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Live Enforcement Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Track Your Takedown Progress
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every notice dispatched by VILLY receives an auditable statutory tracking record. Enter your Case ID below to monitor platform compliance in real time.
          </p>
        </div>

        {/* Search Bar & Quick Case Selectors */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2 p-2 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl">
            <div className="relative w-full flex items-center">
              <Search className="w-4 h-4 text-zinc-500 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter Case ID (e.g. VLY-1042)..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-transparent pl-11 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shrink-0"
            >
              Lookup Case
            </button>
          </form>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs font-mono text-zinc-500">
            <span>Sample Cases:</span>
            {Object.keys(allCases).slice(0, 4).map((id) => (
              <button
                key={id}
                onClick={() => handleSelectCase(id)}
                className={`px-2.5 py-1 rounded border text-[11px] transition-colors ${
                  activeCaseId === id
                    ? "bg-white text-black border-white font-bold"
                    : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                }`}
              >
                {id}
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>{errorMsg}</span>
              <button
                onClick={onOpenFreeCase}
                className="text-white underline font-semibold ml-2"
              >
                File Free Case
              </button>
            </div>
          )}
        </div>

        {/* Case Details Card */}
        {currentCase ? (
          <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8">
            {/* Top metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-1 rounded bg-black border border-zinc-700 text-xs font-mono font-bold text-white">
                    {currentCase.id}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase">
                    • {currentCase.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    • Filed {currentCase.submittedAt}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {currentCase.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1 break-all">
                  Target Host: {currentCase.platform}
                </p>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-[11px] font-mono uppercase text-zinc-500">Current Status</span>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-white mt-1">
                  <span className={`w-2 h-2 rounded-full ${currentCase.progressPercent === 100 ? "bg-white" : "bg-zinc-400 animate-pulse"}`} />
                  <span>{currentCase.statusText}</span>
                </div>
              </div>
            </div>

            {/* Target URL Box */}
            <div className="py-4 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <span className="font-mono text-zinc-500 uppercase text-[11px]">Infringing URL:</span>
              <span className="font-mono text-zinc-300 break-all bg-black px-2.5 py-1 rounded border border-zinc-900">
                {currentCase.infringingUrl}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="py-6 border-b border-zinc-800">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>Enforcement Completion</span>
                <span className="text-white font-bold">{currentCase.progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${currentCase.progressPercent}%` }}
                />
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
                Statutory Action Log & Milestones
              </h4>

              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-px before:bg-zinc-800">
                {currentCase.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        item.completed
                          ? "bg-white text-black"
                          : "bg-zinc-900 border border-zinc-700 text-zinc-500"
                      }`}
                    >
                      {item.completed ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                    </div>
                    <div className="space-y-0.5 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                          [{item.timestamp}]
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 font-mono">
                Official DMCA Statutory Record under 17 U.S.C. § 512
              </span>
              <button
                onClick={() => alert(`Certificate of Service for Case ${currentCase.id} verified. Legal hash: SHA256-${currentCase.id.toLowerCase()}-verified.`)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-600 text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Service Certificate</span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
