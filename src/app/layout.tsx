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
  description: "Teach students worldwide",
  icons: {
    icon: "/images/favicon/favicon.ico",
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
