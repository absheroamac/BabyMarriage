import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./utilities.css";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wedding Invitation | Adhila & Shabeeb",
  description: "You are cordially invited to the wedding of Adhila and Shabeeb on April 18, 2026.",
};

import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} style={{ backgroundColor: '#eee' }}>
      <body className="mx-auto max-w-[480px] bg-background min-h-screen relative shadow-2xl overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
