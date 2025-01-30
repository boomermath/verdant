import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const lato = Lato({
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
        className={`${lato.className} flex flex-col min-h-screen`}
      >
        <Header />
        <main className="text-slate-700 bg-cream-100 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
