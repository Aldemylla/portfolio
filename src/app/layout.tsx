import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Aldemylla Meireles",
  description: "Uma desenvolvedora web apaixonada pelo front-end.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className="bg-neutral-900 bg-[url('/background.svg')] bg-no-repeat bg-center bg-cover text-neutral-400">
        <Header />
        {children}
      </body>
    </html>
  );
}

