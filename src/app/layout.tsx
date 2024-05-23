import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MenuOverlay } from "../components/Menu/menuOverlay";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Bird",
  description: "Free Bird",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <main className="relative">
            <MenuOverlay />
            <Header />
            <div className="min-h-[100dvh]">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
