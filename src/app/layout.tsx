import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { LocalizationProvider } from "./components/localization-provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teach",
  description: "Teach is an all-in-one platform designed to make the learning experience easier and more accessible for students and teachers worldwide. It connects international students and teachers, creating a global community for education. The platform provides a space to meet new students and teachers, collaborate on educational content, and share knowledge in a seamless way.",
  icons: {
    icon: "/images/favicon/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <LocalizationProvider>
          <Header />
          {children}
          <Footer />
        </LocalizationProvider>
      </body>
    </html>
  );
}
