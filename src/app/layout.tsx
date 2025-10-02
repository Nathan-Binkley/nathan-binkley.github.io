import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { AppShellFooter, MantineProvider, Text } from "@mantine/core";
import Footer from "./components/Footer";
import { ModalsProvider } from "@mantine/modals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan's Site",
  description: "Nathan's Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider>
          <ModalsProvider>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
            <Footer />
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
