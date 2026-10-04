"use client";

import React, { useState, useEffect } from "react";
import OfferBanner from "@/components/OfferBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScannerDemo from "@/components/ScannerDemo";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CaseTracker from "@/components/CaseTracker";
import DmcaNoticePreview from "@/components/DmcaNoticePreview";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FreeCaseWizard from "@/components/FreeCaseWizard";
import { TakedownCase } from "@/lib/mockData";

export default function Home() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [userCases, setUserCases] = useState<Record<string, TakedownCase>>({});
  const [selectedCaseId, setSelectedCaseId] = useState<string>("VLY-1042");

  // Load any previously created cases from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("villy_user_cases");
      if (stored) {
        setUserCases(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCaseCreated = (newCase: TakedownCase) => {
    const updated = { ...userCases, [newCase.id]: newCase };
    setUserCases(updated);
    setSelectedCaseId(newCase.id);
    try {
      localStorage.setItem("villy_user_cases", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenFreeCase = (infringingUrl?: string) => {
    setIsWizardOpen(true);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewTracker = (caseId: string) => {
    setSelectedCaseId(caseId);
    handleScrollTo("tracker");
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Top Banner highlighting First Case Free */}
      <OfferBanner onOpenFreeCase={() => handleOpenFreeCase()} />

      {/* Sticky Navigation */}
      <Navbar
        onOpenFreeCase={() => handleOpenFreeCase()}
        onScrollTo={handleScrollTo}
      />

      {/* Hero Section */}
      <Hero
        onOpenFreeCase={() => handleOpenFreeCase()}
        onScrollTo={handleScrollTo}
      />

      {/* Interactive Infringement Scanner Simulator */}
      <ScannerDemo
        onOpenFreeCase={handleOpenFreeCase}
        onScrollToPricing={() => handleScrollTo("pricing")}
      />

      {/* How It Works (3-step enforcement pipeline) */}
      <HowItWorks onOpenFreeCase={() => handleOpenFreeCase()} />

      {/* Pricing: First Case Free ($0) + $100/mo Guardian */}
      <Pricing onOpenFreeCase={() => handleOpenFreeCase()} />

      {/* Live Case Tracker */}
      <CaseTracker
        customCases={userCases}
        selectedCaseId={selectedCaseId}
        onOpenFreeCase={() => handleOpenFreeCase()}
      />

      {/* Interactive Statutory DMCA Notice Preview & Generator */}
      <DmcaNoticePreview />

      {/* Deep Technical Features */}
      <Features />

      {/* Creator Proof & Case Studies */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ onOpenFreeCase={() => handleOpenFreeCase()} />

      {/* Comprehensive Footer */}
      <Footer
        onOpenFreeCase={() => handleOpenFreeCase()}
        onScrollTo={handleScrollTo}
      />

      {/* Interactive Modal: Submit Free First Case */}
      <FreeCaseWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onCaseCreated={handleCaseCreated}
        onViewTracker={handleViewTracker}
      />
    </main>
  );
}
