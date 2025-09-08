import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Pill, Activity, Search, SearchIcon, Bone, Apple, Beaker } from "lucide-react";
import { Input } from "@/components/ui/input";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Cardiac Range",
    "Hepato Protector",
    "Urology / BPH",
    "Pain Management",
    "Antibiotic",
    "PPI",
    "Calcium",
    "Nutritional",
    "Uncategorized"
  ];

  const products = [
    {
      id: "rosuxo-10-od",
      name: "Rosuxo 10 OD",
      category: "Cardiac Range",
      form: "Tablet",
      composition: "Rosuvastatin 10mg",
      indication: "Cholesterol management",
      benefit: "Helps lower cholesterol and reduce cardiovascular risk",
      icon: Heart
    },
    {
      id: "rosuxo-20",
      name: "Rosuxo 20",
      category: "Cardiac Range",
      form: "Tablet",
      composition: "Rosuvastatin 20mg",
      indication: "LDL cholesterol control",
      benefit: "Controls LDL cholesterol and maintains cardiovascular health",
      icon: Heart
    },
    {
      id: "rosuxo-asp-10",
      name: "Rosuxo ASP 10",
      category: "Cardiac Range",
      form: "Tablet",
      composition: "Rosuvastatin 10mg + Aspirin 75mg",
      indication: "Cholesterol and clot prevention",
      benefit: "Dual cholesterol management and clot prevention support",
      icon: Heart
    },
    {
      id: "rosuxo-c-10",
      name: "Rosuxo C 10",
      category: "Cardiac Range",
      form: "Capsule",
      composition: "Rosuvastatin 10mg + Clopidrogel Bisulphate 75mg",
      indication: "Cholesterol and antioxidant support",
      benefit: "Combines cholesterol-lowering and antioxidant support",
      icon: Heart
    },
    {
      id: "rosuxo-f-10",
      name: "Rosuxo F 10",
      category: "Cardiac Range",
      form: "Tablet",
      composition: "Rosuvastatin 10mg + Fenofibrate 160mg",
      indication: "Advanced lipid control",
      benefit: "Combines statin with fenofibrate for advanced lipid control",
      icon: Heart
    },
    {
      id: "rosuxo-gold-10",
      name: "Rosuxo GOLD 10",
      category: "Cardiac Range",
      form: "Capsule",
      composition: "Rosuvastatin Calcium 10mg + Clopidrogel Bisulphate 75mg + Aspirin 75mg",
      indication: "Comprehensive cardiac support",
      benefit: "Enhanced heart protection formula with multiple actives",
      icon: Heart
    },
    {
      id: "cvh-0-5",
      name: "CVH 0.5",
      category: "Hepato Protector",
      form: "Tablet",
      composition: "Entecavir 0.5mg",
      indication: "Chronic hepatitis B treatment",
      benefit: "Manages chronic hepatitis B infections",
      icon: Shield
    },
    {
      id: "udigrip-300-10",
      name: "Udigrip 300 (1x10)",
      category: "Hepato Protector",
      form: "Tablet",
      composition: "Ursodeoxycholic Acid 300mg",
      indication: "Gallstone dissolution and liver protection",
      benefit: "Dissolves gallstones & protects liver",
      icon: Shield
    },
    {
      id: "udigrip-300-15",
      name: "Udigrip 300 (1x15)",
      category: "Hepato Protector",
      form: "Tablet",
      composition: "Ursodeoxycholic Acid 300mg",
      indication: "Liver care and gallstone prevention",
      benefit: "Effective for gallstone & liver protection",
      icon: Shield
    },
    {
      id: "hiraba",
      name: "HIRABA",
      category: "Hepato Protector",
      form: "Tablet",
      composition: "Ademetionine (S-Adenosyl L-Methionine) 400 mg",
      indication: "Liver care and metabilic support",
      benefit: "Beneficial for liver detoxification, metabilic activity",
      icon: Shield
    },
    {
      id: "tamixo-0-4-od",
      name: "TAMIXO 0.4 OD",
      category: "Urology / BPH",
      form: "Tablet",
      composition: "Tamsulosin Hydrochloride 0.4mg",
      indication: "Benign prostatic hyperplasia (BPH) symptom relief",
      benefit: "Relieves urinary symptoms in BPH",
      icon: Pill
    },
    {
      id: "tamixo-plus",
      name: "TAMIXO Plus",
      category: "Urology / BPH",
      form: "Tablet",
      composition: "Tamsulosin 0.4mg + Dutasteride 0.5mg",
      indication: "Management of BPH and cholesterol control",
      benefit: "Dual action for BPH and cholesterol control",
      icon: Pill
    },
    {
      id: "udipod-plus",
      name: "UDIPOD Plus",
      category: "Urology / BPH",
      form: "Capsule",
      composition: "Silodosin 8mg + Dutasteride 0.5mg",
      indication: "Prostate support and urinary tract health",
      benefit: "Supports urinary tract and prostate health",
      icon: Pill
    },

    {
      id: "aleixon",
      name: "ALEIXON",
      category: "Pain Management",
      form: "Tablet",
      composition: "Acebrophyllin 100 mg + Acetylcysteine 600 mg",
      indication: "Moderate pain relief",
      benefit: "Fast-acting analgesic for moderate pain relief",
      icon: Activity
    },
    {
      id: "baton",
      name: "BATON",
      category: "Pain Management",
      form: "Tablet",
      composition: "Rutoside 200 mg + Trypsin 96 mg + Bromelain 180 mg",
      indication: "Chronic pain management",
      benefit: "Extended pain relief for chronic conditions",
      icon: Activity
    },
    {
      id: "gnorpen-400-nt",
      name: "GNORPEN 400 NT",
      category: "Pain Management",
      form: "Tablet",
      composition: "Gabapentin 400mg + Nortriptyline 10mg",
      indication: "Neuropathic pain",
      benefit: "Neuropathic pain relief with dual action",
      icon: Activity
    },
    {
      id: "tripmet-mn",
      name: "TRIPMET MN",
      category: "Pain Management",
      form: "Tablet",
      composition: "Pregabalin 75mg + Methylcobalamin 1500mcg + Nortriptyline 10mg",
      indication: "Pain and glucose control",
      benefit: "Dual therapy for pain and glucose control",
      icon: Activity
    },
    {
      id: "tripmet-mnp",
      name: "TRIPMET MNP",
      category: "Pain Management",
      form: "Tablet",
      composition: "Pregabalin 75mg + Methylcobalamin 1500mcg",
      indication: "Metabolic and nerve pain",
      benefit: "Pain relief with metabolic support",
      icon: Activity
    },
    {
      id: "winba-500",
      name: "WINBA 500",
      category: "Pain Management",
      form: "Tablet",
      composition: "Citicoline 500mg + Pregabalin 800mg",
      indication: "Severe pain conditions",
      benefit: "High-potency pain relief for severe conditions",
      icon: Activity
    },
    {
      id: "zfin-sp",
      name: "ZFIN SP",
      category: "Pain Management",
      form: "Tablet",
      composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
      indication: "Muscle pain and inflammation",
      benefit: "Muscle relaxant and pain reliever combo",
      icon: Activity
    },
    {
      id: "cefurixo",
      name: "CEFURIXO",
      category: "Antibiotic",
      form: "Tablet",
      composition: "Cefuroxime Axetil 500mg",
      indication: "Bacterial infections",
      benefit: "Broad-spectrum antibiotic for bacterial infections",
      icon: Shield

    },
    {
      id: "itixo-injection",
      name: "ITIXO 1.5 Injection",
      category: "Antibiotic",
      form: "Injection",
      composition: "Ceftriaxone 1000 mg + Sulbactam 500 mg",
      indication: "Severe infections",
      benefit: "Powerful antibiotic for severe infections",
      icon: Shield
    },
    {
      id: "itixo-1-injection",
      name: "ITIXO 1 Injection",
      category: "Antibiotic",
      form: "Injection",
      composition: "Cefteiaxone 1000 mg",
      indication: "Severe infections",
      benefit: "Powerful antibiotic for severe infections",
      icon: Shield
    },
    {
      id: "linzixo",
      name: "LINZIXO",
      category: "Antibiotic",
      form: "Tablet",
      composition: "Linezolid 600mg",
      indication: "Resistant bacterial infections",
      benefit: "Linezolid-based antibiotic for resistant infections",
      icon: Shield
    },
    {
      id: "xcinzo-injection",
      name: "XCINZO Injection",
      category: "Antibiotic",
      form: "Injection",
      composition: "Piperacillin 4g + Tazobactam 0.5gm",
      indication: "Multi-drug resistant infections",
      benefit: "Combats multi-drug resistant infections",
      icon: Shield
    },
    {
      id: "axodigex-gel",
      name: "AXODIGEX GEL",
      category: "PPI",
      form: "Gel",
      composition: "Oxetacaine 10mg/5ml + Aluminium Hydroxide 0.291gm/5ml + Magnesium Hydroxide 98mg",
      indication: "Digestive discomfort",
      benefit: "Topical relief for digestive discomfort",
      icon: SearchIcon

    },
    {
      id: "impraon-dsr",
      name: "IMPRAON DSR",
      category: "PPI",
      form: "Capsule",
      composition: "Esomeprazole 40mg (EC)+ Domperidone 30mg (SR)",
      indication: "GERD and acidity",
      benefit: "Dual-action acid reducer",
      icon: Beaker
    },
    {
      id: "xpantoz-dsr",
      name: "XPANTOZ DSR",
      category: "PPI",
      form: "Capsule",
      composition: "Pantoprazole 40 mg (EC) + Domperidone 30mg (PR)",
      indication: "Acidity and ulcers",
      benefit: "Long-lasting acid suppression",
      icon: Beaker
    },
    {
      id: "xpantoz-40",
      name: "XPANTOZ 40",
      category: "PPI",
      form: "Tablet",
      composition: "Pantoprazole 40mg",
      indication: "Gastric disorders",
      benefit: "Acid reducer for gastric disorders",
      icon: Beaker
    },
    {
      id: "leixo-d3-60k",
      name: "LEIXO D3 60K",
      category: "Calcium",
      form: "Softgel",
      composition: "Cholecalciferol (Vitamin D3) 60,000 IU",
      indication: "Bone health and immunity",
      benefit: "High-dose Vitamin D3 supplement",
      icon: Bone
    },
    {
      id: "leixo-fem",
      name: "LEIXO FEM",
      category: "Calcium",
      form: "Tablet",
      composition: "Calcium Carbonate 1250 mg + Vitamin D3 2000 IU + Methylcobalamin 1500 mcg + L-Methylfolate Calcium 1 mg + Pyridoxal 5-Phospate 20 mg",
      indication: "Women's health and bone support",
      benefit: "Women's health and bone support",
      icon: Bone
    },
    {
      id: "iixovit-cal-k27",
      name: "IIXOVIT CAL K27",
      category: "Calcium",
      form: "Capsule",
      composition: "Calcitriol 0.25 mcg + Calcium Carbonate 500 mg + Zinc 7.5 mg + Magnesium 50 mg + Vitamin K2 45 mcg + Methylcobalamin 1500 mcg + L-Methyl Folate 800 mcg",
      indication: "Bone and heart health",
      benefit: "Bone and heart health support",
      icon: Bone
    },
    {
      id: "casmont-lc",
      name: "CASMONT LC",
      category: "Uncategorized",
      form: "Tablet",
      composition: "Montelukast Sodium 10mg + Levocetirizine HCI 5mg",
      indication: "Allergy and inflammation",
      benefit: "Allergy and inflammation relief",
      icon: SearchIcon
    },
    {
      id: "vonba-od",
      name: "VONBA OD",
      category: "Uncategorized",
      form: "Tablet",
      composition: "Doxylamine Succinate 20mg + Pyridoxine Hydrochloride 20mg",
      indication: "Nausea and bloating",
      benefit: "Controls nausea and improves gut motility",
      icon: SearchIcon
    },
    {
      id: "xladcot",
      name: "XLADCOT",
      category: "Uncategorized",
      form: "Tablet",
      composition: "Deflazacort 6mg",
      indication: "Digestive support",
      benefit: "Digestive enzyme support for better absorption",
      icon: SearchIcon
    },
    {
      id: "ixovit-daily-gold",
      name: "IXOVIT DAILY GOLD",
      category: "Nutritional",
      form: "Softgel Capsule",
      composition: "Axtaxanthin, Lycopene, Green Tea Extract, Cranberry Extract with Multivitamin & Multimineral",
      indication: "Daily nutritional support",
      benefit: "Daily multivitamin with antioxidant support",
      icon: Apple

    },
    {
      id: "ixovit-9g",
      name: "IXOVIT 9G",
      category: "Nutritional",
      form: "Capsule",
      composition: "Ginseng, Green Tea Extract, Grape Seed Extract, Ginkgo Biloba, Garlic Powder, Guggul, Giner Root Extract, Green Coffee Bean Extract, Glycrrhiza Glabra Extract, Lycopene, Omega 3 Fatty Acids, Multivitamin & Multimineral, Essential Amino Acids, L-Carnitine L-Tartrate & Trace Elements",
      indication: "Nutritional and immunity support",
      benefit: "Advanced multinutrient formula",
      icon: Apple
    },
    {
      id: "ixovit-protein-sf",
      name: "IXOVIT PROTEIN SF",
      category: "Nutritional",
      form: "Powder",
      composition: "Sugar-free protein",
      indication: "Daily nutrition",
      benefit: "Sugar-free protein supplement for daily nutrition",
      icon: Apple
    },
    {
      id: "ixovit-fol",
      name: "IXOVIT FOL",
      category: "Nutritional",
      form: "Softgel Capsules",
      composition: "L-Methylfolate 1 mg + Methylcobalamin 1500 mcg +Pyridoxal 5-Phosphate 0.5 mg + Docosahexaenoic Acid40% 200 mg",
      indication: "Cellular and pregnancy health",
      benefit: "Folate-rich supplement for cellular health",
      icon: Apple
    }
    
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trust-blue to-clinical-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive range of quality pharmaceutical products across therapeutic areas
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products or compositions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                            <Badge variant="secondary" className="mt-1">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Form:</span>
                          <span className="font-medium">{product.form}</span>
                        </div>
                        <div className="flex justify-between text-sm items-start">
                          <span className="text-muted-foreground">Composition:</span>
                         <span className="font-medium text-right max-w-[60%] leading-relaxed">{product.composition}</span>
                        </div>
                      </div>

                      <div className="bg-trust-blue p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Key Benefit:</p>
                        <p className="text-sm font-medium">{product.benefit}</p>
                      </div>

                      <Link to={`/products/${product.id}`} className="mt-4">      
                        <Button className="w-full" variant="hero">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;