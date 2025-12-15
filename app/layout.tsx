import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// Components
// import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnlytics";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});

export const metadata: Metadata = {
  title: "Muthupandi's Portfolio",
  description:
    "Welcome to Muthupandi's professional portfolio showcasing services, resume, and work.",
  keywords: [
    "Muthupandi",
    "Portfolio",
    "Web Developer",
    "Resume",
    "Services",
    "Work",
  ],
  authors: [{ name: "Muthupandi", url: "https://muthupandi.in" }], // Correct usage
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://muthupandi.in" />
        <meta property="og:title" content="Muthupandi's Portfolio" />
        <meta
          property="og:description"
          content="Explore Muthupandi's work, services, and professional achievements."
        />
        <meta property="og:image" content="/images/portfolio-thumbnail.jpg" />
        <meta property="og:url" content="https://muthupandi.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muthupandi's Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Muthupandi's work, services, and professional achievements."
        />
        <meta name="twitter:image" content="/images/portfolio-thumbnail.jpg" />
      </head>
      <body className={JetBrainsMono.variable}>
        {/* <Header /> */}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
