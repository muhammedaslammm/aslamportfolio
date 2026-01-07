import { Google_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Muhammed Aslam - Portfolio",
  description: "Muhammed Aslam's personal portfolio website.",
};

const google_sans = Google_Sans({
  variable: "--font-google",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={google_sans.variable}>
      <body>{children}</body>
    </html>
  );
}
