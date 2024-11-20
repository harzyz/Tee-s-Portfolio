'use client'
import Aos from "aos";
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import CaseStudy from "@/features/landingpage/casestudy";
import Footer from "@/features/landingpage/footer";
import Hero from "@/features/landingpage/hero";
import Projects from "@/features/landingpage/projects";
import Skills from "@/features/landingpage/skills";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <CaseStudy />
      <Skills />
      <Footer />
    </div>
  );
};

export default LandingPage;
