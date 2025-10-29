import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, Shield, Headphones, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Business = () => {
  const solutions = [
    {
      icon: Users,
      title: "Team Plans",
      description: "Flexible plans that scale with your business, from 5 to 500+ lines",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security features and dedicated support for your organization",
    },
    {
      icon: Zap,
      title: "Priority Support",
      description: "24/7 dedicated business support team with faster response times",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "International roaming and calling to keep your team connected worldwide",
    },
  ];

  const plans = [
    {
      name: "Business Starter",
      price: "$35",
      lines: "5-20 lines",
      features: [
        "Unlimited talk & text",
        "15GB shared data per line",
        "Mobile device management",
        "Business support",
        "5G access",
      ],
    },
    {
      name: "Business Pro",
      price: "$50",
      lines: "10-100 lines",
      features: [
        "Unlimited talk & text",
        "Unlimited premium data",
        "100GB mobile hotspot",
        "Advanced security suite",
        "Priority support",
        "International calling",
        "5G Ultra Wideband",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      lines: "100+ lines",
      features: [
        "Everything in Business Pro",
        "Dedicated account manager",
        "Custom data solutions",
        "Private APN",
        "SLA guarantees",
        "IoT connectivity",
        "Customized billing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <Building2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Business Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Powerful connectivity solutions designed for businesses of all sizes
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose TechCo for Business</h2>
            <p className="text-muted-foreground">
              Everything your business needs to stay connected and productive
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-2 p-6 text-center transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Business Plans</h2>
            <p className="text-muted-foreground">
              Flexible options designed for growing businesses
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                    : "hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 text-center">
                    <span className="rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-xs font-semibold text-primary-foreground">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{plan.lines}</p>
                  <div className="mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/line/mo</span>
                    )}
                  </div>
                </div>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="mb-6 w-full"
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="border-2 p-8">
              <Headphones className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-2xl font-bold">Dedicated Support</h3>
              <p className="mb-4 text-muted-foreground">
                Get priority access to our business support team available 24/7
              </p>
              <Button variant="outline">Contact Support</Button>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-8">
              <h3 className="mb-2 text-2xl font-bold">Ready to Get Started?</h3>
              <p className="mb-4 text-muted-foreground">
                Speak with our business team to find the perfect solution for your organization
              </p>
              <Button variant="hero" size="lg">
                Request a Quote
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Call us: <span className="font-medium">1-800-BIZ-TECH</span>
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
