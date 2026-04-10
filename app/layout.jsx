import { Merriweather_Sans, Merriweather } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Muhammed Aslam - Portfolio",
  description: "Muhammed Aslam's personal portfolio website.",
};

const merrieweather_sans = Merriweather_Sans({
  variable: "--font-merrieweather_sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const merrieweather = Merriweather({
  variable: "--font-merrieweather",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${merrieweather_sans.variable} ${merrieweather.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
