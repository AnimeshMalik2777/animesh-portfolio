import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Animesh | Full Stack Developer & AI/Backend Specialist Portfolio",
  description:
    "Freelance Full Stack Developer specializing in Java Enterprise Applications, Python AI Microservices, and Next.js Web Solutions.",
  keywords: [
    "Animesh",
    "Animesh Malik",
    "Full Stack Developer",
    "AI/Backend Specialist",
    "Java Enterprise Applications",
    "Python AI Microservices",
    "FastAPI",
    "Next.js Web Solutions",
    "Spring",
    "JSP",
    "MySQL",
    "AWS",
    "LeetCode",
    "Data Structures",
    "Galgotias University",
  ],
  authors: [{ name: "Animesh", url: "https://github.com/AnimeshMalik2777" }],
  creator: "Animesh",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Animesh | Full Stack Developer & AI/Backend Specialist Portfolio",
    description:
      "Freelance Full Stack Developer specializing in Java Enterprise Applications, Python AI Microservices, and Next.js Web Solutions.",
    url: "https://github.com/AnimeshMalik2777",
    siteName: "Animesh Developer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animesh | Full Stack Developer & AI/Backend Specialist Portfolio",
    description:
      "Freelance Full Stack Developer specializing in Java Enterprise Applications, Python AI Microservices, and Next.js Web Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-dark-950 text-foreground antialiased selection:bg-cyan-500/30 selection:text-cyan-300 relative min-h-screen`}
      >
        {/* Ambient Dark Mode Background Gradients & Cyber Grid */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-cyber [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-60" />

          {/* Cyan Glow Orb (Top-Left) */}
          <div className="absolute -top-40 -left-40 w-96 h-96 md:w-[600px] md:h-[600px] bg-cyan-600/15 rounded-full blur-[130px] animate-pulse-slow" />

          {/* Indigo Glow Orb (Top-Right) */}
          <div className="absolute top-1/4 -right-40 w-96 h-96 md:w-[650px] md:h-[650px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse-slow" />

          {/* Purple Glow Orb (Mid-Bottom) */}
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 md:w-[550px] md:h-[550px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Main Content Tree */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
