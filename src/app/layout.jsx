import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const awakenning = localFont({
  src: "../../public/fonts/AWAKENNING.ttf", // adjust path if needed
  variable: "--font-awakenning",
  display: "swap",
});
export const metadata = {
    metadataBase: new URL("https://www.ogourmet44600.fr"),
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
        url: "/logo.webp", // Assurez-vous que l'image est bien dans `/public`
        width: 1200,
        height: 630,
        alt: "Logo O'Gourmet - Restaurant Fast Food",
      },
    ],
    url: "http://www.ogourmet44600.fr",
    siteName: "O'Gourmet",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "http://www.ogourmet44600.fr", // ✅ Canonical pour éviter le duplicate content
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
         <head>
          
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
  <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${awakenning.variable} antialiased bg-white text-black`}>
  {children}
</body>
    </html>
  );
}
