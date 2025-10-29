import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const UnlimitedPlans = () => {
  const plans = [
    {
      name: "Unlimited Plus",
      price: "$55",
      tagline: "Our most popular plan",
      features: [
        "Unlimited Premium Data",
        "50GB Mobile Hotspot",
        "5G Ultra Wideband Access",
        "HD Streaming Included",
        "International Texting",
        "Apple Music Free for 6 months",
        "Disney+ on Us",
      ],
      popular: true,
    },
    {
      name: "Unlimited Pro",
      price: "$75",
      tagline: "Maximum performance & perks",
      features: [
        "Unlimited Premium Data",
        "100GB Mobile Hotspot",
        "Priority 5G Access",
        "4K UHD Streaming",
        "International Calling to 200+ countries",
        "Apple Music Included",
        "Disney+ Bundle Included",
        "600GB Cloud Storage",
        "24/7 Priority Support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Unlimited Plans
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Never worry about data limits again. Stream, browse, and connect without restrictions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Choose Your Unlimited Plan</h2>
            </div>
            <p className="text-muted-foreground">
              All unlimited plans include taxes and fees
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
                    : "hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-8 bg-gradient-to-r from-primary to-primary-glow px-4 py-1 text-xs font-semibold text-primary-foreground">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-3xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                </div>
                <div className="mb-8">
                  <span className="text-6xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="mb-8 w-full"
                  size="lg"
                >
                  Get Started
                </Button>
                <div className="space-y-4">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Why Choose Unlimited?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">No Overages</h3>
                <p className="text-sm text-muted-foreground">
                  Use as much data as you need without worrying about extra charges
                </p>
              </Card>
              <Card className="border-2 p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">Premium Perks</h3>
                <p className="text-sm text-muted-foreground">
                  Get exclusive streaming services and benefits included
                </p>
              </Card>
              <Card className="border-2 p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">5G Included</h3>
                <p className="text-sm text-muted-foreground">
                  Access our nationwide 5G network at no extra cost
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">Need Multiple Lines?</h2>
          <p className="mb-6 text-muted-foreground">
            Save more when you add family members to your plan
          </p>
          <Link to="/plans">
            <Button variant="outline" size="lg">
              View Family Plans
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnlimitedPlans;
