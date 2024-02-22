import Image from "next/image";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-16 lg:px-24 py-4">
      <HeroSection />
    </main>
  );
}
