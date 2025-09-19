"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Montserrat  } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: ["700"], // adjust as needed
});


const slides = [
  {
    id: 1,
    image: "/hero/bg1.png",
    title: "Make a statement without saying a word.",
    subtitle: "Own the space with a table fit for a leader."
  },
  {
    id: 2,
    image: "/hero/bg2.jpeg",
    title: "Comfort, style, and support.",
    subtitle: "Chairs crafted for every space and need."
  },
  {
    id: 3,
    image: "/hero/bg3.png",
    title: "Smart Storage, Smarter Spaces.",
    subtitle: "Declutter your workspace with our storage solutions."
  },
  {
    id: 4,
    image: "/hero/bg4.png",
    title: "Brainstorming! Planning! Presentation!",
    subtitle: "Boards That Bring Your Ideas to Life."
  },
  {
    id: 5,
    image: "/hero/bg5.png",
    title: "Own The Spotlight!",
    subtitle: "Our Crafted PLB Podium Brings Warmth and Presence to Every Stage."
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden" style={{ backgroundColor: "#faf9f7" }}>
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-300" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffffffcc] to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl">
                  <h2 className={`${montserrat.className} text-4xl lg:text-5xl font-bold mb-4`} style={{ color: "#1d2530" }}>
                    {slide.title}
                  </h2>
                  <p className={`${montserrat.className} text-xl mb-8 leading-relaxed`} style={{ color: "#33383dff" }}>
                    {slide.subtitle}
                  </p>
                  <div className="flex space-x-4">
                    <Link href="/catalog">
                    <Button
                      size="lg"
                      className="hover:opacity-90 hover:cursor-pointer bg-[#D7263D] hover:bg-[#EB2842] text-white"
                     
                    >
                      View Catalog
                    </Button>
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors shadow-md"
        style={{ backgroundColor: "#ffffffcc" }}
      >
        <ChevronLeft className="h-6 w-6" style={{ color: "#1d2530" }} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors shadow-md"
        style={{ backgroundColor: "#ffffffcc" }}
      >
        <ChevronRight className="h-6 w-6" style={{ color: "#1d2530" }} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-3 h-3 rounded-full transition-colors"
            style={{
              backgroundColor: index === currentSlide ? "#1a2a40" : "#ffffff99"
            }}
          />
        ))}
      </div>
    </div>
  );
};
