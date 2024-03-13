import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Sans({
    subsets: ["latin"],
    weight:['400', '500', '600', '700'],
    
    });

export const metadata: Metadata = {
  title: "D-MIND",
  description: "Bring your Designs to life using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
