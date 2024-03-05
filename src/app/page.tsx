'use client'
import React, { useState, useEffect } from 'react';
import HeroSection from "@/components/section components/HeroSection";
import NavBar from "@/components/functional components/NavBar";
import AboutMe from "@/components/section components/AboutMe";
import ProjectsSection from "@/components/section components/ProjectsSection";
import EmailSection from "@/components/section components/EmailSection";
import Footer from "@/components/functional components/Footer";

import esTranslations from '../translations/es.json';
import enTranslations from '../translations/en.json';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#000000] via-[#121212] to-[#2D3436] ">
      <NavBar language={language} onLanguageChange={handleLanguageChange} translations={language === 'es' ? esTranslations : enTranslations} />
      <div className="container mt-28 lg:mt-48 mx-auto px-12 lg:px-32">
        <HeroSection translations={language === 'es' ? esTranslations : enTranslations} />
        <AboutMe translations={language === 'es' ? esTranslations : enTranslations}/>
        <ProjectsSection translations={language === 'es' ? esTranslations : enTranslations}/>
        <EmailSection translations={language === 'es' ? esTranslations : enTranslations}/>
      </div>
      <Footer translations={language === 'es' ? esTranslations : enTranslations}/>
    </main>
  );
}