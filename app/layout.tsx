import "./globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guransh Academy",
  description: "The Best Montessori in all of Tarahara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
