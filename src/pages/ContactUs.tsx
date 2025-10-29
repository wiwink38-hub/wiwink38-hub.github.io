import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
              <Card className="border-2 p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us more..." rows={5} />
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              
              <Card className="border-2 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Phone</h3>
                <p className="text-muted-foreground">1-800-TECHCO (832-4261)</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 8AM - 8PM EST</p>
              </Card>

              <Card className="border-2 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Email</h3>
                <p className="text-muted-foreground">support@techco.com</p>
                <p className="text-sm text-muted-foreground">24-48 hour response time</p>
              </Card>

              <Card className="border-2 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Headquarters</h3>
                <p className="text-muted-foreground">
                  123 Tech Boulevard<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </Card>

              <Card className="border-2 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 8:00 AM - 8:00 PM EST<br />
                  Saturday: 9:00 AM - 6:00 PM EST<br />
                  Sunday: 10:00 AM - 5:00 PM EST
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
