import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karaaslanlabs.com"),
  title: "Karaaslan Labs — Products, systems and new technology ventures",
  description:
    "Karaaslan Labs is a technology company that brings together software, AI, automation, and research capabilities to build products, systems, and new technology ventures.",
  alternates: {
    canonical: "/en/",
    languages: {
      "tr-TR": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Karaaslan Labs",
    description: "We build products, systems, and new technology ventures.",
    url: "https://karaaslanlabs.com/en/",
    siteName: "Karaaslan Labs",
    locale: "en_US",
    type: "website",
    images: ["/assets/meta/og-karaaslan-labs.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaaslan Labs",
    description: "We build products, systems, and new technology ventures.",
    images: ["/assets/meta/og-karaaslan-labs.png"],
  },
  icons: {
    icon: "/assets/brand/karaaslan-labs-favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B121D",
  colorScheme: "dark light",
};

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
