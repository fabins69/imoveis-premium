import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RM Imóveis | Imóveis de Alto Padrão",
    template: "%s | RM Imóveis",
  },
  description:
    "Encontre imóveis de alto padrão para compra e aluguel. Apartamentos, casas, coberturas e imóveis comerciais nas melhores localizações do Brasil.",
  keywords: [
    "imóveis",
    "alto padrão",
    "compra",
    "venda",
    "aluguel",
    "apartamentos",
    "casas",
    "coberturas",
    "luxo",
    "corretor",
  ],
  authors: [{ name: "RM Imóveis" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "RM Imóveis",
    title: "RM Imóveis | Imóveis de Alto Padrão",
    description:
      "Encontre imóveis de alto padrão para compra e aluguel nas melhores localizações.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <FavoritesProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <ChatWidget />
            <Toaster position="top-right" />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
