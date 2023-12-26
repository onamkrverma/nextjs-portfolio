import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Onam - Front End Developer",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
