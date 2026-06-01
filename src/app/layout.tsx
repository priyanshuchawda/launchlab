import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  description:
    "Turn one startup goal into a guided test queue, landing variant, and result signal.",
  title: "LaunchLab — AI Experiment Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <body>
        <SkipLink />
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
