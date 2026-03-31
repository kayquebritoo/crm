import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNavBar } from "@/components/layout/BottomNavBar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#11101E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Kayque Brito CRM | Dashboard",
  description: "Glass-OS CRM PWA Interface",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${manrope.variable} ${inter.variable} dark`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-primary/30 selection:text-primary">
        <div className="animated-bg">
          <div className="sphere bg-primary w-[500px] h-[500px] -top-40 -left-40"></div>
          <div className="sphere bg-secondary w-[400px] h-[400px] top-1/2 -right-20" style={{ animationDelay: '-5s' }}></div>
          <div className="sphere bg-primary-container w-[300px] h-[300px] bottom-10 left-1/3" style={{ animationDelay: '-10s' }}></div>
        </div>
        <TopAppBar />
        {children}
        <BottomNavBar />
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `
        }} />
      </body>
    </html>
  );
}
