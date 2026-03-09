import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    matter: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    // Build WhatsApp message
    const message = `Hello Sagar Law Associates,

I would like to request a Free Consultation.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Legal Matter:* ${formData.matter || "Not specified"}
*Case Description:* ${formData.description || "Not provided"}

Please get back to me at your earliest convenience.`;

    const whatsappURL = `https://wa.me/919810120435?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setSubmitted(true);
  };

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
                    C-114, TIS HAZARI <br />
                    District Court, City - 110054
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
                  <a href="tel:+919810120435" className="text-muted-foreground hover:text-gold transition-colors block">
                    +91 9810120435
                  </a>
                  <a href="tel:+918076310016" className="text-muted-foreground hover:text-gold transition-colors block">
                    +91 8076310016
                  </a>
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
                  <a href="mailto:adv.madansagar@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
                    adv.madansagar@gmail.com
                  </a>
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
                    Monday - Saturday: 8:00 AM - 7:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct Button */}
              <a
                href="https://wa.me/919810120435?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Request Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your consultation request has been sent via WhatsApp. We will get back to you shortly.
                </p>
                <Button variant="navy" onClick={() => setSubmitted(false)}>
                  Send Another Request
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Request a Free Consultation
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Legal Matter Type
                    </label>
                    <select
                      name="matter"
                      value={formData.matter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                    >
                      <option value="">Select a practice area</option>
                      <option value="Civil Litigation">Civil Litigation</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Property & Real Estate">Property & Real Estate</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Employment Law">Employment Law</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Brief Description of Your Case
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none"
                      placeholder="Please provide a brief overview of your legal matter..."
                    />
                  </div>

                  <Button variant="navy" size="xl" className="w-full" type="submit">
                    Submit Consultation Request
                  </Button>

                  <p className="text-muted-foreground text-xs text-center">
                    Your information is kept strictly confidential. By submitting, you
                    agree to our privacy policy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
