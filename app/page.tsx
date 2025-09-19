"use client";
export const dynamic = "force-dynamic";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PopularCategories } from "@/components/PopularCategories";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run this in the browser
    const scrollToContact = searchParams.get("scrollToContact");
    if (scrollToContact === "true") {
      // Slight delay ensures page content is rendered before scrolling
      const timeout = setTimeout(() => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return () => clearTimeout(timeout); // cleanup
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroCarousel />
        <PopularCategories />
       <div id="contact">
        <ContactForm />
      </div>
      </main>

      <Footer />
    </div>
  );
}

