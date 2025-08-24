import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/ui/Navbar";
import { ToastContainer } from "react-toastify";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import LoaderProvider from "@/components/LoaderProvider";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Middle-Class Investment Guide",
  description: "Bilingual investment education and community mock platform",
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <ClientThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 w-full mx-auto px-4 py-6 mt-20">
              <LoaderProvider>{children}</LoaderProvider>
              <ToastContainer position="top-right" autoClose={2000} />
            </main>
            <Footer />
          </LanguageProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
