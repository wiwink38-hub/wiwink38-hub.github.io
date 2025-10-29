import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Press = () => {
  const pressReleases = [
    {
      date: "January 15, 2025",
      title: "TechCo Expands 5G Ultra Wideband to 50 New Cities",
      excerpt: "Leading telecommunications provider announces massive network expansion, bringing cutting-edge connectivity to millions more Americans.",
      category: "Network",
    },
    {
      date: "December 10, 2024",
      title: "TechCo Achieves #1 Customer Satisfaction Rating",
      excerpt: "Independent study ranks TechCo as the top wireless provider for customer satisfaction for the third consecutive year.",
      category: "Awards",
    },
    {
      date: "November 5, 2024",
      title: "Partnership with Leading Device Manufacturers Announced",
      excerpt: "Strategic partnerships will bring exclusive devices and features to TechCo customers starting in 2025.",
      category: "Business",
    },
    {
      date: "October 20, 2024",
      title: "TechCo Launches New Sustainability Initiative",
      excerpt: "Company commits to carbon neutrality by 2030 with comprehensive environmental program.",
      category: "Sustainability",
    },
    {
      date: "September 15, 2024",
      title: "Q3 2024 Financial Results Exceed Expectations",
      excerpt: "Strong customer growth and network investments drive record quarterly performance.",
      category: "Financial",
    },
  ];

  const mediaAssets = [
    { name: "Company Logo Pack", type: "ZIP", size: "2.4 MB" },
    { name: "Product Images", type: "ZIP", size: "15.8 MB" },
    { name: "Executive Photos", type: "ZIP", size: "8.1 MB" },
    { name: "Brand Guidelines", type: "PDF", size: "1.2 MB" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Press Room
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Latest news and media resources from TechCo
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-2 text-3xl font-bold">Latest Press Releases</h2>
              <p className="text-muted-foreground">
                Stay updated with our latest announcements
              </p>
            </div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="border-2 p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                  <div className="mb-3 flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{release.date}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {release.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{release.title}</h3>
                  <p className="mb-4 text-muted-foreground">{release.excerpt}</p>
                  <Button variant="ghost" size="sm">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold">Media Assets</h2>
              <p className="text-muted-foreground">
                Download official TechCo brand materials
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {mediaAssets.map((asset, index) => (
                <Card key={index} className="border-2 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="mb-1 font-semibold">{asset.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {asset.type} • {asset.size}
                      </p>
                    </div>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Media Inquiries</h2>
            <p className="mb-6 text-muted-foreground">
              For press inquiries, interviews, or additional information
            </p>
            <div className="space-y-2 text-sm">
              <p>Email: <a href="mailto:press@techco.com" className="font-medium text-primary hover:underline">press@techco.com</a></p>
              <p>Phone: <span className="font-medium">1-800-PRESS-TC</span></p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
