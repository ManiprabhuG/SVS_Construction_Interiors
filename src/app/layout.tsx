import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingUtilities } from "@/components/common/FloatingUtilities";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SVS Constructions | Labour Contract & Services Sivakasi",
    template: "%s | SVS Constructions",
  },
  description:
    "SVS Constructions offers premier residential house building, civil engineering, and labour contract services in Sivakasi & Tamil Nadu starting at ₹620/sq.ft. Learn more & book site consultation!",
  keywords: [
    "SVS Constructions",
    "Labour Contract Services",
    "Construction Company in Sivakasi",
    "Residential Construction in Sivakasi",
    "Building Contractors in Sivakasi",
    "Civil Contractors Tamil Nadu",
    "House Construction Services",
    "Home Builders in Tamil Nadu",
    "Labour Contract Construction",
    "Residential Building Contractor",
    "House Construction Company",
    "Construction Services Tamil Nadu",
  ],
  authors: [{ name: "SVS Constructions & Interiors" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  metadataBase: new URL("https://svsconstructions.com"),
  openGraph: {
    title: "SVS Constructions | Labour Contract & Services Sivakasi",
    description:
      "Top residential house builders in Sivakasi & Tamil Nadu. Affordable turnkey home construction & labour contract services starting at ₹620/sq.ft with guaranteed handover.",
    url: "https://svsconstructions.com",
    siteName: "SVS Constructions & Interiors",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "SVS Constructions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVS Constructions | Labour Contract & Building Services",
    description:
      "SVS Constructions offers turnkey home building & labour contract services in Sivakasi & Tamil Nadu starting at ₹620/sq.ft. Learn more and book site consultation today!",
    images: ["/images/logo.jpg"],
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <GoogleAnalytics />
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <FloatingUtilities />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
