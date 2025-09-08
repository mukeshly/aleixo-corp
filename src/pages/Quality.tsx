import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Microscope, Leaf, Users, Globe, CheckCircle, FileText } from "lucide-react";

const Quality = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality standards",
      status: "Certified",
      year: "2021"
    },
    {
      title: "WHO-GMP",
      description: "World Health Organization Good Manufacturing Practices compliance",
      status: "Approved",
      year: "2022"
    },
    {
      title: "FSSAI",
      description: "Food Safety and Standards Authority of India license for nutraceuticals",
      status: "Licensed",
      year: "2021"
    },
    {
      title: "Drug License",
      description: "Manufacturing and distribution license from State Drug Control",
      status: "Valid",
      year: "2021"
    }
  ];

  const qualityStandards = [
    {
      icon: Microscope,
      title: "Advanced Testing",
      description: "State-of-the-art analytical laboratory with HPLC, GC-MS, and microbiology testing facilities"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive QA protocols covering raw materials, in-process, and finished product testing"
    },
    {
      icon: CheckCircle,
      title: "Batch Documentation",
      description: "Complete traceability and documentation for every batch from raw material to distribution"
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Full compliance with Indian drug regulations and international quality standards"
    }
  ];

  const csrInitiatives = [
    {
      icon: Users,
      title: "Healthcare Access",
      description: "Free medical camps and medicine distribution in rural areas"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Green manufacturing practices and waste reduction initiatives"
    },
    {
      icon: Globe,
      title: "Community Development",
      description: "Educational programs and healthcare awareness campaigns"
    }
  ];

  const researchAreas = [
    "Cardiovascular therapeutics",
    "Hepatoprotective formulations", 
    "Pain management solutions",
    "Nutritional supplements",
    "Generic drug development",
    "Novel drug delivery systems"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trust-blue to-clinical-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Quality & Research Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Committed to the highest standards of pharmaceutical quality, safety, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Quality Assurance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality is reflected in every aspect of our manufacturing process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{standard.title}</h3>
                    <p className="text-muted-foreground text-sm">{standard.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-clinical-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Certifications & Approvals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognized and certified by leading regulatory authorities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-medical-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                  <Badge variant="secondary">{cert.status} - {cert.year}</Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground text-center">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Research & Development</h2>
                <p className="text-muted-foreground mb-6">
                  Our dedicated R&D facility focuses on developing innovative pharmaceutical 
                  solutions that address unmet medical needs. We invest significantly in 
                  research to bring safe and effective medicines to market.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-primary">Current Research Areas:</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {researchAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-medical-green" />
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button variant="hero" className="hidden">
                  <FileText className="h-4 w-4" />
                  Research Publications
                </Button>
              </div>
              <div className="space-y-6">
                <Card className="bg-trust-blue border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">R&D Investment</h3>
                    <p className="text-3xl font-bold text-primary mb-2">15%</p>
                    <p className="text-muted-foreground">of annual revenue invested in research and development</p>
                  </CardContent>
                </Card>
                <Card className="bg-trust-blue border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">Active Projects</h3>
                    <p className="text-3xl font-bold text-primary mb-2">12+</p>
                    <p className="text-muted-foreground">research projects in various stages of development</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-16 bg-clinical-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Corporate Social Responsibility</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Committed to giving back to society and contributing to sustainable development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {csrInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-medical-green rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{initiative.title}</h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Quality Policy</h2>
            <div className="bg-trust-blue p-8 rounded-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                "At Aleixo Pharma, we are committed to manufacturing and supplying pharmaceutical 
                products of the highest quality that meet or exceed customer expectations and 
                regulatory requirements. We continuously improve our processes, invest in technology, 
                and maintain a culture of quality excellence throughout our organization."
              </p>
              <div className="mt-6 flex justify-center">
                <Button variant="medical" className="hidden">
                  <Shield className="h-4 w-4" />
                  Download Quality Manual
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;