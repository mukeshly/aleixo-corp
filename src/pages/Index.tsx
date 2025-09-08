import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Pill, 
  Activity, 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Phone,
  Beaker,
  FileText,
  SearchIcon,
  Bone,
  Apple
} from "lucide-react";
import heroImage from "@/assets/hero-pharma.jpg";

const Index = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Mission",
      description: "To provide safe, effective, and affordable pharmaceutical products that enhance quality of life"
    },
    {
      icon: Shield,
      title: "Vision", 
      description: "To be India's most trusted pharmaceutical company, recognized for innovation and integrity"
    },
    {
      icon: Users,
      title: "Values",
      description: "Integrity, Quality, Patient-Centric approach, and continuous Innovation in healthcare"
    }
  ];

  const productCategories = [
    { name: "Cardiac Range", icon: Heart, count: "8+ Products", color: "text-red-500" },
    { name: "Hepato Protector", icon: Shield, count: "5+ Products", color: "text-green-500" },
    { name: "Pain Management", icon: Activity, count: "6+ Products", color: "text-blue-500" },
    { name: "Urology / BPH", icon: Pill, count: "4+ Products", color: "text-purple-500" },
    { name: "Antibiotic", icon: Shield, count: "7+ Products", color: "text-orange-500" },
    { name: "PPI", icon: Beaker, count: "5+ Products", color: "text-emerald-500" },
    { name: "Calcium", icon: Bone, count: "5+ Products", color: "text-emerald-500" },
    { name: "Nutritional", icon: Apple, count: "5+ Products", color: "text-emerald-500" },
    { name: "Uncategorized", icon: SearchIcon, count: "10+ Products", color: "text-emerald-500" }
  ];

  const trustBadges = [
    { name: "ISO Certified", icon: Award },
    { name: "WHO-GMP", icon: CheckCircle },
    { name: "FSSAI Approved", icon: Shield },
    { name: "Drug License", icon: FileText }
  ];

  const stats = [
    { number: "50+", label: "Products", icon: Pill },
    { number: "9+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Healthcare Partners", icon: Users },
    { number: "25+", label: "States Covered", icon: Globe }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Pharmaceutical Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Trusted Healthcare.<br />
              <span className="text-medical-green">Delivered with Integrity.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Leading pharmaceutical company in India, committed to providing quality healthcare 
              solutions that improve lives through innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Users className="h-5 w-5" />
                  Explore Company
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="medical" size="lg">
                  <Pill className="h-5 w-5" />
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-clinical-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Aleixo Pharma</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on the foundation of trust, innovation, and unwavering commitment to patient care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of pharmaceutical products across major therapeutic areas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link key={index} to="/products">
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <IconComponent className={`h-6 w-6 ${category.color} group-hover:text-primary-foreground`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
                            <Badge variant="secondary">{category.count}</Badge>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="hero" size="lg">
                <Pill className="h-5 w-5" />
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-primary to-medical-blue text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-clinical-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Certified & Trusted</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognized by leading regulatory authorities for our commitment to quality and safety
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-medical-green mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary">{badge.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our network of healthcare partners and distributors. Get in touch for 
              bulk orders, distributorship opportunities, or any inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/quality">
                <Button variant="outline" size="lg">
                  <Award className="h-5 w-5" />
                  Quality Assurance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
