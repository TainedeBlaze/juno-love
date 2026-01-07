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
  metadataBase: new URL("https://junolove.com"),
  title: {
    default: "Juno Love | London DJ Duo",
    template: "%s | Juno Love",
  },
  description:
    "Juno Love is a London-based DJ duo bringing vibrant, high-energy house music spanning decades to intimate bars and open-air festivals. Book now for your next event.",
  keywords: [
    "DJ duo",
    "house music",
    "London DJ",
    "Juno Love",
    "DJ bookings",
    "wedding DJ",
    "festival DJ",
    "corporate event DJ",
    "UK DJ",
    "Ben Sterling",
    "LP Giobbi",
  ],
  authors: [{ name: "Juno Love", url: "https://junolove.com" }],
  creator: "Juno Love",
  publisher: "Juno Love",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Juno Love | London DJ Duo",
    description:
      "London-based DJ duo bringing vibrant, high-energy house music to intimate bars and open-air festivals. Available for bookings worldwide.",
    type: "website",
    locale: "en_GB",
    url: "https://junolove.com",
    siteName: "Juno Love",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juno Love - London DJ Duo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juno Love | London DJ Duo",
    description:
      "London-based DJ duo bringing vibrant, high-energy house music to intimate bars and open-air festivals.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Juno Love",
  description:
    "London-based DJ duo bringing vibrant, high-energy house music spanning decades to intimate bars and open-air festivals.",
  url: "https://junolove.com",
  image: "https://junolove.com/og-image.jpg",
  genre: ["House", "Dance", "Electronic"],
  foundingLocation: {
    "@type": "Place",
    name: "London, United Kingdom",
  },
  member: [
    {
      "@type": "Person",
      name: "Taine de Buys",
    },
    {
      "@type": "Person",
      name: "Emily Crowe",
    },
  ],
  sameAs: [
    "https://instagram.com/junolove.djs",
    "https://soundcloud.com/juno-love-taine-and-emmy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "junolove.bookings@gmail.com",
    contactType: "bookings",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${sunstream.variable} antialiased`}
      >
        <DotGrid />
        <Header />
        {children}
      </body>
    </html>
  );
}
