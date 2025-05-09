import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Container } from "./components/Container";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teach",
  description: "Teach students worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
