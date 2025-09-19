"use client";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="">
            <h3 className="text-2xl font-bold text-[#D7263D]">RHINODESK</h3>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Office Furniture
             </p>
            <p className="leading-relaxed " style={{ color: "rgba(255,255,255,0.8)", }} >
              Your one-stop solution for all office furniture needs. From ergonomic chairs to functional desks, we offer a wide range of quality office essentials.</p>
            {/* <div className="flex space-x-4">
              For Social Media Icons (if needed in future)
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["MD Tables", "Conference Tables", "Workstations", "Premium Chairs", "Storage Systems"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="transition-colors"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {["Custom Design", "Installation", "Consultation","Extensive Collection"].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="transition-colors"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3" style={{ color: "rgba(255,255,255,0.8)" }}>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+91 7416157474</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>team@rhinodeskfurniture.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>
                 Hyderabad, Telangana<br />
                 India.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            © 2025 RhinoDesk. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
