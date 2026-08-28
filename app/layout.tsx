import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";
import { inter, poppins } from "@app/fonts";
import ThemeProvider from "@app/contex/ThemeContex";
import AuthProvider from "@components/AuthProvider";
import Button from "@components/Button";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@components/Footer";
import { siteConfig } from "@config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Onamkrverma", url: siteConfig.links.linkedin }],
  creator: siteConfig.name,
  verification: {
    google: "fXdwObHVbw1lHf43nqKlsB7ZwhohZGTglPx2CY4RAVg",
  },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.company,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  knowsAbout: siteConfig.knowsAbout,
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId="GTM-NDD25RKN" />
      <ThemeProvider>
        <AuthProvider>
          <body className={`${inter.className} dark:bg-[#0D0D0D]`}>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(personJsonLd),
              }}
            />
            <main className="container relative">
              <div className="absolute top-0 w-[90%] h-48 -z-10 flex items-center justify-center rounded-full">
                <span className="bg-custom_gradient block w-3/4 h-full blur-3xl" />
              </div>
              {/* show logo on mobile */}
              <div className="w-full relative text-center block mb-20 sm:hidden">
                <Button
                  link="/"
                  variant="icon"
                  title="onam"
                  className={`!text-4xl dark:text-white !p-0 !font-bold ${poppins.className}`}
                >
                  {"<Onam/>"}
                </Button>
              </div>
              <Navbar />
              {children}
            </main>
            <Footer />
          </body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
