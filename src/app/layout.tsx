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

const siteUrl = "https://dweche.africa";

export const metadata: Metadata = {
  title: {
    default: "Dweche Africa | Enterprise Software Solutions & AI Development in Kenya",
    template: "%s | Dweche Africa",
  },
  description:
    "Dweche Africa (Dweche AI Limited) is a pan-African software engineering company building enterprise-grade digital solutions, AI platforms, and cloud infrastructure. Trusted by fintech, logistics, healthcare, and retail businesses across Africa.",
  keywords: [
    "Dweche",
    "Dweche Africa",
    "Dweche AI Limited",
    "AI companies Kenya",
    "software companies Kenya",
    "enterprise software development Kenya",
    "AI development Africa",
    "custom software solutions Nairobi",
    "cloud architecture Kenya",
    "digital transformation Africa",
    "fintech software development",
    "logistics software solutions",
    "healthcare software Africa",
    "pan-African tech company",
    "software engineering Kenya",
    "Nairobi software developers",
    "African AI startups",
    "enterprise digital solutions Kenya",
  ],
  authors: [{ name: "Dweche Africa", url: siteUrl }],
  creator: "Dweche Africa (Dweche AI Limited)",
  publisher: "Dweche AI Limited",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Dweche Africa",
    title: "Dweche Africa | Enterprise Software Solutions & AI Development in Kenya",
    description:
      "Dweche Africa (Dweche AI Limited) engineers world-class software, AI platforms, and cloud solutions for African enterprises. Fintech, logistics, healthcare, and retail.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dweche Africa — Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dwecheafrica",
    creator: "@dwecheafrica",
    title: "Dweche Africa | Enterprise Software & AI Development",
    description:
      "Pan-African software engineering company building enterprise digital solutions, AI platforms, and cloud infrastructure for African businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Software Engineering & AI Development",
  verification: {
    google: "oNRWqp8j-Lwk0uagH0t3E1KFeBfBO5fvYpFeLdI7d3U",
  },
  other: {
    "geo.region": "KE",
    "geo.placename": "Nairobi",
    "ICBM": "-1.2921, 36.8219",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Dweche Africa",
      alternateName: ["Dweche AI Limited", "Dweche"],
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        "Pan-African software engineering company building enterprise-grade digital solutions, AI platforms, and cloud infrastructure.",
      email: "hello@dwecheafrica.com",
      telephone: "+254700123456",
      foundingDate: "2018",
      founders: [
        {
          "@type": "Person",
          name: "Bonface Odhiambo",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      sameAs: [
        "https://linkedin.com/company/dweche-africa",
        "https://twitter.com/dwecheafrica",
        "https://github.com/dwecheafrica",
      ],
      knowsAbout: [
        "Software Engineering",
        "Artificial Intelligence",
        "Cloud Architecture",
        "Fintech",
        "Logistics",
        "Healthcare Technology",
        "Digital Transformation",
      ],
      areaServed: ["Kenya", "Nigeria", "Rwanda", "Uganda", "Tanzania", "South Africa", "Ghana"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dweche Africa | Enterprise Software Solutions",
      description:
        "Pan-African software engineering company building enterprise-grade digital solutions, AI platforms, and cloud infrastructure.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Dweche Africa — Enterprise Software Solutions & AI Development",
      description:
        "Dweche Africa (Dweche AI Limited) is a leading software company in Kenya specializing in AI development, enterprise software, cloud architecture, and digital transformation for African businesses.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: `${siteUrl}/og-image.png`,
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "LogiTrack",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Real-time fleet management system optimising 2,000+ vehicles across East Africa.",
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "MedConnect",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web, Mobile",
          description: "Telemedicine platform connecting 500+ clinics with patients across rural and urban areas.",
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "EduPlatform",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web, Android",
          description: "E-learning ecosystem serving 100,000+ students with adaptive learning paths.",
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "BF SUMA – Eagleshop",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Payment and inventory management system for retail operations with real-time stock tracking.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Dweche Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dweche Africa (Dweche AI Limited) is a pan-African software engineering company that builds enterprise-grade digital solutions, AI platforms, and cloud infrastructure for businesses across Africa. They specialize in fintech, logistics, healthcare, and retail technology.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Dweche Africa offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dweche Africa offers custom software development, cloud architecture and DevOps, fintech and payment solutions, logistics and supply chain platforms, data and AI solutions, and digital transformation consulting across Africa.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Dweche Africa based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dweche Africa is headquartered in Nairobi, Kenya, with operations in Lagos, Nigeria, and Kigali, Rwanda, serving clients across the African continent.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Dweche Africa serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dweche Africa serves fintech, logistics and supply chain, healthcare, education, retail, and government sectors across Africa.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dweche Africa an AI company in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Dweche Africa (Dweche AI Limited) is an AI company based in Kenya that develops artificial intelligence solutions, machine learning models, and data analytics platforms for African enterprises.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Dweche Africa use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dweche Africa uses modern technologies including React, Next.js, Node.js, Python, Go, PostgreSQL, AWS, GCP, Docker, and various AI/ML frameworks to build scalable enterprise solutions.",
          },
        },
      ],
    },
  ],
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
      <head>
        <meta name="apple-mobile-web-app-title" content="Dweche Africa" />
        <meta name="application-name" content="Dweche Africa" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-surface-900 selection:bg-blue-600/20 selection:text-surface-900">
        {children}
      </body>
    </html>
  );
}
