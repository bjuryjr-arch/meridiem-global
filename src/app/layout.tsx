import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Meridiem Global | Premium Global Staffing Solutions",
    template: "%s | Meridiem Global",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.primaryKeywords, ...siteConfig.qsrKeywords],
  icons: {
    icon: "/meridiem-logo-transparent.png",
    shortcut: "/meridiem-logo-transparent.png",
    apple: "/meridiem-logo-transparent.png",
  },
  openGraph: {
    title: "Meridiem Global",
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    images: [{ url: "/meridiem-logo-transparent.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridiem Global",
    description: siteConfig.description,
    images: ["/meridiem-logo-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${cormorant.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
