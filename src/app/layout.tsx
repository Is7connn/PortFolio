import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutPage from "@/components/layout/LayoutPage";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "IslamDev | FrontEnd Developer",
  description:
    "Islam is a talented Junior Frontend Developer with a burning desire to learn and develop in the field of web development. He is proficient in core HTML, CSS and JavaScript technologies and has basic experience with the React and Vue.js frameworks.",

  keywords:
    "Frontend Developer, Islam Sauranbaev, Is7, Is7Dev, , IslamDev, Islam dev, Islam Developer",
  robots: " , follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
