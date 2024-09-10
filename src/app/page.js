import Navbar from "@/components/navbar";
import CaseStudy from "@/pages/landingpage/casestudy";
import Footer from "@/pages/landingpage/footer";
import Hero from "@/pages/landingpage/hero";
import Projects from "@/pages/landingpage/projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <CaseStudy />
      <Footer />
    </main>
  );
}
