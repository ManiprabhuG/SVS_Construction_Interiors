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
    default: "SVS Constructions | Best House Builders in Sivakasi",
    template: "%s | SVS Constructions",
  },
  description:
    "Leading residential construction company in Sivakasi & Tamil Nadu. Turnkey home building and labour contracts starting at ₹620/sq.ft.",
  keywords: [
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
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  metadataBase: new URL("https://svsconstructions.com"),
  openGraph: {
    title: "SVS Constructions | Best House Builders in Sivakasi",
    description:
      "Residential construction specialists in Sivakasi & Tamil Nadu. Affordable Labour contracts starting at ₹620/sq.ft.",
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
    title: "SVS Constructions | House Builders Sivakasi",
    description:
      "Affordable residential construction and civil contracts across Tamil Nadu starting at ₹620/sq.ft.",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
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
