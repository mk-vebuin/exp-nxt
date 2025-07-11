import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "@/components/providers";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Expensiq - Smart Expense Tracking & Financial Management",
    template: "%s | Expensiq",
  },
  description:
    "Track, save, and manage your daily expenses easily with Expensiq — your personal finance buddy that works offline and syncs everywhere. Free expense tracker with beautiful reports and multi-platform sync.",
  keywords: [
    "expense tracker",
    "finance management",
    "budget tracker",
    "money management",
    "personal finance",
    "offline expense tracking",
    "financial planning",
    "spending tracker",
  ],
  authors: [{ name: "Expensiq Team" }],
  creator: "Expensiq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expensiq.com",
    title: "Expensiq - Smart Expense Tracking & Financial Management",
    description:
      "Track, save, and manage your daily expenses easily with Expensiq — your personal finance buddy that works offline and syncs everywhere.",
    siteName: "Expensiq",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Expensiq - Smart Expense Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expensiq - Smart Expense Tracking & Financial Management",
    description:
      "Track, save, and manage your daily expenses easily with Expensiq — your personal finance buddy that works offline and syncs everywhere.",
    images: ["/og-image.png"],
    creator: "@expensiq",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://expensiq.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
