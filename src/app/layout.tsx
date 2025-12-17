import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileContainer } from "@/components/layout/MobileContainer/MobileContainer";
import { BottomNav } from "@/components/layout/BottomNav/BottomNav";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fintech Mobile App",
  description: "Fast, simple, and secure financial management for young professionals.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <AuthProvider>
          <ThemeProvider>
            <MobileContainer>
              {children}
              <BottomNav />
            </MobileContainer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
