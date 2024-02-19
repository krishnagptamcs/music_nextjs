import type { Metadata } from "next";
import { Inter } from "next/font/google"; // google fonts
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // it accept the jsx element , that means react formate (due to type script)
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p>Nav Bar items</p>

        {children}
      </body>
    </html>
  );
}
