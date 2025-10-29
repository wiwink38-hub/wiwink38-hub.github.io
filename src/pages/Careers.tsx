import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "401(k) with company match",
    "Unlimited PTO",
    "Remote work options",
    "Professional development budget",
    "Gym membership",
    "Free devices and plans",
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build scalable systems that power millions of connections",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Shape the future of our product roadmap and strategy",
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences for our customers",
    },
    {
      title: "Network Engineer",
      department: "Engineering",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Maintain and optimize our nationwide 5G network",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help customers get the most value from our services",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive growth through innovative marketing campaigns",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Join{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Help us connect the world with cutting-edge technology and exceptional service
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Work at TechCo?</h2>
            <p className="text-muted-foreground">
              We offer more than just a job - we offer a career
            </p>
          </div>
          <Card className="mx-auto max-w-4xl border-2 p-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Open Positions</h2>
            <p className="text-muted-foreground">
              Find your perfect role at TechCo
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-2 p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <Badge variant="secondary">{position.department}</Badge>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </div>
                    </div>
                  </div>
                  <Button variant="hero">Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Don't See Your Role?</h2>
            <p className="mb-8 text-muted-foreground">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="hero" size="lg">
              Submit General Application
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
