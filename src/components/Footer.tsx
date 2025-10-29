import { Link } from "react-router-dom";
import { Smartphone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Smartphones", path: "/products" },
        { name: "Tablets", path: "/products" },
        { name: "Accessories", path: "/products" },
        { name: "Smart Home", path: "/products" },
      ],
    },
    {
      title: "Plans",
      links: [
        { name: "Unlimited Plans", path: "/unlimited-plans" },
        { name: "Family Plans", path: "/plans" },
        { name: "Prepaid", path: "/prepaid" },
        { name: "Business", path: "/business" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help-center" },
        { name: "Contact Us", path: "/contact" },
        { name: "Track Order", path: "/track-order" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Investors", path: "/investors" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <Smartphone className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                TechCo
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting you to what matters most with cutting-edge technology and reliable service.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TechCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
