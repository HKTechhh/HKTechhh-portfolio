import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

const title = "Hadson Mumo (HKTechhh) — Full-Stack Developer & Founder, Nairobi";
const description =
  "Full-stack developer, automation engineer and founder of HKTechhh Solutions in Nairobi, Kenya. Available for web development, Python/JavaScript, automation, AI, SPSS, Matlab, Excel and research work.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  keywords: ["Hadson Mumo", "HKTechhh", "full-stack developer", "Nairobi", "Next.js", "Django", "Playwright", "freelance"],
  authors: [{ name: "Hadson Mumo" }],
  openGraph: { title, description, type: "website", images: ["/images/hadson-color.webp"] },
  twitter: { card: "summary_large_image", title, description, creator: "@MumoHadson" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
