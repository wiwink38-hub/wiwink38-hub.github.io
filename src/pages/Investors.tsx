import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, Calendar, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Investors = () => {
  const financialHighlights = [
    { label: "Market Cap", value: "$125.5B", change: "+12.3%" },
    { label: "Revenue (TTM)", value: "$34.2B", change: "+8.7%" },
    { label: "EBITDA", value: "$12.8B", change: "+15.2%" },
    { label: "EPS", value: "$4.23", change: "+9.1%" },
  ];

  const documents = [
    { title: "Q4 2024 Earnings Report", date: "January 30, 2025", type: "PDF" },
    { title: "Annual Report 2024", date: "December 31, 2024", type: "PDF" },
    { title: "Q3 2024 Earnings Report", date: "October 31, 2024", type: "PDF" },
    { title: "Investor Presentation", date: "September 15, 2024", type: "PDF" },
  ];

  const upcomingEvents = [
    { event: "Q1 2025 Earnings Call", date: "April 30, 2025", time: "4:00 PM ET" },
    { event: "Annual Shareholder Meeting", date: "May 15, 2025", time: "10:00 AM ET" },
    { event: "Technology Summit 2025", date: "June 10, 2025", time: "9:00 AM ET" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Investor Relations
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Financial information and resources for TechCo shareholders
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Financial Highlights</h2>
            <p className="text-sm text-muted-foreground">As of January 15, 2025</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {financialHighlights.map((item, index) => (
              <Card key={index} className="border-2 p-6 text-center">
                <p className="mb-2 text-sm text-muted-foreground">{item.label}</p>
                <p className="mb-1 text-3xl font-bold">{item.value}</p>
                <p className="text-sm font-medium text-primary">{item.change}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold">Financial Documents</h2>
              <p className="text-muted-foreground">
                Access our latest reports and filings
              </p>
            </div>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <Card key={index} className="border-2 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {doc.date} • {doc.type}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline">Download</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold">Upcoming Events</h2>
              <p className="text-muted-foreground">
                Join us for our investor events and earnings calls
              </p>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((item, index) => (
                <Card key={index} className="border-2 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{item.event}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.date} at {item.time}
                        </p>
                      </div>
                    </div>
                    <Button variant="hero">Register</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Stock Information</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                TechCo trades on NASDAQ under the ticker symbol "TECH"
              </p>
              <Button variant="outline">View Live Quote</Button>
            </Card>

            <Card className="border-2 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Investor Contact</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                Email: <a href="mailto:ir@techco.com" className="text-primary hover:underline">ir@techco.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: 1-800-INVEST-TC
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
