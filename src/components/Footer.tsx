import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Practice Areas", href: "#practice" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const practiceAreas = [
    "Civil Litigation",
    "Corporate Law",
    "Family Law",
    "Property & Real Estate",
    "Criminal Defense",
    "Employment Law",
  ];

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gold/20 rounded-lg">
                <Scale className="h-6 w-6 text-gold" />
              </div>
              <div>
                <span className="text-xl font-serif font-semibold text-cream">
                  Sagar Law
                </span>
                <span className="block text-xs text-gold tracking-widest uppercase">
                  Associates
                </span>
              </div>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Dedicated to providing exceptional legal services with integrity,
              professionalism, and a commitment to achieving the best outcomes
              for our clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-cream font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <span className="text-cream/60 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <p className="text-cream/60">
                C-114 , TIS HAZARI<br />
                District Court, City - 110054
              </p>
              <p className="text-cream/60">
                Phone: +91 9810120435
              </p>
              <p className="text-cream/60">
                Email: adv.madansagar@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © {currentYear} Sagar Law Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/40 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors text-sm">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
