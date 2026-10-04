import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VILLY — Digital Copyright Protection & Automated DMCA Enforcement",
  description: "Protect your creative work and intellectual property. Autonomous copyright crawling, automated DMCA takedowns, and cease-and-desist notices. First case 100% free.",
  keywords: ["DMCA takedown", "copyright infringement", "content protection", "anti-piracy", "creators IP protection", "cease and desist", "VILLY"],
  authors: [{ name: "VILLY Intelligence" }],
  openGraph: {
    title: "VILLY — Copyright & Digital Asset Protection",
    description: "Hunt down stolen content and get infringing files removed fast. First takedown case is free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
