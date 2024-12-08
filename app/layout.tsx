import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const inter = Questrial({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Self hosted Analytics */}
      <script
        defer
        src="https://umami.max07.ch/script.js"
        data-website-id="246a00fd-70ff-4a21-be73-bcfd5d1a120c"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
