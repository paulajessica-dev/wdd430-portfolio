
import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Paula Jessica Silva | Portfolio",
  description: "A BI Analyst's portfolio showcasing web development projects built while learning Next.js and React.",
};

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      );
};