import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Prepaid = () => {
  const plans = [
    {
      name: "Basic",
      price: "$25",
      data: "5GB",
      features: [
        "5GB High-Speed Data",
        "Unlimited Talk & Text",
        "Mobile Hotspot Included",
        "5G Access",
        "No Annual Contract",
      ],
    },
    {
      name: "Standard",
      price: "$40",
      data: "15GB",
      features: [
        "15GB High-Speed Data",
        "Unlimited Talk & Text",
        "10GB Mobile Hotspot",
        "5G Access",
        "International Texting",
        "No Annual Contract",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$50",
      data: "Unlimited",
      features: [
        "Unlimited High-Speed Data",
        "Unlimited Talk & Text",
        "20GB Mobile Hotspot",
        "5G Ultra Wideband",
        "International Texting",
        "HD Streaming",
        "No Annual Contract",
      ],
    },
  ];

  const benefits = [
    {
      title: "No Credit Check",
      description: "Get started without a credit check or deposit",
    },
    {
      title: "Flexible Plans",
      description: "Change or cancel your plan anytime without penalties",
    },
    {
      title: "Same Network",
      description: "Access the same nationwide 5G network as postpaid customers",
    },
    {
      title: "Easy Refills",
      description: "Auto-refill or manual payments - your choice",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Prepaid Plans
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            No contracts, no credit checks, no surprises. Just great service at affordable prices.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            <h2 className="text-center text-2xl font-bold">
              Choose Your Monthly Plan
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                    : "hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-6 bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground">
                    POPULAR
                  </div>
                )}
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{plan.data} Data</p>
                </div>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="mb-8 w-full"
                  size="lg"
                >
                  Activate Now
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Prepaid?
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 p-6">
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Get Started Today</h2>
            <p className="mb-8 text-muted-foreground">
              Activate your prepaid plan in minutes. Bring your own device or choose a new one.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="hero" size="lg">
                Choose Your Plan
              </Button>
              <Button variant="outline" size="lg">
                Check Compatibility
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prepaid;
