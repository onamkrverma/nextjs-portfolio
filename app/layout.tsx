import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Image from "next/image";
import topGradient from "../public/topGradient.svg";
import Footer from "@components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Onam Portfolio",
  description: "Onam Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container relative">
          <div className="w-full h-[500px] absolute top-0 right-0">
            <Image
              src={topGradient}
              alt="gradient"
              quality={100}
              fill
              sizes="100vw"
              className="w-full object-cover blur-xl"
            />
          </div>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
