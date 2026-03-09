import { Scale, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

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

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919810120435?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
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
                  <a
                    href="#practice"
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">

              <a
                href="https://maps.google.com/?q=Tis+Hazari+Court+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold" />
                <span>C-114, Tis Hazari District Court,<br />Delhi - 110054</span>
              </a>

              <a
                href="tel:+919810120435"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                +91 9810120435
              </a>

              <a
                href="tel:+918076310016"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                +91 8076310016
              </a>

              <a
                href="mailto:adv.madansagar@gmail.com"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                adv.madansagar@gmail.com
              </a>

            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-cream/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8!2d77.2!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0!2sTis+Hazari+Court%2C+Delhi!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sagar Law Associates Office Location"
          />
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
