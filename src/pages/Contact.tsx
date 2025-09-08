import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, Users, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";  // Adjust path as needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "general"
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("contact_messages")   // The name of your Supabase table
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          inquiry_type: formData.inquiryType,  // use snake_case if your table columns are named that way
          created_at: new Date().toISOString() // optional timestamp
        }
      ]);

    setLoading(false);

    if (error) {
      console.error("Error inserting contact message:", error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again later.",
        
      });
    } else {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        inquiryType: "general"
      });
    }
  };

  // Rest of your component stays the same...

  const contactInfo = [
    {
      icon: MapPin,
      title: "Registered Office",
      details:
        "Rajarhat Main Rd, Majarhati, Raigachi, Reekjoyoni, \n Kolkata, West Bengal 700135, India"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "Main: +91 90511 93355\nSales: +91 90511 93355\nCustomer Care: +91 90511 93355"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: "General: customercare@aleixo.in"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "distributor", label: "Distributorship" },
    { value: "bulk", label: "Bulk Orders" },
    { value: "technical", label: "Technical Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trust-blue to-clinical-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team for inquiries, partnerships, or support
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-primary">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <Badge
                            key={type.value}
                            variant={formData.inquiryType === type.value ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setFormData({ ...formData, inquiryType: type.value })}
                          >
                            {type.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>

                    <Button type="submit" className="w-full" variant="hero" disabled={loading}>
                      <Send className="h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Distributor Inquiry CTA */}
              <Card className="bg-gradient-to-r from-primary to-medical-blue text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Become a Distributor</h3>
                  <p className="mb-4 opacity-90">Join our network of trusted distributors and partners</p>
                  <Button variant="secondary">
                    <Building className="h-4 w-4" />
                    Distributor Application
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
