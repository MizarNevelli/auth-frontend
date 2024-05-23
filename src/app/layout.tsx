import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "../components/header";
import { MenuOverlay } from "../components/menuOverlay";

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
        <ThemeProvider defaultTheme="light">
          <main className="relative dark:bg-slate-800 dark:text-gray-100">
            <MenuOverlay />
            <Header />
            <div className="min-h-[100dvh]">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
