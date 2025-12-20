import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandFont = localFont({
  src: [
    {
      path: '/fonts/Ponzu-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/Ponzu-LightItalic.otf',
      weight: '300',
      style: 'Light Italic'
    }
  ],
  variable: '--font-ponzu',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "New York Nails",
  description: "New York Nails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brandFont.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
