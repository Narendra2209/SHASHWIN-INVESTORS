import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Toast from "@/components/Toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "sksinvestors — Option Trading Experts | SEBI Registered Research Analyst",
    template: "%s | sksinvestors",
  },
  description:
    "We are experts in option trading. Research-driven option strategies from SEBI-registered research analysts with 18+ years of experience and 90% accuracy.",
  keywords: [
    "option trading", "option trading tips", "option trading advisory",
    "bank nifty option tips", "nifty option tips", "SEBI registered analyst",
    "stock option tips", "intraday trading", "positional trading", "share market advisory",
  ],
  authors: [{ name: "SKS Investors" }],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  alternates: { canonical: "https://sksinvestors.com/" },
  openGraph: {
    type: "website",
    url: "https://sksinvestors.com/",
    title: "SKS Investors — Option Trading Experts",
    description: "Research-driven option trading strategies from SEBI-registered research analysts with 18+ years of experience.",
    siteName: "SKS Investors",
    locale: "en_IN",
    images: [{ url: "https://sksinvestors.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKS Investors — Option Trading Experts",
    description: "Research-driven option trading strategies from SEBI-registered research analysts with 18+ years of experience.",
    images: ["https://sksinvestors.com/og-image.jpg"],
  },
  other: { "geo.region": "IN-KA", "geo.placename": "Bangalore" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "SKS Investors",
              description: "SEBI-registered research analyst specialising in option trading advisory — Bank Nifty, Nifty and stock options with 18+ years of experience.",
              url: "https://sksinvestors.com",
              telephone: "+91-9743556886",
              email: "support@sksinvestors.com",
              address: { "@type": "PostalAddress", streetAddress: "8th Phase, JP Nagar", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
              areaServed: "IN",
              hasOfferCatalog: {
                "@type": "OfferCatalog", name: "Trading Advisory Packages",
                itemListElement: ["Option","Equity","Future","Commodity","Index","HNI"].map(n => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${n} Package` } })),
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org", "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Do you specialise in option trading?", acceptedAnswer: { "@type": "Answer", text: "Yes — option trading is our flagship specialty. We provide expert Bank Nifty, Nifty and stock option recommendations with precise strike selection and strict risk management." } },
                { "@type": "Question", name: "Is SKS Investors SEBI registered?", acceptedAnswer: { "@type": "Answer", text: "Yes, SKS Investors is a SEBI-registered research analyst providing compliant and transparent option trading advisory services." } },
                { "@type": "Question", name: "How do I receive trading alerts?", acceptedAnswer: { "@type": "Answer", text: "Trading alerts are delivered via WhatsApp, SMS, Call, and Email with timely revisions and live market support." } },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
        <Toast />
      </body>
    </html>
  );
}
