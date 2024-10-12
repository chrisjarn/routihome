import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Routi",
  description: "Optimize today, lead tomorrow - Route Optimization Software",
  keywords:
    "route optimization, fleet management, delivery routes, logistics software",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          sizes="any"
          type="image/png"
        />

        <meta
          property="og:title"
          content="Routi - Route Optimization Software"
        />
        <meta
          property="og:description"
          content="Optimize today, lead tomorrow with Routi."
        />
        <meta property="og:url" content="https://routiapp.com" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
