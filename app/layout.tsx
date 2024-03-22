import { Poppins, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/text-types.css";
import "@/styles/flex-grid-types.css";
import {Providers} from "@/app/providers";
import SubHeader from "@/components/Layouts/header/SubHeader";
import Header from "@/components/Layouts/header/Header";
import Footer from "@/components/Layouts/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default:"Anasayfa",
    template:"%s | Serap Pala"
  },
  description: "Serap Pala ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Providers>
        <SubHeader/>
        <Header/>
        {children}
        <Footer/>
      </Providers>
      </body>
    </html>
  );
}
