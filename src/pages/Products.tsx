import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const productCategories = [
    { name: "All", active: true },
    { name: "Smartphones", active: false },
    { name: "Tablets", active: false },
    { name: "Accessories", active: false },
    { name: "Smart Home", active: false },
  ];

  const products = [
    {
      name: "Galaxy Ultra X",
      category: "Smartphones",
      price: "$999",
      originalPrice: "$1,199",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format",
      features: ["6.8\" Display", "200MP Camera", "5000mAh Battery"],
      badge: "Sale",
    },
    {
      name: "iPhone Pro Max",
      category: "Smartphones",
      price: "$1,199",
      image: "https://images.unsplash.com/photo-1592286927505-2fd0d2365e71?w=500&auto=format",
      features: ["6.7\" Display", "A17 Pro Chip", "Titanium Frame"],
      badge: "New",
    },
    {
      name: "Pixel Elite",
      category: "Smartphones",
      price: "$799",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format",
      features: ["6.7\" Display", "AI Camera", "Pure Android"],
      badge: "Best Value",
    },
    {
      name: "Tab Pro 12",
      category: "Tablets",
      price: "$899",
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format",
      features: ["12.4\" Display", "S Pen Included", "8GB RAM"],
    },
    {
      name: "iPad Air Plus",
      category: "Tablets",
      price: "$749",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format",
      features: ["11\" Display", "M2 Chip", "Apple Pencil Support"],
    },
    {
      name: "Smart Watch Elite",
      category: "Accessories",
      price: "$399",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format",
      features: ["AMOLED Display", "Health Tracking", "7 Day Battery"],
    },
    {
      name: "Wireless Buds Pro",
      category: "Accessories",
      price: "$199",
      image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=500&auto=format",
      features: ["ANC", "30hr Battery", "Hi-Fi Sound"],
    },
    {
      name: "Smart Home Hub",
      category: "Smart Home",
      price: "$149",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format",
      features: ["Voice Control", "All Devices", "Easy Setup"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete range of devices and accessories
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {productCategories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute right-4 top-4 z-10 bg-accent">
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    {product.category}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                  <div className="mb-3 flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                  <ul className="mb-4 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" className="w-full">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
