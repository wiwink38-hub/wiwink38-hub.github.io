import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Phone, Mail, MapPin, Search, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      cta: "Start Chat",
      available: "24/7",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with a support specialist",
      cta: "1-800-TECHCO",
      available: "Mon-Fri 8AM-8PM",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      cta: "support@techco.com",
      available: "24-48hr response",
    },
    {
      icon: MapPin,
      title: "Store Locations",
      description: "Visit one of our retail locations",
      cta: "Find a Store",
      available: "100+ locations",
    },
  ];

  const popularTopics = [
    {
      icon: HelpCircle,
      title: "Account & Billing",
      articles: [
        "How to view and pay your bill",
        "Understanding your monthly charges",
        "Setting up AutoPay",
        "Managing your account online",
      ],
    },
    {
      icon: HelpCircle,
      title: "Device Help",
      articles: [
        "Activating your new device",
        "Troubleshooting connection issues",
        "Device insurance claims",
        "Trading in your old device",
      ],
    },
    {
      icon: HelpCircle,
      title: "Plans & Services",
      articles: [
        "Changing your plan",
        "Adding or removing lines",
        "International roaming guide",
        "Understanding data usage",
      ],
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      articles: [
        "Improving signal strength",
        "Setting up voicemail",
        "Connecting to Wi-Fi",
        "Troubleshooting 5G issues",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            How Can We{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            We're here to support you every step of the way
          </p>
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, FAQs, and more..."
                className="h-14 pl-12 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Get in Touch</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportOptions.map((option, index) => (
              <Card key={index} className="group border-2 p-6 text-center transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{option.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {option.description}
                </p>
                <p className="mb-4 font-semibold text-primary">{option.cta}</p>
                <p className="text-xs text-muted-foreground">{option.available}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Popular Help Topics</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="border-2 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                </div>
                <ul className="space-y-3">
                  {topic.articles.map((article, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <span className="mr-2">→</span>
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Track Order Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Track Your Order</h2>
            <p className="mb-6 text-muted-foreground">
              Enter your order number to see the latest status
            </p>
            <div className="flex gap-2">
              <Input placeholder="Order Number" className="h-12" />
              <Button variant="hero" size="lg">
                Track
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
