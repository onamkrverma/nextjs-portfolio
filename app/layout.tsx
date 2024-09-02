import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";
import { inter, poppins } from "@app/fonts";
import ThemeProvider from "@app/contex/ThemeContex";
import dynamic from "next/dynamic";
import AuthProvider from "@components/AuthProvider";
import Button from "@components/Button";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://onam.vercel.app"),
  alternates: {
    canonical: "/",
  },

  title: "Onam - Front End Developer",
  description:
    "As a front-end developer, I assist emerging businesses in achieving their digital aspirations. I specialize in developing modern web applications",
  keywords:
    "Onam kumar verma, Onam,Portfolio, Onamkrverma, onam Portfolio, web developer Portfolio",
  authors: [
    { name: "Onamkrverma", url: "https://linkedin.com/in/onamkumarverma" },
  ],
  verification: {
    google: "fXdwObHVbw1lHf43nqKlsB7ZwhohZGTglPx2CY4RAVg",
  },
  openGraph: {
    images: "/logo.webp",
  },
};

const Footer = dynamic(() => import("@components/Footer"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NDD25RKN" />
      <ThemeProvider>
        <AuthProvider>
          <body className={`${inter.className} dark:bg-[#0D0D0D]`}>
            <main className="container relative">
              <div className="absolute top-0 w-full h-48 -z-10 flex items-center justify-center rounded-full">
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
