import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$35",
      description: "Perfect for light users",
      features: [
        "5GB High-Speed Data",
        "Unlimited Talk & Text",
        "Mobile Hotspot",
        "5G Access",
        "International Texting",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Unlimited Plus",
      price: "$55",
      description: "Our most popular plan",
      features: [
        "Unlimited Premium Data",
        "Unlimited Talk & Text",
        "50GB Mobile Hotspot",
        "5G Ultra Wideband",
        "International Calling",
        "HD Streaming",
        "Apple Music Included",
      ],
      cta: "Choose Plus",
      popular: true,
    },
    {
      name: "Unlimited Pro",
      price: "$75",
      description: "Maximum performance",
      features: [
        "Unlimited Premium Data",
        "Unlimited Talk & Text",
        "100GB Mobile Hotspot",
        "Priority 5G Access",
        "International Roaming",
        "4K Streaming",
        "All Premium Services",
        "24/7 Priority Support",
      ],
      cta: "Go Pro",
      popular: false,
    },
  ];

  const familyPlans = [
    { lines: "1 Line", starter: "$35", plus: "$55", pro: "$75" },
    { lines: "2 Lines", starter: "$60", plus: "$100", pro: "$140" },
    { lines: "3 Lines", starter: "$80", plus: "$135", pro: "$195" },
    { lines: "4 Lines", starter: "$100", plus: "$160", pro: "$240" },
    { lines: "5+ Lines", starter: "$25/line", plus: "$40/line", pro: "$60/line" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Plan
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Flexible options that grow with your needs
          </p>
        </div>
      </section>

      {/* Individual Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Individual Plans</h2>
            <p className="text-muted-foreground">All plans include taxes and fees</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
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
                  <div className="absolute right-0 top-6 bg-gradient-to-r from-primary to-primary-glow px-4 py-1 text-xs font-semibold text-primary-foreground">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button
                  variant={plan.popular ? "hero" : "default"}
                  className="mb-8 w-full"
                  size="lg"
                >
                  {plan.cta}
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

      {/* Family Plans */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Family Plans</h2>
            <p className="text-muted-foreground">Save more when you add lines</p>
          </div>
          <Card className="overflow-hidden border-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-semibold">Number of Lines</th>
                    <th className="p-4 text-center font-semibold">Starter</th>
                    <th className="p-4 text-center font-semibold">Unlimited Plus</th>
                    <th className="p-4 text-center font-semibold">Unlimited Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {familyPlans.map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 font-medium">{row.lines}</td>
                      <td className="p-4 text-center text-primary">{row.starter}</td>
                      <td className="p-4 text-center text-primary">{row.plus}</td>
                      <td className="p-4 text-center text-primary">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time without any penalties.",
              },
              {
                q: "What happens if I exceed my data limit?",
                a: "On limited plans, speeds may be reduced. Unlimited plans have no hard caps.",
              },
              {
                q: "Do you offer international roaming?",
                a: "Plus and Pro plans include international roaming in select countries.",
              },
              {
                q: "Is 5G included in all plans?",
                a: "Yes, all our plans include 5G access where available.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 p-6">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;
