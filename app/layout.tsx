import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Routi",
  description: "Optimize today, lead tomorrow - Route Optimization Software",
  keywords: "route optimization, fleet management, delivery routes, logistics software",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
