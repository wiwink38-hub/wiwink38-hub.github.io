import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What is TechCo?",
          a: "TechCo is a leading telecommunications provider offering cutting-edge devices, wireless plans, and nationwide 5G coverage.",
        },
        {
          q: "How do I create an account?",
          a: "You can create an account by clicking the 'Get Started' button and following the registration process.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, PayPal, and bank transfers.",
        },
      ],
    },
    {
      category: "Plans & Pricing",
      questions: [
        {
          q: "Can I change my plan anytime?",
          a: "Yes! You can upgrade or downgrade your plan at any time without penalties. Changes take effect on your next billing cycle.",
        },
        {
          q: "Do you offer family discounts?",
          a: "Yes, we offer significant discounts when you add multiple lines to your account. Check our Family Plans section for details.",
        },
        {
          q: "What happens if I go over my data limit?",
          a: "On limited plans, your speeds may be reduced after reaching your limit. Our unlimited plans have no hard data caps.",
        },
      ],
    },
    {
      category: "Devices & Orders",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.",
        },
        {
          q: "Can I return or exchange a device?",
          a: "Yes, you have 30 days from purchase to return or exchange any device in like-new condition.",
        },
        {
          q: "Do you offer device insurance?",
          a: "Yes, we offer comprehensive device protection plans covering damage, loss, and theft.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "How do I activate my new device?",
          a: "Follow the quick-start guide included with your device, or visit our Help Center for step-by-step activation instructions.",
        },
        {
          q: "Why is my network slow?",
          a: "Slow speeds can be caused by network congestion, distance from towers, or device issues. Try restarting your device or contact support.",
        },
        {
          q: "How do I set up voicemail?",
          a: "Dial your voicemail access number (typically *86) and follow the automated setup instructions.",
        },
      ],
    },
    {
      category: "Billing & Account",
      questions: [
        {
          q: "When will I receive my bill?",
          a: "Bills are generated on the same date each month and are available in your online account immediately.",
        },
        {
          q: "How do I set up AutoPay?",
          a: "Log into your account, go to Billing Settings, and select AutoPay. You can choose your payment method and date.",
        },
        {
          q: "Can I get a paper bill?",
          a: "Yes, paper bills are available for a small monthly fee. You can enable this option in your account settings.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Find quick answers to common questions
          </p>
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                className="h-14 pl-12 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="mb-6 text-2xl font-bold">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => (
                    <Card key={qIndex} className="border-2 p-6">
                      <div className="flex items-start gap-3">
                        <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <h3 className="mb-2 font-semibold">{faq.q}</h3>
                          <p className="text-sm text-muted-foreground">{faq.a}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">Still have questions?</h2>
          <p className="mb-6 text-muted-foreground">
            Our support team is here to help you 24/7
          </p>
          <a href="/contact" className="text-primary hover:underline">
            Contact Support →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
