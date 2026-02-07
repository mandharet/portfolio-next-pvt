import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/shadcn/sonner";
import { getPersonalConfig, getSiteConfig } from "@/lib/config";
import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

const siteConfig = getSiteConfig();
const personalConfig = getPersonalConfig();

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
              mermaid.initialize({ startOnLoad: true, theme: 'default' });
              
              // Re-render mermaid on page load
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                  mermaid.run();
                });
              } else {
                mermaid.run();
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar resumeEnabled={personalConfig.resume.enabled} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
