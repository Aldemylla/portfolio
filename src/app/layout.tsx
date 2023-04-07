import { Header } from "@/components/Header";
import { Outfit, Send_Flowers } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Aldemylla Meireles",
  description: "Uma desenvolvedora web apaixonada pelo front-end.",
};

const outfit = Outfit({
  variable: "--outfit",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const sendFlowers = Send_Flowers({
  variable: "--send-flowers",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br' className='scroll-smooth'>
      <body
        className={`bg-neutral-900 bg-[url('/background.svg')] bg-no-repeat bg-center bg-cover text-neutral-400 ${outfit.variable} ${sendFlowers.variable} font-outfit`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

