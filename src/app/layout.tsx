import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import StructuredData from "@/components/jsonLD/StructuredData";
import Left from "@/components/Slide/Left";
import Right from "@/components/Slide/Right";
import ScrollProvider from "@/components/ScrollProvider/ScrollProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title: {
    default: "Tejas Mandhare | Remote Backend & React Engineer",
    template: "%s | Tejas Mandhare",
  },
  description:
    "Remote Backend & React Engineer specializing in .NET, Go, React, APIs, and scalable system design. Builder mindset, product-focused engineer for distributed systems.",
  keywords: [
    "Remote Backend Engineer",
    "Remote Full-Stack Engineer",
    "Remote .NET Developer",
    "Remote Go Developer",
    "React Developer Remote",
    "System Design Engineer",
    "Distributed Systems Engineer",
    "API Engineer",
    "Builder",
  ],
  authors: [{ name: "Tejas Mandhare" }],
  creator: "Tejas Mandhare",
  metadataBase: new URL("https://tejas.mandhare.com"),
  openGraph: {
    title: "Tejas Mandhare | Remote Backend & React Engineer",
    description:
      "Remote Backend & React Engineer experienced in .NET, Go, React, APIs, and scalable system design.",
    url: "https://tejas.mandhare.com",
    siteName: "Tejas Mandhare",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Mandhare | Remote Backend & React Engineer",
    description:
      "Remote Backend & React Engineer experienced in .NET, Go, React, APIs, and scalable system design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen bg-white text-gray-900 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <ScrollProvider>
            <Navbar />
            <main className="max-w-5xl mx-auto px-4 py-25">
              {children}
            </main>
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}