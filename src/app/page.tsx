import HeroSection from "@/components/section components/HeroSection";
import NavBar from "@/components/functional components/NavBar";
import AboutMe from "@/components/section components/AboutMe";
import ProjectsSection from "@/components/section components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#000000] via-[#121212] to-[#2D3436] mx-auto px-12 lg:px-72 py-2">
      <NavBar />
      <div className="container mt-24 lg:mt-48 mx-auto ">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
      </div>
    </main>
  );
}
