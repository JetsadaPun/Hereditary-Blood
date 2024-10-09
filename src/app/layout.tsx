import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import { ReactNode } from "react";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "Hereditary-Blood",
  description: "Hereditary-Blood",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        <Footer/>
        </main>
      </body>
    </html>
  );
}
