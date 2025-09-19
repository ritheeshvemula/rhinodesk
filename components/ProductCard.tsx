"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { IndianRupee } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productId = product.name.toLowerCase().replace(/\s+/g, "-");

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <Link href={`/catalog/${productId}`} passHref>
      <Card
        className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border-neutral-200/60"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-[4/3] overflow-hidden bg-surface-cool">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Category Badge */}
            <Badge variant="outline" className="text-xs font-medium">
              {product.category}
            </Badge>
            {product.productType && (
                <Badge variant="outline">{product.productType}</Badge>
            )}
            {product.productVariant && (
                <Badge variant="outline">{product.productVariant}</Badge>
            )}

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-foreground leading-tight line-clamp-2">
              {product.name}
            </h3>

            {/* Color */}
            {/* <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full border border-neutral-300"
                style={{ backgroundColor: product.hsl }}
              />
              <span className="text-sm text-muted-foreground">
                {product.color}
              </span>
            </div> */}

            {/* Price and Stock */}
            <div className="flex items-center justify-between pt-2">
             
              <Badge
                variant={product.inStock ? "default" : "destructive"}
                className="text-xs"
              >
                {product.inStock ? "Make To Order" : "Out of Stock"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
