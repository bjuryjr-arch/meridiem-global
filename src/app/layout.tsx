import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
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
    title: "Meridiem Global — Scale Responsibly",
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: "Meridiem Global",
    locale: "en_US",
    images: [{ url: "/og-social.jpg", width: 1200, height: 630, alt: "Meridiem Global — Scale Responsibly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridiem Global — Scale Responsibly",
    description: siteConfig.description,
    images: ["/og-social.jpg"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://meridiemglobal.com/#organization",
      "name": "Meridiem Global",
      "url": "https://meridiemglobal.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://meridiemglobal.com/meridiem-logo-transparent.png",
        "width": 512,
        "height": 512,
      },
      "description":
        "Meridiem Global helps U.S. businesses build responsibly managed global teams through carefully selected talent, structured onboarding, and U.S.-based placement support.",
      "email": "info@meridiemglobal.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
      },
      "sameAs": [],
    },
    {
      "@type": "WebSite",
      "@id": "https://meridiemglobal.com/#website",
      "url": "https://meridiemglobal.com",
      "name": "Meridiem Global",
      "publisher": { "@id": "https://meridiemglobal.com/#organization" },
    },
  ],
};

// Pre-computed at module scope: stable, deterministic, no runtime values.
// Escaping "<" prevents script injection if the string is ever inlined in HTML.
const jsonLdString = JSON.stringify(jsonLdSchema).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${cormorant.variable} antialiased`}>
        <script
          id="meridiem-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
        <ScrollReveal />
        <ExitIntentPopup />
        <SiteHeader />
        {children}
        <SiteFooter />
        {/* Zoho SalesIQ — sitewide chat widget */}
        <Script id="zsiq-init" strategy="afterInteractive">{`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}</Script>
        <Script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siqd6aa8520567dad62d39ece2f259e639c02558ddf53b54109b27522b074020e62" strategy="afterInteractive" />
      </body>
    </html>
  );
}
