import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Joseph Emmanuel — Frontend Developer & UI/UX Designer",
  description:
    "Visually-driven Frontend Developer crafting experiences that delight users and shape the future of digital products. Based in Abuja, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${spaceGrotesk.variable}`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}