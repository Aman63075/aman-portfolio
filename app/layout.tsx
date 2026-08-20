import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/layout/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://amanshukla.vercel.app"),

  title: {
    default: "Aman Shukla | Cloud & Creative Developer",
    template: "%s | Aman Shukla",
  },

  description:
    "Portfolio of Aman Shukla — Cloud, AI, Cyber Security & Video Editing.",

  keywords: [
    "Aman Shukla",
    "Cloud Developer",
    "AWS",
    "AI Developer",
    "Cyber Security",
    "Video Editor",
    "Next.js Portfolio",
  ],

  authors: [{ name: "Aman Shukla" }],

  creator: "Aman Shukla",

  openGraph: {
    title: "Aman Shukla Portfolio",
    description:
      "Cloud • AI • Cyber Security • Creative Development",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aman Shukla Portfolio",
    description:
      "Cloud • AI • Cyber Security • Creative Development",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}