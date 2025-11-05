import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BillBuddy Bot - Split bills instantly in your Telegram group",
  description:
    "BillBuddy Bot helps your friends share expenses with one simple command. Free to use. No setup required.",
  openGraph: {
    title: "BillBuddy Bot - Split bills instantly in your Telegram group",
    description:
      "BillBuddy Bot helps your friends share expenses with one simple command. Free to use. No setup required.",
    url: "https://billbuddybot.com",
    siteName: "BillBuddy Bot",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BillBuddy Bot - Split bills instantly in your Telegram group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BillBuddy Bot - Split bills instantly in your Telegram group",
    description:
      "BillBuddy Bot helps your friends share expenses with one simple command. Free to use. No setup required.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
