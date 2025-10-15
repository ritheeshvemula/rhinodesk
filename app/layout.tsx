import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat  } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

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
  subsets: ["latin"],
  variable: "--font-montserrat",
  
});



export const metadata: Metadata = {
  title: "RhinoDesk",
  description: " Your one-stop solution for all office furniture needs. From ergonomic chairs to functional desks, we offer a wide range of quality office essentials.",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
        <body className={`${montserrat.variable} antialiased`}>
      
        {children}
         <Analytics />
      </body>
    </html>
  );
}
