import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dweche Africa | Enterprise Software Solutions",
  description:
    "We engineer world-class software solutions that transform businesses across Africa. Custom development, cloud architecture, and digital innovation.",
  keywords:
    "software development Africa, enterprise software, custom development, cloud architecture, digital transformation, Dweche Africa",
  openGraph: {
    title: "Dweche Africa | Enterprise Software Solutions",
    description:
      "We engineer world-class software solutions that transform businesses across Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable}`}
    >
      <body className="antialiased bg-dweche-900 text-cream-100 selection:bg-gold-500/30 selection:text-cream-100">
        {children}
      </body>
    </html>
  );
}
