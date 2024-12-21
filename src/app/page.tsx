"use client";

import React from "react";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import AboutUs from "@/app/components/AboutUs";
import EventsSection from "@/app/components/EventsSection";
import DivisionsSection from "@/app/components/DivisionsSection";
import Gallery from "./components/Gallery";
import ArticlesSection from "@/app/components/ArticlesSection";
import JoinUsSection from "@/app/components/JoinUsSection";
import Footer from "@/app/components/Footer";

/**
 * The homepage of the website, containing all the main sections.
 *
 * This component renders the main sections of the website, including the
 * header, hero section, about us section, events section, divisions section,
 * gallery, articles section, join us section, and footer.
 *
 * @returns The TSX element representing the homepage.
 */
const Home: React.FC = () => {
  return (
    <div className="scroll-smooth font-sans">
      <Header />
      <HeroSection />
      <AboutUs />
      <EventsSection />
      <DivisionsSection />
      <Gallery />
      <ArticlesSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default Home;
