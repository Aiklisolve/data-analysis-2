// app/layout.tsx
import "./globals.css";
import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Retail Insights Dashboard",
  description: "Preloaded demo for exploring key metrics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 flex flex-col">
        <header className="bg-white/80 backdrop-blur sticky top-0 z-10 border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold">Retail Insights Dashboard</h1>
              <div className="text-xs text-slate-500">Preloaded demo for exploring key metrics</div>
            </div>
            <div className="flex items-center gap-2">
              <Nav />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">{children}</main>

        <footer className="border-t bg-white/60">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex items-center justify-center">
            <span>© {new Date().getFullYear()} Retail Analytics Demo</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
