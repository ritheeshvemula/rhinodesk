"use client";
export const dynamic = "force-dynamic";

import { useState, useMemo, useEffect, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CatalogSidebar } from "@/components/CatalogSidebar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, getUniqueCategories, getProductTypes } from "@/data/products";
import { Filter, ArrowLeft, Home } from "lucide-react";

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const categories = getUniqueCategories();
   
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    const productTypeFromUrl = searchParams.get('type');
    
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
      // Set product type if it exists and is valid for this category
      const validTypes = getProductTypes(categoryFromUrl);
      if (productTypeFromUrl && validTypes.includes(productTypeFromUrl)) {
        setSelectedProductType(productTypeFromUrl);
      } else {
        setSelectedProductType(null);
      }
    } else {
      // If no category in URL or invalid category, show all products
      setSelectedCategory(null);
      setSelectedProductType(null);
    }
  }, [searchParams, categories]);

  const productTypes = useMemo(() => {
    if (!selectedCategory) return [];
    return getProductTypes(selectedCategory);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedProductType) {
      filtered = filtered.filter((product) => product.productType === selectedProductType);
    }

    return filtered;
  }, [selectedCategory, selectedProductType]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedProductType(null);
    setMobileSidebarOpen(false);
    setCurrentPage(1);
    
    // Update URL without navigation using window.history.replaceState
    const params = new URLSearchParams();
    if (category) {
      params.set('category', category);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `/catalog?${queryString}` : '/catalog';
    window.history.replaceState(null, '', newUrl);
  };

  const handleProductTypeSelect = (productType: string | null) => {
    setSelectedProductType(productType);
    setCurrentPage(1);
    
    // Update URL without navigation using window.history.replaceState
    const params = new URLSearchParams();
    if (selectedCategory) {
      params.set('category', selectedCategory);
    }
    if (productType) {
      params.set('type', productType);
    }
    
    const queryString = params.toString();
    const newUrl = queryString ? `/catalog?${queryString}` : '/catalog';
    window.history.replaceState(null, '', newUrl);
  };

  const productCounts = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = products.filter((p) => p.category === category).length;
      return acc;
    }, {} as Record<string, number>);
  }, [categories]);

  function getPaginationRange(current: number, total: number): (number | "...")[] {
    const delta = 1;
    const range: (number | "...")[] = [];

    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);

    if (left > 2) {
      range.push("...");
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < total - 1) {
      range.push("...");
    }

    if (total > 1) {
      range.push(total);
    }

    return range;
  }

  return (
    <main className="flex min-h-screen">
      <aside className="hidden md:block w-68 border-none">
        <CatalogSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          productCounts={productCounts}
          productTypes={productTypes}
          selectedProductType={selectedProductType}
          onProductTypeSelect={handleProductTypeSelect}
        />
      </aside>

      <section className="flex-1 p-6">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium"
          >
            <Filter size={18} />
            {mobileSidebarOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {mobileSidebarOpen && (
          <div className="md:hidden mb-6 border rounded-lg p-4 bg-card">
            <CatalogSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
              productCounts={productCounts}
              productTypes={productTypes}
              selectedProductType={selectedProductType}
              onProductTypeSelect={handleProductTypeSelect}
            />
          </div>
        )}
        
        <div className="mb-4">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {selectedCategory ? selectedCategory : "All Products"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {selectedCategory
              ? `Discover our ${selectedCategory.toLowerCase()} collection`
              : "Browse our complete furniture catalog"}{" "}
            - {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={`${product.category}-${product.name}-${index}`}
              product={product}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No products found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {getPaginationRange(currentPage, totalPages).map((page, i) =>
              page === "..." ? (
                <span key={i} className="px-3 py-1">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page as number)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === page ? "bg-primary text-white" : ""
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function CatalogLoading() {
  return (
    <main className="flex min-h-screen">
      <aside className="hidden md:block w-68 border-none">
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      
      <section className="flex-1 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4 w-48"></div>
          <div className="h-12 bg-gray-200 rounded mb-8 w-96"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Catalog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Suspense fallback={<CatalogLoading />}>
        <CatalogContent />
      </Suspense>
      
      <Footer />
    </div>
  );
}