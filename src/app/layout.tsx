import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Black } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import DotGrid from "@/components/DotGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const sunstream = localFont({
  src: "../fonts/Sunstream-Regular.otf",
  variable: "--font-sunstream",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Juno Love",
  description: "London-based DJ duo bringing vibrant, high-energy house music to intimate bars and open-air stages.",
  keywords: ["DJ", "house music", "London", "Juno Love", "DJ duo", "bookings"],
  authors: [{ name: "Juno Love" }],
  openGraph: {
    title: "Juno Love",
    description: "London-based DJ duo bringing vibrant, high-energy house music to intimate bars and open-air stages.",
    type: "website",
    locale: "en_GB",
    siteName: "Juno Love",
    images: [{ url: "/og-image.jpg", width: 1200, height: 1200, alt: "Juno Love DJ Duo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juno Love",
    description: "London-based DJ duo bringing vibrant, high-energy house music.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${sunstream.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
