import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoAdvisor UK | Trusted Automotive Professionals Directory",
  description:
    "Find verified automotive professionals across the UK. Sales Executives, Service Advisors, and Independent Specialists you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-[var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
