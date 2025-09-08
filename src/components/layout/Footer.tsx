import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Shield, Award, CheckCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality & Research", href: "/quality" },
    { name: "Contact", href: "/contact" },
   
  ];

  const productCategories = [
    "Cardiac Range",
    "Hepato Protector",
    "Pain Management",
    "Nutritional",
  ];

  const certifications = [
    { name: "ISO Certified", icon: Shield },
    { name: "WHO-GMP", icon: Award },
    { name: "FSSAI Approved", icon: CheckCircle },
  ];

  return (
    <footer className="bg-clinical-gray border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary">Aleixo Pharma</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted Healthcare. Delivered with Integrity. Leading pharmaceutical 
              company in India committed to providing quality healthcare solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 90511 93355</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>customercare@aleixo.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Patna, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product Range</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <span className="text-sm text-muted-foreground">{category}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 text-medical-green" />
                    <span className="text-sm text-muted-foreground">{cert.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Aleixo Pharma. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;