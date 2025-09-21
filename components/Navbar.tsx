"use client";
import { useState, useEffect } from "react";
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

  // Add custom styles to head
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.4s ease-out forwards;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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
                className={`${montserrat.className} font-semibold text-sm`}
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
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-md" 
               onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-gradient-to-br from-background via-background/95 to-background/90 
                         backdrop-blur-xl border-b border-border/50 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto
                         animate-in slide-in-from-top-2 duration-300 ease-out">
            
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-[#D7263D]/0 via-[#D7263D] to-[#D7263D]/0" />
            
            <div className="px-6 py-8">
              {/* Welcome Text */}
              <div className="mb-8">
                <h2 className={`${poppins.className} text-2xl font-bold text-[#D7263D] mb-2`}>
                  Our Products
                </h2>
                <p className="text-muted-foreground text-sm">
                  Explore our premium office furniture collections
                </p>
              </div>

              {/* Mobile Categories */}
              <div className="space-y-3 mb-10">
                {categories.map((category, index) => (
                  <div 
                    key={category.name} 
                    className="group animate-fade-in-up"
                    style={{ 
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {/* Category Card */}
                    <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl border border-border/50 
                                   shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden
                                   hover:border-[#D7263D]/30 group-hover:transform group-hover:scale-[1.02]">
                      
                      {/* Category Header */}
                      <div className="flex items-center justify-between p-4">
                        <button
                          onClick={() => handleCategoryClick(category.cname)}
                          className={`${montserrat.className} text-left font-bold text-lg text-foreground 
                                   hover:text-[#D7263D] transition-all duration-300 flex-1 group-hover:translate-x-1`}
                        >
                          <span className="flex items-center">
                            <div className="w-2 h-2 bg-[#D7263D] rounded-full mr-3 opacity-0 group-hover:opacity-100 
                                          transition-opacity duration-300" />
                            {category.name}
                          </span>
                        </button>
                        
                        <button
                          onClick={() => toggleMobileCategory(category.name)}
                          className="p-3 rounded-full hover:bg-muted/50 text-muted-foreground hover:text-[#D7263D] 
                                   transition-all duration-300 hover:scale-110"
                        >
                          <ChevronDown 
                            className={`h-5 w-5 transition-transform duration-300 ${
                              expandedMobileCategory === category.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Category Description (Expandable) */}
                      <div className={`overflow-hidden transition-all duration-500 ease-out ${
                        expandedMobileCategory === category.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-4 pb-6">
                          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 border border-border/30">
                            <div className="flex flex-col gap-4">
                              <div className="relative overflow-hidden rounded-lg group/image">
                                <img
                                  src={category.image}
                                  alt={category.name}
                                  className="w-full h-32 object-cover transition-transform duration-500 
                                           group-hover/image:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                                               opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="space-y-2">
                                <h4 className={`${montserrat.className} font-semibold text-foreground`}>
                                  {category.name}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Contact & WhatsApp */}
              <div className="space-y-4 pt-8 border-t border-gradient-to-r from-border/0 via-border to-border/0">
                <div className="text-center mb-6">
                  <h3 className={`${montserrat.className} font-bold text-lg text-foreground mb-2`}>
                    Get in Touch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ready to transform your workspace?
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="ghost"
                    className={`${montserrat.className} w-full justify-center font-semibold text-lg h-14 
                             bg-gradient-to-r from-muted/50 to-muted/30 hover:from-muted/70 hover:to-muted/50
                             border border-border/50 rounded-xl transition-all duration-300 
                             hover:scale-[1.02] hover:shadow-lg group`}
                    onClick={handleContactClick}
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#D7263D] rounded-full mr-3 animate-pulse" />
                      CONTACT US
                    </div>
                  </Button>
                  
                  <Link href="https://wa.me/7416157474" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-14 bg-gradient-to-r from-[#25D366] to-[#20BA5A] 
                                     hover:from-[#20BA5A] hover:to-[#1BA94C] text-white font-bold text-lg
                                     rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                                     hover:scale-[1.02] border-2 border-white/20 group">
                      <div className="flex items-center">
                        <MessageCircle className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                        WhatsApp Chat
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};