export interface TakedownCase {
  id: string;
  title: string;
  category: "Photography" | "Video & Film" | "Code & Software" | "Course & E-Book" | "Art & Illustration" | "Music & Audio" | "Brand Asset";
  infringingUrl: string;
  platform: string;
  submittedAt: string;
  status: "verified" | "dispatched" | "platform_review" | "resolved" | "escalated";
  statusText: string;
  progressPercent: number;
  timeline: {
    title: string;
    description: string;
    timestamp: string;
    completed: boolean;
  }[];
}

export const INITIAL_TRACKING_CASES: Record<string, TakedownCase> = {
  "VLY-1042": {
    id: "VLY-1042",
    title: "Mastering React 19 Video Course Modules",
    category: "Course & E-Book",
    infringingUrl: "https://warez-courses-leaks.net/dl/react19-full-hd.zip",
    platform: "Offshore File Hoster & CloudFlare",
    submittedAt: "2 hours ago",
    status: "dispatched",
    statusText: "DMCA Notice Dispatched to Host & CDN",
    progressPercent: 55,
    timeline: [
      {
        title: "Infringement Evidence Analyzed",
        description: "Cryptographic hash & timestamp verified against original GitHub repository and Gumroad store.",
        timestamp: "Today, 10:14 AM",
        completed: true,
      },
      {
        title: "Statutory 17 U.S.C. § 512(c) Notice Compiled",
        description: "Formal Cease and Desist drafted citing copyright registration and sworn ownership declaration.",
        timestamp: "Today, 10:32 AM",
        completed: true,
      },
      {
        title: "Dispatched to Host, Registrar & Cloudflare",
        description: "Official takedown transmitted to abuse@cloudflare.com and server hosting provider.",
        timestamp: "Today, 11:05 AM",
        completed: true,
      },
      {
        title: "Host Takedown & Index Delisting",
        description: "Awaiting host confirmation or initiating 48-hour upstream ISP escalation.",
        timestamp: "Estimated in 6 hours",
        completed: false,
      },
    ],
  },
  "VLY-8839": {
    id: "VLY-8839",
    title: "Architectural 3D Render Library (120+ Assets)",
    category: "Art & Illustration",
    infringingUrl: "https://pirate-assets.ru/cgi-bin/download.php?id=83921",
    platform: "MegaUpload Clone / Mirror",
    submittedAt: "Yesterday",
    status: "resolved",
    statusText: "Successfully Taken Down & 404 Returned",
    progressPercent: 100,
    timeline: [
      {
        title: "Infringement Evidence Analyzed",
        description: "EXIF metadata and polygon geometry matches creator original files.",
        timestamp: "Yesterday, 02:20 PM",
        completed: true,
      },
      {
        title: "DMCA Notice Dispatched",
        description: "Notice served with DMCA agent verification.",
        timestamp: "Yesterday, 02:45 PM",
        completed: true,
      },
      {
        title: "Platform Compliance Verified",
        description: "Hosting provider removed the file container.",
        timestamp: "Yesterday, 07:15 PM",
        completed: true,
      },
      {
        title: "Google Search Delisting Completed",
        description: "Search results de-indexed under Lumen DMCA clearinghouse.",
        timestamp: "Today, 03:00 AM",
        completed: true,
      },
    ],
  },
  "VLY-5521": {
    id: "VLY-5521",
    title: "Commercial SaaS UI Design System (Figma & Code)",
    category: "Code & Software",
    infringingUrl: "https://github.com/leaked-source-rep/saas-dashboard-clone",
    platform: "GitHub Public Repository",
    submittedAt: "3 days ago",
    status: "resolved",
    statusText: "Repository Disabled via GitHub Legal",
    progressPercent: 100,
    timeline: [
      {
        title: "Evidence Ingested",
        description: "AST token matches proprietary closed-source codebase.",
        timestamp: "Oct 1, 09:12 AM",
        completed: true,
      },
      {
        title: "GitHub DMCA Notice Filed",
        description: "Filed via GitHub DMCA repository takedown queue.",
        timestamp: "Oct 1, 09:30 AM",
        completed: true,
      },
      {
        title: "Repository Disabled",
        description: "GitHub legal processed claim and published notice to DMCA repo.",
        timestamp: "Oct 1, 01:15 PM",
        completed: true,
      },
    ],
  },
};

export const MOCK_SCAN_RESULTS = [
  {
    target: "unauthorized-courses-free.to/dl/villy-leak",
    risk: "Critical",
    infringementType: "Complete Unauthorized Mirror",
    platform: "Direct Download / Cloudflare Proxy",
    fingerprintMatch: "99.4%",
    action: "Eligible for Free Instant Takedown",
  },
  {
    target: "pinterest.com/pin/1092847291847192",
    risk: "High",
    infringementType: "Commercial Repost without Attribution",
    platform: "Social Media Platform",
    fingerprintMatch: "97.8%",
    action: "Eligible for Free Instant Takedown",
  },
  {
    target: "gumroad-resellers.shop/products/item-928",
    risk: "Critical",
    infringementType: "Fraudulent Resale & Payment Interception",
    platform: "Shopify / Stripe Merchant",
    fingerprintMatch: "100%",
    action: "Immediate Cease & Desist Required",
  },
  {
    target: "ai-training-dataset-scrape.io/dump/creator-vol1",
    risk: "Medium",
    infringementType: "Non-Consensual Commercial AI Scraping",
    platform: "AI Data Aggregator",
    fingerprintMatch: "94.1%",
    action: "Opt-Out & Data Deletion Demand",
  },
];
