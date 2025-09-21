"use client";
export const dynamic = "force-dynamic";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PopularCategories } from "@/components/PopularCategories";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToContact = searchParams.get("scrollToContact");
    if (scrollToContact === "true") {
      const timeout = setTimeout(() => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return () => clearTimeout(timeout); 
    }
  }, [searchParams]);

  return (
    <main>
      <HeroCarousel />
      <PopularCategories />
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}

// Loading component for Suspense fallback
function HomeLoading() {
  return (
    <main>
      {/* Hero carousel skeleton */}
      <div className="relative h-[500px] md:h-[600px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-12 w-96 bg-gray-300 rounded mx-auto"></div>
            <div className="h-6 w-64 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Popular categories skeleton */}
      <div className="container mx-auto px-6 py-16">
        <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form skeleton */}
      <div className="container mx-auto px-6 py-16">
        <div className="h-10 w-48 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>

      <Footer />
    </div>
  );
}