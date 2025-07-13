// src/app/layout.js

import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StickyContactIcons from "@/components/shared/StickyContactIcons"; // 👈 client component

export const metadata = {
  title: "SR Holistic Wellness",
  description: "Experience holistic healing and wellness through personalized spa therapies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContactIcons /> {/* 👈 sticky WhatsApp & call icons */}
      </body>
    </html>
  );
}
