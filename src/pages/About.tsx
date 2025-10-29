import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs and experiences",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries to bring you the latest technology",
    },
    {
      icon: Heart,
      title: "Reliability",
      description: "Building trust through consistent, dependable service nationwide",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do",
    },
  ];

  const stats = [
    { number: "50M+", label: "Customers Worldwide" },
    { number: "99.9%", label: "Network Uptime" },
    { number: "100+", label: "Retail Locations" },
    { number: "#1", label: "Customer Satisfaction" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format",
    },
    {
      name: "David Park",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              TechCo
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Connecting people and possibilities through innovative technology and exceptional service since 2010
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To empower individuals and businesses by providing reliable, cutting-edge connectivity solutions
              that keep them connected to what matters most. We believe technology should enhance lives,
              not complicate them.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-5xl font-bold text-primary">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-2 p-6 text-center transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Meet Our Leadership</h2>
            <p className="text-muted-foreground">
              The team driving innovation and excellence
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Journey</h2>
            <p className="text-muted-foreground">
              Milestones that shaped who we are today
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              { year: "2010", event: "TechCo founded with a vision to revolutionize connectivity" },
              { year: "2015", event: "Reached 10 million customers and launched nationwide 4G network" },
              { year: "2020", event: "Deployed 5G network across major cities" },
              { year: "2023", event: "Achieved 50 million customers and #1 customer satisfaction rating" },
              { year: "2025", event: "Expanding 5G Ultra Wideband to 95% of the population" },
            ].map((milestone, index) => (
              <Card key={index} className="border-2 border-l-4 border-l-primary p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                      {milestone.year}
                    </div>
                  </div>
                  <p className="pt-2 text-muted-foreground">{milestone.event}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Team</h2>
            <p className="mb-8 text-muted-foreground">
              Be part of something bigger. Explore career opportunities at TechCo.
            </p>
            <Button variant="hero" size="lg">
              View Open Positions
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
