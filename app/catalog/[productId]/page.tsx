// "use client";

// import { useParams, usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { products } from "@/data/products";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import {
//   ArrowLeft,
//   IndianRupee,
//   Package,
//   Ruler,
//   Palette,
//   Sparkles,
//   Hash,
// } from "lucide-react";

// export default function ProductDetailPage() {
//   const { productId } = useParams();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [carouselApi, setCarouselApi] = useState<CarouselApi>();

//   const product = products.find(
//     (p) => p.name.toLowerCase().replace(/\s+/g, "-") === productId
//   );

  
  

//   useEffect(() => {
//     if (!carouselApi) return;

//     carouselApi.on("select", () => {
//       setSelectedImageIndex(carouselApi.selectedScrollSnap());
//     });
//   }, [carouselApi]);

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navbar />
//         <main className="container mx-auto px-4 py-14 text-center">
//           <h1 className="text-4xl font-bold text-foreground mb-4">
//             Product Not Found
//           </h1>
//           <p className="text-xl text-muted-foreground mb-8">
//             The product you’re looking for doesn’t exist.
//           </p>
//           <Button onClick={() => router.push("/catalog")}>
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Catalog
//           </Button>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
//   const handleContactClick = () => {
//     if (pathname === "/") {
//       document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       router.push("/?scrollToContact=true");
//     }
   
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <main className="container mx-auto px-6 py-8">
//         {/* Back + Breadcrumb */}
//         <div className="mb-6">
//           <Button
//             variant="ghost"
//             onClick={() => router.push("/catalog")}
//             className="mb-4"
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Catalog
//           </Button>

//           <nav className="text-sm text-muted-foreground">
//             <span>Home</span> / <span>Catalog</span> /{" "}
//             <span>{product.category}</span> /{" "}
//             <span className="text-foreground">{product.name}</span>
//           </nav>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 mb-12">
//           {/* Product Images */}
//           <div className="space-y-4">
//             <div className="relative w-full">
//               <Carousel className="w-full" setApi={setCarouselApi}>
//                 <CarouselContent>
//                   {product.images.map((image, index) => (
//                     <CarouselItem key={index}>
//                       <div className="flex justify-center items-center bg-surface-cool rounded-lg overflow-hidden max-h-[450px]">
//                         <img
//                           src={image}
//                           alt={`${product.name} - View ${index + 1}`}
//                           className="object-contain w-full max-h-[450px]"
//                         />
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>

//                 {/* Arrows clean + centered */}
//                 <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-md hover:bg-background transition" />
//                 <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-md hover:bg-background transition" />
//               </Carousel>
//             </div>

//             {/* Thumbnails */}
//             <div className="grid grid-cols-4 gap-2">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setSelectedImageIndex(index);
//                     carouselApi?.scrollTo(index);
//                   }}
//                   className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${
//                     selectedImageIndex === index
//                       ? "border-primary shadow-md"
//                       : "border-border hover:border-primary/50"
//                   }`}
//                 >
//                   <img
//                     src={image}
//                     alt={`${product.name} - Thumbnail ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="space-y-6">
//             <div>
//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-3">
//                 <Badge variant="outline">{product.category}</Badge>
//                 {product.productType && (
//                   <Badge variant="outline">{product.productType}</Badge>
//                 )}
//                 {product.productVariant && (
//                   <Badge variant="outline">{product.productVariant}</Badge>
//                 )}
//               </div>

//               <h1 className="text-4xl font-bold text-foreground mb-4">
//                 {product.name}
//               </h1>
//               <p className="text-xl text-muted-foreground leading-relaxed">
//                 {product.description}
//               </p>
//             </div>

//             {/* Stock */}
//            <div className="space-y-4">
//           <div>
//             <Badge
//               variant={product.inStock ? "default" : "destructive"}
//               className="text-sm px-3 py-1"
//             >
//               {product.inStock ? "In Stock" : "Out of Stock"}
//             </Badge>
//           </div>

//           {/* Contact Section */}
//           <div className="border-t pt-6">
//             <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-foreground mb-1">
//                   Get Quote & Details
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   Contact us for pricing and customization options.
//                 </p>
//               </div>
//               <Button
//                 onClick={handleContactClick}
//                 className="bg-[#D7263D] hover:bg-[#B91C30] text-white font-medium px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>


//             {/* Finish */}
//             {/* <div>
//               <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
//                 <Sparkles className="mr-2 h-5 w-5" /> Finish
//               </h3>
//               <Badge variant="secondary" className="text-sm">
//                 {product.finish}
//               </Badge>
//             </div> */}

//             {/* HSN */}
//             {/* <div>
//               <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
//                 <Hash className="mr-2 h-5 w-5" /> HSN Code
//               </h3>
//               <Badge variant="outline" className="text-sm">
//                 {product.hsnCode}
//               </Badge>
//             </div> */}
//           </div>
//         </div>

