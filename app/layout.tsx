import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { BackgroundBeams } from "@/components/ui/background-beams";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JDS",
  description: "JAN DHAN SOLUTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
          <BackgroundBeams />
        </div>
        <div className=" z-10">{children}</div>
      </body>
    </html>
  );
}
