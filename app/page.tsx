// import { ContactForm } from "@/components/ContactForm";
// import { Footer } from "@/components/Footer";
// import { HeroCarousel } from "@/components/HeroCarousel";
// import { Navbar } from "@/components/Navbar";
// import { PopularCategories } from "@/components/PopularCategories";
// import { WhyChooseUs } from "@/components/WhyChooseUs";
// import Image from "next/image";

// export default function Home() {
//   return (
//      <div className="min-h-screen bg-background">
//       <Navbar/>
//       <main>
//         <HeroCarousel />
//         <PopularCategories />
//         <WhyChooseUs />
//         <ContactForm />
//       </main>
//       <Footer/>
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PopularCategories } from "@/components/PopularCategories";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToContact = searchParams.get("scrollToContact");
    if (scrollToContact === "true") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay ensures content is rendered
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <PopularCategories />
        {/* <WhyChooseUs /> */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
