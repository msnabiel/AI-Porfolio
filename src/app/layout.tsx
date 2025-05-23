import type { Metadata } from "next";

import { Neuton, Noto_Sans } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

const noto_sans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Nabiel - Electronics student at Vellore Institute of Technology",
  description:
    "hi! i’m Nabiel — an Electronics student at Vellore Institute of Technology. this is my personal portfolio where i share the projects i’ve built, the companies i’ve interned with, and what i’ve been learning along the way.",
  keywords: [
    "Nabiel",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "University of Waterloo",
    "Electronics Student",
    "Software Engineering Intern",
    "Tech Portfolio",
    "Student Developer",
    "Internship Experience",
    "Web Developer",
    "Cloud Developer",
    "AI Developer",
    "Engineering Student Portfolio",
  ],
  authors: [{ name: "Nabiel", url: "https://nabiel.vercel.app/" }],
  creator: "Nabiel",
  openGraph: {
    title: "Nabiel – VITC Portfolio",
    description:
      "hi! i’m Nabiel — an Electronics student at Vellore Institute of Technology. this is my personal portfolio where i share the projects i’ve built, the companies i’ve interned with, and what i’ve been learning along the way.",
    url: "https://nabiel.vercel.app",
    siteName: "Nabiel Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabiel – Software Engineer Portfolio",
    description:
      "Explore projects and professional experience from Nabiel, software engineer and Waterloo student.",
    creator: "@nabiel",
  },
  metadataBase: new URL("https://nabiel.vercel.app")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${neuton.variable} antialiased max-w-screen-sm mx-auto h-[90vh] sm:h-screen flex justify-center items-center`}
        style={{
          backgroundSize: "cover",
        }}
      >
        {children}
        <GoogleAnalytics gaId="G-6ELS3BVBV0" />
        <Analytics />
      </body>
    </html>
  );
}
