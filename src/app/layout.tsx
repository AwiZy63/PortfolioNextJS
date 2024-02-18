import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.component";
import Footer from "@/components/Footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flanquart Bastien's Portfolio",
  description: "Bienvenue sur mon portfolio, je suis Flanquart Bastien, développeur fullstack JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`flex min-h-screen flex-col w-full bg-gray-900 ${inter.className}`}>
        <Navbar />


        <main className="flex-1 container mx-auto px-4 w-full py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
