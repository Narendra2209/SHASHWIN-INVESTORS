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
    default: "Shashwin Investors — SEBI Registered Research Analyst | Bank Nifty Tips",
    template: "%s | Shashwin Investors",
  },
  description:
    "Get research-driven Bank Nifty tips from SEBI-registered research analyst. Intraday & positional strategies with clear entry, stop-loss, and exit logic.",
  keywords: [
    "bank nifty tips", "SEBI registered analyst", "stock market tips",
    "intraday trading", "positional trading", "equity tips", "option tips",
    "future tips", "MCX tips", "share market advisory",
  ],
  authors: [{ name: "Shashwin Investors" }],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  alternates: { canonical: "https://shashwininvestors.com/" },
  openGraph: {
    type: "website",
    url: "https://shashwininvestors.com/",
    title: "Shashwin Investors — SEBI Registered Research Analyst",
    description: "Research-driven Bank Nifty intraday & positional strategies from a SEBI-registered research analyst.",
    siteName: "Shashwin Investors",
    locale: "en_IN",
    images: [{ url: "https://shashwininvestors.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwin Investors — SEBI Registered Research Analyst",
    description: "Research-driven Bank Nifty intraday & positional strategies from a SEBI-registered research analyst.",
    images: ["https://shashwininvestors.com/og-image.jpg"],
  },
  other: { "geo.region": "IN-MH", "geo.placename": "Mumbai" },
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
              name: "Shashwin Investors",
              description: "SEBI-registered research analyst providing Bank Nifty tips, intraday & positional trading strategies.",
              url: "https://shashwininvestors.com",
              telephone: "+91-7032048807",
              email: "support@shashwininvestors.com",
              address: { "@type": "PostalAddress", streetAddress: "A/221, 1st Floor, Shiv Sai Co-op Housing Society, Kurla West", addressLocality: "Mumbai", addressRegion: "Maharashtra", postalCode: "400070", addressCountry: "IN" },
              areaServed: "IN",
              hasOfferCatalog: {
                "@type": "OfferCatalog", name: "Trading Advisory Packages",
                itemListElement: ["Equity","Option","Future","Commodity","Index","HNI"].map(n => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: `${n} Package` } })),
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
                { "@type": "Question", name: "What are Bank Nifty Tips?", acceptedAnswer: { "@type": "Answer", text: "Bank Nifty Tips are research-driven trading recommendations for the Bank Nifty index, including intraday and positional strategies with clear entry, stop-loss, and exit levels." } },
                { "@type": "Question", name: "Is Shashwin Investors SEBI registered?", acceptedAnswer: { "@type": "Answer", text: "Yes, Shashwin Investors is a SEBI-registered research analyst providing compliant and transparent trading advisory services." } },
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
