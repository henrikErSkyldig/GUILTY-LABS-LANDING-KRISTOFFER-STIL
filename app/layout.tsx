import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Schoolbell } from "next/font/google";
import "./globals.css";
import { Provider } from "react-wrap-balancer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-schoolbell",
});

export const metadata: Metadata = {
  title: "Guilty Labs",
  description: "Din partner for rask og effektiv MVP-utvikling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${schoolbell.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
