import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Smartphone, Wifi, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Latest Devices",
      description: "Access the newest smartphones and tablets from top brands",
    },
    {
      icon: Wifi,
      title: "5G Network",
      description: "Experience lightning-fast speeds with our nationwide 5G coverage",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security protecting your data and privacy",
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Get connected in minutes with our easy setup process",
    },
  ];

  const products = [
    {
      name: "Galaxy Ultra X",
      price: "$999",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format",
      tag: "Flagship",
    },
    {
      name: "iPhone Pro Max",
      price: "$1,199",
      image: "https://images.unsplash.com/photo-1592286927505-2fd0d2365e71?w=500&auto=format",
      tag: "Premium",
    },
    {
      name: "Pixel Elite",
      price: "$799",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format",
      tag: "Best Value",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent" />
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
              Experience the{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Connectivity
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover unlimited possibilities with our cutting-edge devices and blazing-fast 5G network
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/products">
                <Button variant="hero" size="lg" data-testid="button-shop-devices">
                  Shop Devices <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/plans">
                <Button variant="outline" size="lg" data-testid="button-view-plans">
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Why Choose TechCo</h2>
            <p className="text-muted-foreground">
              Everything you need for a seamless connected experience
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 p-6 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Featured Devices</h2>
              <p className="text-muted-foreground">
                Get the latest and greatest technology
              </p>
            </div>
            <Link to="/products">
              <Button variant="ghost">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {product.tag}
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                  <p className="mb-4 text-2xl font-bold text-primary">{product.price}</p>
                  <Link to="/products" className="block">
                    <Button variant="hero" className="w-full" data-testid={`button-learn-more-${index}`}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-12">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                Ready to Get Connected?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Join millions of satisfied customers enjoying the best network experience
              </p>
              <Link to="/plans">
                <Button variant="hero" size="lg" data-testid="button-get-started-today">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
