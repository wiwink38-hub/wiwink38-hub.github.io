import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Package, Truck, CheckCircle, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Track Your Order
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your order number to see real-time delivery status
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-2 p-8">
            <h2 className="mb-6 text-2xl font-bold">Track Your Package</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Order Number</label>
                <Input placeholder="Enter your order number (e.g., TCO-12345)" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="Email used for the order" />
              </div>
              <Button variant="hero" className="w-full" size="lg">
                Track Order
              </Button>
            </div>
          </Card>

          <div className="mx-auto mt-12 max-w-4xl">
            <h3 className="mb-8 text-center text-2xl font-bold">How Tracking Works</h3>
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="border-2 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Order Placed</h4>
                <p className="text-sm text-muted-foreground">
                  Your order has been confirmed
                </p>
              </Card>

              <Card className="border-2 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Processing</h4>
                <p className="text-sm text-muted-foreground">
                  We're preparing your order
                </p>
              </Card>

              <Card className="border-2 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Shipped</h4>
                <p className="text-sm text-muted-foreground">
                  Your order is on the way
                </p>
              </Card>

              <Card className="border-2 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="mb-2 font-semibold">Delivered</h4>
                <p className="text-sm text-muted-foreground">
                  Package has arrived
                </p>
              </Card>
            </div>
          </div>

          <Card className="mx-auto mt-12 max-w-2xl border-2 bg-muted/30 p-6">
            <h3 className="mb-4 font-semibold">Need Help?</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Can't find your order number or having issues tracking? Our support team is ready to help.
            </p>
            <Button variant="outline">Contact Support</Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackOrder;
