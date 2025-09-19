// import { cn } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Grid3X3, 
//   Armchair, 
//   Table2, 
//   Archive, 
//   ClipboardList, 
//   Presentation, 
//   BookOpen,
//   LayoutGrid,
//   ChevronRight,
//   Sofa
// } from "lucide-react";

// interface CatalogSidebarProps {
//   categories: string[];
//   selectedCategory: string | null;
//   onCategorySelect: (category: string | null) => void;
//   productCounts: Record<string, number>;
//   productTypes: string[];
//   selectedProductType: string | null;
//   onProductTypeSelect: (productType: string | null) => void;
// }

// const getCategoryIcon = (category: string) => {
//   switch (category.toLowerCase()) {
//     case 'chairs': return Armchair;
//     case 'tables': return Table2;
//     case 'storage systems': return Archive;
//     case 'boards': return ClipboardList;
//     case 'podiums': return Presentation;
//     case 'magazine stands': return BookOpen;
//     case 'sofas': return Sofa;
//     default: return Grid3X3;
//   }
// };

// export const CatalogSidebar = ({ 
//   categories, 
//   selectedCategory, 
//   onCategorySelect, 
//   productCounts,
//   productTypes,
//   selectedProductType,
//   onProductTypeSelect
// }: CatalogSidebarProps) => {
//   return (
//     <aside className="w-72 bg-surface-cool/30 border-r border-neutral-200/60 p-6">
//       <div className="space-y-6">
        
//         {/* Header */}
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <LayoutGrid className="h-5 w-5 text-primary" />
//             <h3 className="text-lg font-semibold text-foreground">Browse Products</h3>
//           </div>
//           <p className="text-sm text-muted-foreground">
//             Choose a category or filter by type
//           </p>
//         </div>

//         {/* Categories + Product Types together */}
//         <div className="space-y-4">
//           <h4 className="text-sm font-medium text-muted-foreground">Categories</h4>
          
//           <div className="space-y-1">
//             {/* All Products */}
//             <button
//               onClick={() => onCategorySelect(null)}
//               className={cn(
//                 "flex items-center gap-3 w-full px-4 py-3 rounded-lg transition",
//                 selectedCategory === null
//                   ? "bg-primary/10 border border-primary/20 text-primary font-medium shadow-sm"
//                   : "hover:bg-neutral-50 text-foreground"
//               )}
//             >
//               <LayoutGrid className="h-4 w-4" />
//               <span className="flex-1">All Products</span>
//               <Badge 
//                 variant={selectedCategory === null ? "default" : "outline"} 
//                 className="text-xs font-medium"
//               >
//                 {Object.values(productCounts).reduce((a, b) => a + b, 0)}
//               </Badge>
//             </button>

//             {categories.map((category) => {
//               const IconComponent = getCategoryIcon(category);
//               const isSelected = selectedCategory === category;

//               return (
//                 <div key={category} className="space-y-1">
//                   {/* Category Button */}
//                   <button
//                     onClick={() => onCategorySelect(category)}
//                     className={cn(
//                       "flex items-center gap-3 w-full px-4 py-3 rounded-lg transition",
//                       isSelected
//                         ? "bg-primary/10 border border-primary/20 text-primary font-medium shadow-sm"
//                         : "hover:bg-neutral-50 text-foreground"
//                     )}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span className="flex-1">{category}</span>
//                     <Badge 
//                       variant={isSelected ? "default" : "outline"} 
//                       className="text-xs font-medium"
//                     >
//                       {productCounts[category] || 0}
//                     </Badge>
//                   </button>

//                   {/* Product Types appear directly under selected category */}
//                   {isSelected && productTypes.length > 0 && (
//                     <div className="ml-6 mt-2 space-y-1">
//                       {productTypes.map((productType) => {
//                         const isTypeSelected = selectedProductType === productType;
                        
