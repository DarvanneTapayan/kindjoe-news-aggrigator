// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "KindJoe — News Hub",
  description: "Featured KindJoe stories + curated RSS in one place.",
  metadataBase: new URL("https://kindjoe.example.com"),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* 🔥 Force light mode here */}
      <body className="bg-white text-zinc-900 antialiased">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
