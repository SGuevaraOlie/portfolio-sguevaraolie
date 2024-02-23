import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navbar";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#000000] via-[#121212] to-[#2D3436] mx-auto px-12 lg:px-72 py-2">
      <NavBar />
      <div className="container mt-48 mx-auto ">
        <HeroSection />
        <AboutMe />
      </div>
    </main>
  );
}
