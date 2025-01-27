import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display"
});

export const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-lato flex flex-col min-h-screen"
      >
        <Header />
        <main className="text-slate-700 bg-cream-100 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
