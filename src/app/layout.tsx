import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bistro 53 - Delicious Food & Drinks | Lagos Restaurant",
  description: "Experience the best food and drinks at Bistro 53 located at 53 Isaac John Street, Fadeyi Lagos. Order fresh meals via WhatsApp. Quality ingredients, exceptional taste.",
  keywords: ["restaurant", "food", "drinks", "Lagos", "Bistro", "delivery", "WhatsApp order", "Nigerian restaurant"],
  authors: [{ name: "Bistro 53" }],
  creator: "Bistro 53",
  publisher: "Bistro 53",
  robots: "index, follow",
  openGraph: {
    title: "Bistro 53 - Delicious Food & Drinks",
    description: "Experience the best food and drinks at Bistro 53. Order fresh meals via WhatsApp from our Lagos location.",
    url: "https://bistro53.vercel.app",
    siteName: "Bistro 53",
    images: [
      {
        url: "/images/BISTRO logo.png",
        width: 1200,
        height: 630,
        alt: "Bistro 53 Restaurant",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bistro 53 - Delicious Food & Drinks",
    description: "Experience the best food and drinks at Bistro 53. Order fresh meals via WhatsApp.",
    images: ["/images/BISTRO logo.png"],
  },
  icons: {
    icon: "/images/BISTRO logo.png",
    shortcut: "/images/BISTRO logo.png",
    apple: "/images/BISTRO logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
