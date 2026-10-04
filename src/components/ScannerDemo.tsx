"use client";

import React, { useState, useEffect } from "react";
import { Search, ShieldAlert, CheckCircle2, ArrowRight, Terminal, RefreshCw, AlertTriangle, ExternalLink, Zap } from "lucide-react";
import { MOCK_SCAN_RESULTS } from "@/lib/mockData";

interface ScannerDemoProps {
  onOpenFreeCase: (infringingUrl?: string) => void;
  onScrollToPricing: () => void;
}

export default function ScannerDemo({ onOpenFreeCase, onScrollToPricing }: ScannerDemoProps) {
  const [query, setQuery] = useState("learn-nextjs-pro.com");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [hasScanned, setHasScanned] = useState(false);

  const scanSteps = [
    "Initializing distributed crawler across 45M+ indexed repositories...",
    "Querying offshore cyberlocker indexes & pirate mirror directories...",
    "Analyzing reverse cryptographic fingerprints & watermarks...",
    "Parsing Google, Bing, and Lumen DMCA de-indexing databases...",
    "Infringement analysis complete: 4 unauthorized mirrors identified.",
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsScanning(true);
    setScanProgress(10);
    setCurrentStep(scanSteps[0]);
    setHasScanned(false);

    let progress = 10;
    const interval = setInterval(() => {
      progress += 20;
      if (progress <= 90) {
        setScanProgress(progress);
        const stepIndex = Math.min(Math.floor(progress / 25), scanSteps.length - 2);
        setCurrentStep(scanSteps[stepIndex]);
      } else {
        clearInterval(interval);
        setScanProgress(100);
        setCurrentStep(scanSteps[scanSteps.length - 1]);
        setTimeout(() => {
          setIsScanning(false);
          setHasScanned(true);
        }, 600);
      }
    }, 450);
  };

  return (
    <section id="scanner" className="py-20 md:py-28 bg-black border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Check If Your Content Is Leaked
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Test VILLY&apos;s infringement scanner. Enter your domain, course title, product name, or social handle to simulate our 24/7 web crawler surveillance.
          </p>
        </div>

        {/* Input Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleStartScan} className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl">
            <div className="relative w-full flex items-center">
              <Search className="w-5 h-5 text-zinc-500 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter domain, course name, brand, or creator handle..."
                className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-600 outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={isScanning}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <span>Scan Content</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
          <div className="flex items-center justify-between px-3 mt-2 text-[11px] font-mono text-zinc-500">
            <span>Try: <button type="button" onClick={() => setQuery("learn-nextjs-pro.com")} className="text-zinc-300 underline decoration-zinc-700">learn-nextjs-pro.com</button>, <button type="button" onClick={() => setQuery("@studio_lumina")} className="text-zinc-300 underline decoration-zinc-700">@studio_lumina</button>, <button type="button" onClick={() => setQuery("saas-starter-kit.dev")} className="text-zinc-300 underline decoration-zinc-700">saas-starter-kit.dev</button></span>
            <span>Simulated crawler</span>
          </div>
        </div>

        {/* Scanning State Terminal */}
        {isScanning && (
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl mb-12">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                  VILLY Deep Neural Crawler v2.4
                </span>
              </div>
              <span className="text-xs font-mono text-white font-bold">{scanProgress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-5">
              <div
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${scanProgress}%` }}
              />
            </div>

            <div className="p-4 rounded-xl bg-black border border-zinc-900 font-mono text-xs text-zinc-400 space-y-1.5">
              <p className="text-zinc-500">&gt; Target Query: &quot;{query}&quot;</p>
              <p className="text-white flex items-center gap-2">
                <span className="animate-spin text-zinc-400">/</span> {currentStep}
              </p>
            </div>
          </div>
        )}

        {/* Scan Results View */}
        {hasScanned && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Summary Banner */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Scan Report for &quot;{query}&quot;
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Found 4 potential unauthorized distributions across offshore mirrors & social indices.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-200">
                  Risk Level: HIGH
                </span>
              </div>
            </div>

            {/* Result items */}
            <div className="grid grid-cols-1 gap-4">
              {MOCK_SCAN_RESULTS.map((res, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-900 border border-zinc-700 text-white font-semibold">
                        {res.risk} Risk
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {res.fingerprintMatch} Hash Match
                      </span>
                      <span className="text-xs text-zinc-500">• {res.platform}</span>
                    </div>
                    <p className="text-sm font-semibold text-white font-mono break-all">
                      {res.target}
                    </p>
                    <p className="text-xs text-zinc-400">
                      Infringement Type: {res.infringementType}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-900">
                    <button
                      onClick={() => onOpenFreeCase(`https://${res.target}`)}
                      className="w-full md:w-auto px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      Take Down Free
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Upsell Banner to $100/mo */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Continuous Automated Protection
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  Never manually search for stolen files again.
                </h4>
                <p className="text-xs text-zinc-400 max-w-lg mt-1">
                  Our $100/mo subscription crawls continuously 24/7. When a match is detected, VILLY automatically issues statutory takedown notices without you lifting a finger.
                </p>
              </div>
              <button
                onClick={onScrollToPricing}
                className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs tracking-wide uppercase transition-all shrink-0"
              >
                View $100/Mo Guardian Plan
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
