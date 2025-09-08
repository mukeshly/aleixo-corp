import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Shield, ExternalLink, ArrowLeft, Package, Beaker
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm' // For GitHub Flavored Markdown (tables, strikethrough, etc.)
import remarkBreaks from 'remark-breaks'


const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="p-4 text-center">Loading product...</div>;
  }

  if (!product) {
    return <div className="p-4 text-center text-red-600">Product not found.</div>;
  }

  // Get appropriate icon component or fallback to Heart
  // const IconComponent = iconMap[product.icon] || Heart;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-clinical-gray py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/products">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Product Image & Basic Info */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-full max-w-sm mx-auto mb-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {product.images?.map((img: string, idx: number) => (
                          <CarouselItem key={idx}>
                            <div className="aspect-square">
                              <img
                                src={img}
                                alt={`${product.name} - image ${idx + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                  <h1 className="text-2xl font-bold text-primary">{product.name}</h1>
                  <Badge variant="secondary" className="mx-auto">{product.category}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Form:</span>
                      <span className="font-medium">{product.form}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Composition:</span>
                      <span className="font-medium text-right">{product.composition}</span>
                    </div>
                  </div>


                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Where to Buy */}
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-primary">Where to Buy</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.marketplaces?.map((marketplace: any, index: number) => (
                      marketplace.available ? (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-between"
                          asChild
                        >
                          <a
                            href={marketplace.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{marketplace.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          key={index}
                          variant="secondary"
                          className="justify-between"
                          disabled
                        >
                          <span>{marketplace.name}</span>
                          <span className="text-xs">Coming Soon</span>
                        </Button>
                      )
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-trust-blue rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This product is available by prescription only.
                      Please consult your healthcare provider before use.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-primary flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Product Description
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground mb-4">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      components={{
                        // Custom styling for markdown elements
                        h3: ({ node, ...props }) => <h3 className="font-semibold text-lg mt-4" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc ml-6 space-y-1" {...props} />,
                        li: ({ node, ...props }) => <li className="text-sm" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-semibold text-primary" {...props} />,
                      }}
                    >
                      {product.description}
                    </ReactMarkdown>
                  </div>
                  <div className="bg-trust-blue p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Indication:</h3>
                    <div className="text-muted-foreground">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {product.indication}
                      </ReactMarkdown>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dosage & Administration */}
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-primary flex items-center">
                    <Beaker className="h-5 w-5 mr-2" />
                    Dosage & Administration
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="bg-medical-green/10 p-4 rounded-lg">
                    <p className="text-foreground">{product.dosage}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Benefits */}
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-primary">Key Benefits</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.key_benefits?.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-medical-green mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Safety Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-destructive">Contraindications</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{product.contraindications}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-primary">Side Effects</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{product.side_effects}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
