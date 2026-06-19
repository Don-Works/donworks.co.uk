import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://donworks.co.uk";
const githubUrl = "https://github.com/Don-Works";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050604",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Don Works | Open Source by Revitt",
    template: "%s | Don Works",
  },
  description:
    "Don Works is Revitt's public bench for MCPlexer, Brw, and the launch skills behind real agent and browser automation work.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Don Works | Open Source by Revitt",
    description:
      "MCPlexer, Brw, and practical launch notes from Revitt's open-source product bench.",
    url: siteUrl,
    siteName: "Don Works",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/hero-control-panel.png",
        width: 1600,
        height: 900,
        alt: "Square spacecraft-inspired control panel for Don Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don Works | Open Source by Revitt",
    description:
      "MCPlexer, Brw, and practical launch notes from Revitt's open-source product bench.",
    images: ["/hero-control-panel.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Don Works",
    url: siteUrl,
    parentOrganization: {
      "@type": "Organization",
      name: "Revitt",
      url: "https://revitt.co",
    },
    sameAs: [githubUrl],
  };

  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
