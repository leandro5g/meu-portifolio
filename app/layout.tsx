import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulo Leandro Sousa — Desenvolvedor Full Stack Mobile Sênior",
  description:
    "Especialista em React Native e Node.js com mais de 8 anos de experiência. Soluções mobile escaláveis, Design Systems, CI/CD e arquitetura de alto impacto.",
  keywords: [
    "React Native",
    "Node.js",
    "Desenvolvedor Mobile",
    "Full Stack",
    "TypeScript",
    "iOS",
    "Android",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0f0f5]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
