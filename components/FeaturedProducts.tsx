"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Executive Leather Chair",
    category: "Office Furniture",
    image: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    price: "₹8992",
    description: "Premium leather executive chair with ergonomic design",
    inStock: true,
  },
  {
    id: 2,
    name: "Modern Conference Table",
    category: "Meeting Rooms",
    image: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    price: "₹2,4990",
    description: "Sleek conference table for professional meetings",
    inStock: false,
  },
  {
    id: 3,
    name: "Minimalist Office Desk",
    category: "Workstations",
    image: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    price: "₹6990",
    description: "Clean lines and functional design for modern offices",
    inStock: true,
  },
  {
    id: 4,
    name: "Elegant Dining Set",
    category: "Dining Room",
    image: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    price: "₹1,7995",
    description: "Contemporary dining table with matching chairs",
    inStock: false,
  },
  {
    id: 5,
    name: "Luxury Sofa Collection",
    category: "Living Room",
    image: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    price: "₹3,2995",
    description: "Premium sectional sofa with plush cushioning",
    inStock: true,
  },
  {
    id: 6,
    name: "Storage Cabinet System",
    category: "Storage",
    image: "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",
    price: "₹5490",
    description: "Modular storage solution for any space",
    inStock: false,
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#faf9f7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#1d2530" }}>
            Featured Collection
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6d7b8c" }}>
            Handpicked furniture pieces that represent the best of our craftsmanship and design philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(29,37,48,0)" }}
                />
                <Button
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#1d2530" }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm font-medium mb-2" style={{ color: "#1a2a40" }}>
                  {product.category}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1d2530" }}>
                  {product.name}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: "#6d7b8c" }}>
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold" style={{ color: "#1a2a40" }}>
                    {product.price}
                  </span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
                {product.inStock && (
                    <span
                    className="inline-block mt-3 px-3 py-1  text-xs font-medium rounded-full"
                    style={{ backgroundColor: "#e6f4ea", color: "#1b5e20" }}
                    >
                    In Stock
                    </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/catalog">
          <Button 
            size="lg" 
            style={{ backgroundColor: "#1a2a40", color: "#ffffff" }}
            className="hover:brightness-110 hover:cursor-pointer"
          >
            View Complete Catalog
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
