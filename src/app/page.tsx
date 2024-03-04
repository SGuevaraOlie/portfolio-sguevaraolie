import HeroSection from "@/components/section components/HeroSection";
import NavBar from "@/components/functional components/NavBar";
import AboutMe from "@/components/section components/AboutMe";
import ProjectsSection from "@/components/section components/ProjectsSection";
import EmailSection from "@/components/section components/EmailSection";
import Footer from "@/components/functional components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#000000] via-[#121212] to-[#2D3436] ">
      <NavBar />
      <div className="container mt-28 lg:mt-48 mx-auto px-12 lg:px-32">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
