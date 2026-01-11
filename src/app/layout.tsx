import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tejas Mandhare | Builder",
  description: "Builder focused on backend systems and clean APIs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}