import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingUtilities } from "@/components/common/FloatingUtilities";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SVS Constructions & Interiors | Best House Builders in Sivakasi & Tamil Nadu",
  description:
    "Leading residential construction company in Sivakasi, Virudhunagar & Tamil Nadu. Labour contract construction starting at ₹620/sq.ft. Civil works, tiling, plumbing, electrical & interiors.",
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
  metadataBase: new URL("https://svsconstructions.com"),
  openGraph: {
    title: "SVS Constructions & Interiors | Quality Homes in Tamil Nadu",
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
    title: "SVS Constructions & Interiors | House Builders Sivakasi",
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
      </head>
      <body className="min-h-screen flex flex-col antialiased">
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
