import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";
import Image from "next/image";
import topGradient from "@public/topGradient.svg";
import { inter } from "@app/fonts";
import ThemeProvider from "@app/contex/ThemeContex";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Onam Portfolio",
  description: "Onam Portfolio",
};

const Footer = dynamic(() => import("@components/Footer"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <main className="container relative">
            <div className="w-full h-[500px] absolute top-0 right-0 -z-10">
              <Image
                src={topGradient}
                alt="gradient"
                quality={100}
                fill
                sizes="100vw"
                priority
                className="w-full object-cover blur-2xl"
              />
            </div>
            <Navbar />
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
