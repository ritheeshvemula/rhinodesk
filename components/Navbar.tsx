"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});

const categories = [
  {
    name: "OFFICE CHAIRS",
    cname: "Chairs",
    description: "Experience comfort and support with our ergonomic chairs, designed to promote better posture and long-lasting productivity.",
    image: "pc/bgchair.png",
  },
  {
    name: "OFFICE TABLES",
    cname: "Tables",
    description: "Sturdy, elegant tables crafted to enhance both workspaces and living areas, combining practicality with timeless design.",
    image: "pc/table.png",
  },
  {
    name: "STORAGE SYSTEMS",
    cname: "Storage Systems",
    description: "Simplify your space with modern storage solutions that balance functionality, durability, and a clean, organized look.",
    image: "pc/bgstorage.png",
  },
  {
    name: "BOARDS",
    cname: "Boards",
    description: "From meetings to brainstorming sessions, our boards provide clear, reliable surfaces to share ideas and drive collaboration.",
    image: "pc/board.png",
  },
  {
    name: "PODIUMS",
    cname: "Podiums",
    description: "Professional podiums designed to add confidence and presence to every presentation, meeting, or public address.",
    image: "pc/bgpodium.png",
  },
];

export const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/catalog?category=${encodeURIComponent(categoryName)}`);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileCategory = (categoryName: string) => {
    setExpandedMobileCategory(
      expandedMobileCategory === categoryName ? null : categoryName
    );
  };

  const handleContactClick = () => {
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/?scrollToContact=true");
    }
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      <nav className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center h-16 gap-8">
            
            {/* Left Column: Logo */}
            <div className="flex items-center justify-start">
              <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                <Image
                  src="/bglogo.png"
                  alt="RhinoDesk Logo"
                  width={43}
                  height={43}
                  className="object-contain align-middle"
                  priority
                />
                <span
                  className={`${poppins.className} text-4xl font-extrabold ml-[2px] tracking-tight text-[#D7263D] leading-none`}
                >
                  HINODESK
                </span>
              </Link>
            </div>

            {/* Middle Column: Categories */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={() => handleCategoryClick(category.cname)}
                  >
                    <button
                      className={`${montserrat.className} flex items-center px-3 py-2 text-sm font-semibold text-foreground leading-none whitespace-nowrap transition-colors hover:text-[#D7263D] hover:underline hover:cursor-pointer`}
                    >
                      {category.name}
                    </button>

                    {/* Desktop Dropdown */}
                    {hoveredCategory === category.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background border border-border rounded-lg shadow-large p-6 animate-fade-in">
                        <div className="flex gap-6 h-full">
                          <div className="flex-shrink-0">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="w-60 h-40 object-cover rounded-md"
                            />
                          </div>
                          <div className="flex flex-col justify-between flex-1">
                            <div>
                              <h3 className="font-semibold text-xl text-foreground mb-3">
                                {category.name}
                              </h3>
                              <p className="text-base text-muted-foreground leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact + WhatsApp */}
            <div className="flex items-center justify-end space-x-3">
              <Button
                variant="ghost"
                className={`${montserrat.className} font-semibold text-sm hover:cursor-pointer`}
                onClick={handleContactClick}
              >
                CONTACT
              </Button>
              <Link href="https://wa.me/7416157474" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-[#2fd520cb] hover:bg-[#3fc31bb1] hover:cursor-pointer text-white font-semibold">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
              <Image
                src="/bglogo.png"
                alt="RhinoDesk Logo"
                width={35}
                height={35}
                className="object-contain align-middle"
                priority
              />
              <span
                className={`${poppins.className} text-2xl sm:text-3xl font-extrabold ml-[2px] tracking-tight text-[#D7263D] leading-none`}
              >
                HINODESK
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-[#D7263D] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm">
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-6">
              
              {/* Mobile Categories */}
              <div className="space-y-4 mb-8">
                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    {/* Category Header */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleCategoryClick(category.cname)}
                        className={`${montserrat.className} text-left font-semibold text-lg text-foreground hover:text-[#D7263D] transition-colors flex-1`}
                      >
                        {category.name}
                      </button>
                      <button
                        onClick={() => toggleMobileCategory(category.name)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${
                            expandedMobileCategory === category.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Category Description (Expandable) */}
                    {expandedMobileCategory === category.name && (
                      <div className="pl-4 pb-4 border-l-2 border-[#D7263D]/20">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full sm:w-32 h-24 object-cover rounded-md"
                          />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact & WhatsApp */}
              <div className="space-y-4 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  className={`${montserrat.className} w-full justify-start font-semibold text-lg h-12`}
                  onClick={handleContactClick}
                >
                  CONTACT
                </Button>
                <Link href="https://wa.me/7416157474" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-[#2fd520cb] hover:bg-[#3fc31bb1] text-white font-semibold h-12">
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};