import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Mosharof Hossain | MERN Stack Web Developer",
  description:
    "Portfolio of Mosharof Hossain — MERN Stack Web Developer focused on JavaScript, TypeScript and modern web engineering.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
