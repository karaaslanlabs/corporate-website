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
  title: "Karaaslan Labs — Ürünler, sistemler ve yeni teknoloji girişimleri",
  description:
    "Karaaslan Labs; yazılım, yapay zekâ, otomasyon ve araştırma yetkinliklerini bir araya getirerek ürünler, sistemler ve yeni teknoloji girişimleri geliştiren bir teknoloji şirketidir.",
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      en: "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Karaaslan Labs",
    description: "Ürünler, sistemler ve yeni teknoloji girişimleri geliştiriyoruz.",
    url: "https://karaaslanlabs.com/",
    siteName: "Karaaslan Labs",
    locale: "tr_TR",
    type: "website",
    images: ["/assets/meta/og-karaaslan-labs.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karaaslan Labs",
    description: "Ürünler, sistemler ve yeni teknoloji girişimleri geliştiriyoruz.",
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

const languageBootstrap = `
(function () {
  try {
    var stored = localStorage.getItem("kl-language");
    if (stored === "en") {
      location.replace("/en/");
      return;
    }
    if (stored === "tr") return;
    var preferred = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    if (/^en(?:-|$)/i.test(preferred)) location.replace("/en/");
  } catch (_) {}
})();
`;

export default function TurkishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
