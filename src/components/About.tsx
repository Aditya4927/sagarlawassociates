import { CheckCircle } from "lucide-react";
import logo from "../assets/logo.png";


const About = () => {
  const highlights = [
    "Personalized legal strategies for every client",
    "Transparent communication and honest counsel",
    "Track record of successful outcomes",
    "Affordable legal solutions without compromising quality",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] bg-navy-light flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <img
                   src={logo}
                   alt="Sagar Law Associates Logo"
                   className="w-full h-full object-cover"
                     />
                  </div>
                  <p className="text-cream/80 text-lg">Sagar Law Associates</p>
                  <p className="text-gold text-sm mt-2">Est. 1999</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full mb-4">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                About Our Firm
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
              Committed to{" "}
              <span className="text-gold">Protecting Your Rights</span> and
              Securing Your Future
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded by Advocate Madan Lal Sagar, our firm has built a reputation for
              unwavering dedication to our clients. With over 30 years of
              combined experience, we have successfully represented individuals
              and businesses in complex legal matters.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe that everyone deserves access to quality legal
              representation. Our team works tirelessly to understand your
              unique situation and develop strategies that protect your
              interests.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="flex-1">
                <div className="text-2xl font-serif font-bold text-foreground">
                  Advocate Madan Lal Sagar
                </div>
                <div className="text-muted-foreground text-sm">
                  Founder & Senior Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
