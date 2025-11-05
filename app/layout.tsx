import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const noFlashScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var shouldDark = stored === 'dark' || (stored === null && prefersDark);
    var root = document.documentElement;
    if (shouldDark) root.classList.add('dark'); else root.classList.remove('dark');
  } catch (_) {}
})();
`;

export const metadata: Metadata = {
  title: "Congying Zhao | Full-Stack Developer",
  description: "Portfolio built with Next.js 15, TypeScript & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body
        className={`${font.className} antialiased bg-background text-foreground`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
