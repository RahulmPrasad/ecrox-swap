import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

// Vendor styles first, in the same order as the original template
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/v5-font-face.min.css";
import "@/styles/vendor/slick.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Ecrox Swap",
  description: "Ecrox Swap - The Revolutionary Currency Swap platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
