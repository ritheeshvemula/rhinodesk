"use client";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    name: "Office Chairs",
   
    image: "/pc/bgchair.png",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    name: "Office Tables",
    
    image: "/pc/table.png",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    name: "Storage Systems",
    
    image: "/pc/bgstorage.png",
    className: "md:col-span-1 md:row-span-1"
  },
  
  {
    id: 4,
    name: "Boards",
   
    image: "/pc/board.png",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
     name: "Podiums",
    
    image: "/pc/bgpodium.png",
    className: "md:col-span-1 md:row-span-1"
  },
 
  
];

export const PopularCategories = () => {
  const router = useRouter();
  const handleCategoryClick = (categoryName: string) => {
    router.push(`/catalog?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#f9fbfc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#1d2530" }}>
            Popular Categories
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6d7b8c" }}>
            Experience our finest office furniture collections, tailored to elevate modern workplaces with tables, chairs and storages.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-large ${category.className} rounded-none`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t to-transparent"
                  style={{ backgroundImage: "linear-gradient(to top, #1d253099, transparent)" }}
                />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                {/* <p className="text-sm opacity-90">{category.description}</p> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
