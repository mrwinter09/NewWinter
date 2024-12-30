import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WinterDaoo",
  description:
    "Join WinterDao and explore top cryptos like Bitcoin, Ethereum, and Dogecoin. Stay updated with the latest trends in the cryptocurrency market.",
  keywords:
    "WinterDao, Bitcoin, Ethereum, Dogecoin, cryptocurrency, crypto trends, blockchain, crypto market",
  authors: [{ name: "WinterDao Team", url: "https://winterdao.org" }],
};

export const viewport = "width=device-width, initial-scale=1.0";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="WinterDao, Bitcoin, Ethereum, Dogecoin, cryptocurrency, crypto trends, blockchain, crypto market"
        />
        <meta name="authors" content="WinterDao Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>WinterDao - Welcome to the Future of Cryptocurrency</title>
        <link rel="icon" href={"/thirdweb.svg"} />
      </head>
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
