import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Path",
  description: "A clear, practical path toward your next career opportunity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
          >
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-blue-700 dark:text-blue-400"
            >
              Career Path
            </Link>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
              <Link className="transition-colors hover:text-blue-600" href="/">
                Home
              </Link>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/plan"
              >
                Plan
              </Link>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/opportunities"
              >
                Opportunities
              </Link>
              <Link
                className="transition-colors hover:text-blue-600"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
