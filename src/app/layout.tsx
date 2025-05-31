import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js 지식 테스트 | 당신의 Next.js 실력을 확인해보세요",
  description: "Next.js 기초부터 고급 기능까지 다양한 문제로 구성된 온라인 퀴즈입니다. 당신의 Next.js 지식 수준을 확인하고 학습 방향을 제시받아보세요.",
  keywords: ["Next.js", "React", "퀴즈", "테스트", "웹개발", "프론트엔드"],
  authors: [{ name: "Next.js Quiz Team" }],
  openGraph: {
    title: "Next.js 지식 테스트",
    description: "Next.js 실력을 확인해보는 온라인 퀴즈",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
