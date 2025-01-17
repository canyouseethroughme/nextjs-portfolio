import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/ui/globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
})

export const metadata: Metadata = {
  title: "Stefan Andrei",
  description: "Portfolio Website for Stefan Andrei, Software Engineer with a passion for Frontend Development.",
  icons:['/favicon.ico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