//                         return (
//                           <button
//                             key={productType}
//                             onClick={() => onProductTypeSelect(isTypeSelected ? null : productType)}
//                             className={cn(
//                               "flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm transition",
//                               isTypeSelected
//                                 ? "bg-primary/15 border border-primary/30 text-primary font-medium"
//                                 : "hover:bg-neutral-50 text-muted-foreground hover:text-foreground"
//                             )}
//                           >
//                             <ChevronRight className={cn(
//                               "h-3 w-3 transition-transform",
//                               isTypeSelected ? "rotate-90 text-primary" : "text-muted-foreground/60"
//                             )} />
//                             <span className="flex-1">{productType}</span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };


"use client";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { 
  Grid3X3, 
  Armchair, 
  Table2, 
  Archive, 
  ClipboardList, 
  Presentation, 
  BookOpen,
  LayoutGrid,
  ChevronRight,
  Sofa
} from "lucide-react";

interface CatalogSidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  productCounts: Record<string, number>;
  productTypes: string[];
  selectedProductType: string | null;
  onProductTypeSelect: (productType: string | null) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "chairs": return Armchair;
    case "tables": return Table2;
    case "storage systems": return Archive;
    case "boards": return ClipboardList;
    case "podiums": return Presentation;
    case "magazine stands": return BookOpen;
    case "sofas": return Sofa;
    default: return Grid3X3;
  }
};

export const CatalogSidebar = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect, 
  productCounts,
  productTypes,
  selectedProductType,
  onProductTypeSelect
}: CatalogSidebarProps) => {
  return (
    <aside className="w-72 bg-surface-cool/30 border-r border-neutral-200/60 p-6">
      <div className="space-y-6">
        
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LayoutGrid className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Browse Products</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Choose a category or filter by type
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-1">
          {/* All Products */}
          <button
            onClick={() => onCategorySelect(null)}
            className={cn(
              "flex items-center gap-3 w-full px-4 py-3 rounded-lg transition",
              selectedCategory === null
                ? "bg-primary/10 border border-primary/20 text-primary font-medium shadow-sm"
                : "hover:bg-neutral-50 text-foreground"
            )}
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="flex-1">All Products</span>
            <Badge 
              variant={selectedCategory === null ? "default" : "outline"} 
              className="text-xs font-medium"
            >
              {Object.values(productCounts).reduce((a, b) => a + b, 0)}
            </Badge>
          </button>

          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            const isSelected = selectedCategory === category;

            return (
              <div key={category} className="space-y-1">
                {/* Category Button */}
                <button
                  onClick={() => 
                    onCategorySelect(isSelected ? null : category) // toggle collapse
                  }
                  className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-lg transition",
                    isSelected
                      ? "bg-primary/10 border border-primary/20 text-primary font-medium shadow-sm"
                      : "hover:bg-neutral-50 text-foreground"
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="flex-1">{category}</span>
                  <Badge 
                    variant={isSelected ? "default" : "outline"} 
                    className="text-xs font-medium"
                  >
                    {productCounts[category] || 0}
                  </Badge>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isSelected ? "rotate-90 text-primary" : "text-muted-foreground/60"
                    )}
                  />
                </button>

                {/* Collapsible Product Types */}
                {isSelected && productTypes.length > 0 && (
                  <div className="ml-8 mt-2 space-y-1">
                    {productTypes.map((productType) => {
                      const isTypeSelected = selectedProductType === productType;

                      return (
                        <button
                          key={productType}
                          onClick={() => onProductTypeSelect(isTypeSelected ? null : productType)}
                          className={cn(
                            "flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm transition",
                            isTypeSelected
                              ? "bg-primary/15 border border-primary/30 text-primary font-medium"
                              : "hover:bg-neutral-50 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <ChevronRight
                            className={cn(
                              "h-3 w-3 transition-transform",
                              isTypeSelected ? "rotate-90 text-primary" : "text-muted-foreground/60"
                            )}
                          />
                          <span className="flex-1">{productType}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
