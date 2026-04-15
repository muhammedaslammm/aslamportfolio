import { Roboto, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Muhammed Aslam - Portfolio",
  description: "Muhammed Aslam's personal portfolio website.",
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${roboto.variable} ${archivo.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
