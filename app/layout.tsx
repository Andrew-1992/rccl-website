import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Spectral: kept available as --font-body-serif for any copy that still
// wants the editorial serif treatment (e.g. long-form quotes).
const spectral = localFont({
  variable: "--font-body-serif",
  display: "swap",
  src: [
    { path: "./fonts/spectral-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/spectral-latin-300-italic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/spectral-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/spectral-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/spectral-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/spectral-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/spectral-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/spectral-latin-600-italic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/spectral-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/spectral-latin-700-italic.woff2", weight: "700", style: "italic" },
  ],
});

// Inter: the site's new display + body sans, matched to the bold, tight,
// humanist-grotesque headline style referenced from a construction-industry
// site (Bechtel) — large, heavy-weight headlines with a neutral, confident
// body face underneath. Self-hosted via next/font/local (files vendored
// from @fontsource/inter into app/fonts/) so the build never depends on a
// live fetch to fonts.googleapis.com — same reasoning as the Spectral setup
// above: works offline, behind restrictive firewalls, on any CI/host.
const inter = localFont({
  variable: "--font-display-face",
  display: "swap",
  src: [
    { path: "./fonts/inter-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/inter-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rccl.co.ss"),
  title: {
    default: "Rammed Earth Construction Limited | Juba, South Sudan",
    template: "%s | RECL",
  },
  description:
    "South Sudan's most technically credible builder. Rammed earth construction, general construction, architectural design and project management in Juba, South Sudan.",
  keywords: [
    "construction company Juba",
    "rammed earth construction South Sudan",
    "architectural design Juba",
    "sustainable building South Sudan",
  ],
  openGraph: {
    title: "Rammed Earth Construction Limited",
    description: "Build an Design. Construction and architectural design in Juba, South Sudan.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spectral.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-ink text-white px-4 py-2 text-sm"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {/* Signature edge accent — a slim signal-red spine down the right
            edge of the viewport, referenced from a construction-industry
            site's page-edge accent detail. Desktop only; too fussy at
            phone widths. */}
        <div className="hidden md:block fixed top-0 right-0 bottom-0 w-[3px] bg-signal z-40 pointer-events-none" aria-hidden="true" />
      </body>
    </html>
  );
}
