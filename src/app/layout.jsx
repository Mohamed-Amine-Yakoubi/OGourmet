import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "O'Gourmet - Restaurant Fast Food à Saint-Nazaire",
  description:
    "Découvrez O'Gourmet, votre restaurant fast food à Saint-Nazaire ! Savourez nos burgers gourmets, pizzas croustillantes et bien plus!",
  keywords: "restaurant, fast food, Saint-Nazaire, burgers, pizzas, livraison",
  robots: "index, follow", // ✅ Important pour l'indexation Google
  openGraph: {
    title: "O'Gourmet - Restaurant Fast Food à Saint-Nazaire",
    description:
      "Plats savoureux, service rapide et livraison à domicile. Profitez d'une expérience culinaire unique avec O'Gourmet !",
    images: [
      {
        url: "/logo.png", // Assurez-vous que l'image est bien dans `/public`
        width: 1200,
        height: 630,
        alt: "Logo O'Gourmet - Restaurant Fast Food",
      },
    ],
    url: "https://ogourmet.com",
    siteName: "O'Gourmet",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ogourmet.com", // ✅ Canonical pour éviter le duplicate content
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
