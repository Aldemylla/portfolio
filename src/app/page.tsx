import { Presentation } from "@/components/Presentation";
import { Techs } from "@/components/Techs";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className='grid justify-items-center space-y-16 m-auto pt-16 max-w-xl'>
      <Presentation />
      <Techs />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

