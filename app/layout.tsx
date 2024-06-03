import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarEffect from "@/components/sub/StarEffect";
import Footer from "@/components/main/Footer";
import { openGraphImage } from "./shared-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suneth Udayanga",
  description: "Your are visiting My Portfolio",
  openGraph: {
    ...openGraphImage,
    title: 'Suneth Udayanga',
    images:['../public/meta.png']
    
  
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}>
      <Navbar />
      <StarEffect />
        {children}
        <Footer />
      </body>
    </html>
  );
}
