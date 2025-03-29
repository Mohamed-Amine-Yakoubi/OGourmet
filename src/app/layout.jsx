import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
 
 
 
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "O'Gourmet - Restaurent Fastfood à Saint-Nazaire",
  description: "Découvrez O'Gourmet, un restaurent fastfood à Saint-Nazaire avec une large gamme de burgers, pizzas et plus.",
  openGraph: {
    title: "O'Gourmet - Restaurent Fastfood à Saint-Nazaire",
    description: "Des plats délicieux et rapides, avec livraison à domicile. Commandez dès aujourd'hui !",
    images: [
      {
        url: "../../public/logo.png",
        width: 800,
        height: 600,
        alt: "O'Gourmet Restaurent Fastfood",
      },
    ],
    url: "https://ogourmet.com",
    siteName: "O'Gourmet",
  }  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="O'Gourmet - Restaurent Fastfood à Saint-Nazaire" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="any" />
  
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black `}
      >
        {children}
      </body>
    </html>
  );
}