//         {/* Product Details Grid */}
//         {/* <div className="grid md:grid-cols-4 gap-6">
//           <Card>
//             <CardContent className="p-6 text-center">
//               <Ruler className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Size
//               </h3>
//               <p className="text-muted-foreground">{product.size}</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6 text-center">
//               <Palette className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Color
//               </h3>
//               <div className="flex items-center justify-center gap-2">
//                 <div
//                   className="w-6 h-6 rounded-full border border-border"
//                   style={{ backgroundColor: product.hsl }}
//                 />
//                 <span className="text-muted-foreground">{product.color}</span>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6 text-center">
//               <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Finish
//               </h3>
//               <p className="text-muted-foreground">{product.finish}</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6 text-center">
//               <Package className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-foreground mb-2">
//                 Category
//               </h3>
//               <p className="text-muted-foreground">{product.category}</p>
//             </CardContent>
//           </Card>
//         </div> */}
//       </main>

//       <Footer />
//     </div>
//   );
// }














"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  ArrowLeft,
  IndianRupee,
  Package,
  Ruler,
  Palette,
  Sparkles,
  Hash,
} from "lucide-react";

// Color mapping for common colors
const colorMap: Record<string, string> = {
  black: "#1a1a1a",
  white: "#ffffff",
  gray: "#808080",
  grey: "#808080",
  red: "#dc2626",
  blue: "#2563eb",
  green: "#16a34a",
  yellow: "#eab308",
  orange: "#ea580c",
  purple: "#9333ea",
  pink: "#ec4899",
  brown: "#a3681a",
  navy: "#1e3a8a",
  cream: "#fef7ed",
  beige: "#f5f5dc",
  maroon: "#7f1d1d",
};

// Function to get color value
const getColorValue = (color: string): string => {
  const colorLower = color.toLowerCase();
  return colorMap[colorLower] || color;
};

export default function ProductDetailPage() {
  const { productId } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === productId
  );

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setSelectedImageIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/catalog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleContactClick = () => {
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/?scrollToContact=true");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        {/* Back + Breadcrumb */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/catalog")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Button>

          <nav className="text-sm text-muted-foreground">
            <span>Home</span> / <span>Catalog</span> /{" "}
            <span>{product.category}</span> /{" "}
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative w-full">
              <Carousel className="w-full" setApi={setCarouselApi}>
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="flex justify-center items-center bg-surface-cool rounded-lg overflow-hidden max-h-[450px]">
                        <img
                          src={image}
                          alt={`${product.name} - View ${index + 1}`}
                          className="object-contain w-full max-h-[450px]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Arrows clean + centered */}
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-md hover:bg-background transition" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-md hover:bg-background transition" />
              </Carousel>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImageIndex(index);
                    carouselApi?.scrollTo(index);
                  }}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index
                      ? "border-primary shadow-md"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline">{product.category}</Badge>
                {product.productType && (
                  <Badge variant="outline">{product.productType}</Badge>
                )}
                {product.productVariant && (
                  <Badge variant="outline">{product.productVariant}</Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Available Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <Palette className="mr-2 h-5 w-5" /> 
                  Available Colors
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 cursor-pointer bg-background/50 hover:bg-background"
                    >
                      <div
                        className="w-5 h-5 rounded-full border-2 border-border shadow-sm group-hover:border-primary/50 transition-colors"
                        style={{ 
                          backgroundColor: getColorValue(color),
                          // Add a subtle inner shadow for better visibility of light colors
                          boxShadow: color.toLowerCase() === 'white' || color.toLowerCase() === 'cream' 
                            ? 'inset 0 1px 2px rgba(0,0,0,0.1)' 
                            : undefined
                        }}
                      />
                      <span className="text-sm font-medium text-foreground capitalize group-hover:text-primary transition-colors">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stock */}
            <div className="space-y-4">
              <div>
                <Badge
                  variant={product.inStock ? "default" : "destructive"}
                  className="text-sm px-3 py-1"
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              {/* Contact Section */}
              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Get Quote & Details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Contact us for pricing and customization options.
                    </p>
                  </div>
                  <Button
                    onClick={handleContactClick}
                    className="bg-[#D7263D] hover:bg-[#B91C30] text-white font-medium px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Finish */}
            {/* <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Sparkles className="mr-2 h-5 w-5" /> Finish
              </h3>
              <Badge variant="secondary" className="text-sm">
                {product.finish}
              </Badge>
            </div> */}

            {/* HSN */}
            {/* <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Hash className="mr-2 h-5 w-5" /> HSN Code
              </h3>
              <Badge variant="outline" className="text-sm">
                {product.hsnCode}
              </Badge>
            </div> */}
          </div>
        </div>

        {/* Product Details Grid */}
        {/* <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Ruler className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Size
              </h3>
              <p className="text-muted-foreground">{product.size}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Palette className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Color
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border border-border"
                  style={{ backgroundColor: product.hsl }}
                />
                <span className="text-muted-foreground">{product.color}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Finish
              </h3>
              <p className="text-muted-foreground">{product.finish}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Category
              </h3>
              <p className="text-muted-foreground">{product.category}</p>
            </CardContent>
          </Card>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
