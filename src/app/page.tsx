import { Presentation } from "@/components/Presentantion";
import { Techs } from "@/components/Techs";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Presentation />
      <Techs />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
