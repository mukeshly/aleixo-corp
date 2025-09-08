import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethical conduct in all our operations."
    },
    {
      icon: Target,
      title: "Quality",
      description: "Every product undergoes rigorous testing to ensure safety and efficacy for our patients."
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Our focus remains on improving patient outcomes and accessibility to quality healthcare."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We continuously invest in research and development to bring advanced healthcare solutions."
    }
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", description: "Aleixo Pharma established with a vision to transform healthcare" },
    { year: "2021", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2022", title: "WHO-GMP Approval", description: "Manufacturing facility approved by WHO-GMP standards" },
    { year: "2023", title: "Product Portfolio Expansion", description: "Expanded to 50+ pharmaceutical products across therapeutic areas" },
    { year: "2025", title: "Market Leadership", description: "Established as a trusted pharma brand across India" },
    { year: "2025", title: "Innovation Focus", description: "Launched dedicated R&D facility for new drug development" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trust-blue to-clinical-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Aleixo Pharma
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Pioneering pharmaceutical excellence since 2021, committed to delivering 
              trusted healthcare solutions that improve lives across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2021 with a simple yet powerful vision: to make quality healthcare 
                  accessible to every Indian. Aleixo Pharma began as a small pharmaceutical 
                  company with big dreams and an unwavering commitment to integrity.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, we stand as a testament to what dedication, innovation, and patient-first 
                  approach can achieve. Our journey from a startup to a trusted pharmaceutical 
                  brand reflects our core values and the trust placed in us by healthcare 
                  professionals and patients alike.
                </p>
                <Button variant="hero" className="hidden">  
                  <Award className="h-4 w-4" />
                  View Our Certifications 
                </Button>
              </div>
              <div className="space-y-6">
                <Card className="bg-trust-blue border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">Mission</h3>
                    <p className="text-muted-foreground">
                      To provide safe, effective, and affordable pharmaceutical products 
                      that enhance the quality of life for patients worldwide.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-trust-blue border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">Vision</h3>
                    <p className="text-muted-foreground">
                      To be India's most trusted pharmaceutical company, recognized 
                      for innovation, integrity, and patient-centric healthcare solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-clinical-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every product we develop
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped Aleixo Pharma into the trusted healthcare partner we are today
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;