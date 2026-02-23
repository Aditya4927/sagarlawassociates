import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-navy/10 rounded-full mb-4">
              <span className="text-navy text-sm font-medium tracking-wider uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
              Let's Discuss Your{" "}
              <span className="text-gold">Legal Needs</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Schedule a free consultation with our experienced attorneys. We're
              here to listen, advise, and fight for your rights.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Office Address
                  </h3>
                  <p className="text-muted-foreground">
                    123 Law Chambers, Civil Lines<br />
                    Near District Court, City - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Phone Number
                  </h3>
                  <p className="text-muted-foreground">
                    +91 98765 43210<br />
                    +91 11 2345 6789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Email Address
                  </h3>
                  <p className="text-muted-foreground">
                    contact@sagarlawassociates.com<br />
                    info@sagarlawassociates.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 rounded-xl flex-shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Office Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Request a Free Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Legal Matter Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all">
                  <option value="">Select a practice area</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="property">Property & Real Estate</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="employment">Employment Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Brief Description of Your Case
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none"
                  placeholder="Please provide a brief overview of your legal matter..."
                />
              </div>

              <Button variant="navy" size="xl" className="w-full">
                Submit Consultation Request
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                Your information is kept strictly confidential. By submitting, you
                agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
