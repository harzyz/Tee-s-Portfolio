import Navbar from "@/components/navbar";
import CaseStudy from "@/features/landingpage/casestudy";
import Footer from "@/features/landingpage/footer";
import Hero from "@/features/landingpage/hero";
import Projects from "@/features/landingpage/projects";
import Skills from "@/features/landingpage/skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <CaseStudy />
      <Skills />
      {/* <Footer /> */}
    </main>
  );
}
