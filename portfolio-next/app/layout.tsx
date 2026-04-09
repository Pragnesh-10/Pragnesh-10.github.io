import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Yedru Naga Pragnesh - Portfolio",
  description: "Portfolio of Yedru Naga Pragnesh, a Computer Science undergraduate focused on data science, machine learning, and software engineering.",
  keywords: ["portfolio", "data science", "machine learning", "Python", "generative AI", "software engineering"],
  authors: [{ name: "Yedru Naga Pragnesh", url: "https://pragnesh.com" }],
  creator: "Yedru Naga Pragnesh",
  publisher: "Yedru Naga Pragnesh",
  metadataBase: new URL("https://ynpragnesh.vercel.app"),
  alternates: {
    canonical: "https://ynpragnesh.vercel.app",
  },
  openGraph: {
    title: "Yedru Naga Pragnesh - Portfolio",
    description: "Portfolio of Yedru Naga Pragnesh, a Computer Science undergraduate focused on data science, machine learning, and software engineering.",
    url: "https://ynpragnesh.vercel.app",
    siteName: "Yedru Naga Pragnesh Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yedru Naga Pragnesh - Portfolio",
    description: "Portfolio of Yedru Naga Pragnesh, a Computer Science undergraduate focused on data science, machine learning, and software engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google8ec71ad4f1199a9d",
    other: {
      "msvalidate.01": "7378B208599E4177F3E37D61BA5CD16C",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
