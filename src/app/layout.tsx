import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/shadcn/sonner";

export const metadata: Metadata = {
  title: {
    default: "Tejas Mandhare | Software Engineer",
    template: "%s | Tejas Mandhare",
  },
  description:
    "Software Engineer specializing in .NET, Go, React, APIs, and scalable system design.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    ".NET Developer",
    "Go Developer",
    "React Developer",
    "System Design",
  ],
  authors: [{ name: "Tejas Mandhare" }],
  creator: "Tejas Mandhare",
  metadataBase: new URL("https://tejas.mandhare.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejas.mandhare.com",
    siteName: "Tejas Mandhare",
    title: "Tejas Mandhare | Software Engineer",
    description: "Software Engineer specializing in .NET, Go, React, APIs, and scalable system design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Mandhare | Software Engineer",
    description: "Software Engineer specializing in .NET, Go, React, APIs, and scalable system design.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}