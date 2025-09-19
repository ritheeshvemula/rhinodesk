"use client";
import { Shield, Truck, Award, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Every piece is crafted with the finest materials and attention to detail, ensuring durability and lasting beauty."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Professional delivery and setup service across the region with tracking and installation support."
  },
  {
    icon: Award,
    title: "Industry Experience",
    description: "Over 25 years of expertise in commercial and residential furniture solutions for discerning clients."
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated consultants to help you choose the perfect furniture for your space and requirements."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#1d2530" }}>
            Why Choose RhinoDesk?
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6d7b8c" }}>
            We are committed to providing exceptional furniture solutions that enhance your lifestyle and work environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-md transition-all duration-300 border-0"
              style={{ backgroundColor: "#faf9f7" }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "#e8e2dc",
                    color: "#1d2530"
                  }}
                >
                  <feature.icon className="h-8 w-8 group-hover:text-[#12171e]" />
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#1d2530" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "#6d7b8c" }} className="leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
