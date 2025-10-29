import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Book, MessageSquare, Video, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using our services",
      articles: 12,
      link: "/support",
    },
    {
      icon: MessageSquare,
      title: "Account & Billing",
      description: "Manage your account and payments",
      articles: 18,
      link: "/support",
    },
    {
      icon: Video,
      title: "Device Setup",
      description: "Video tutorials for device activation",
      articles: 15,
      link: "/support",
    },
    {
      icon: FileText,
      title: "Plans & Services",
      description: "Everything about our plans and features",
      articles: 24,
      link: "/plans",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Help Center
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Find answers to your questions and get the help you need
          </p>
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search help articles..."
                className="h-14 pl-12 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="group h-full border-2 p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary">{category.articles} articles</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
