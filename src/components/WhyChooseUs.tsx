import { Award, Clock, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const reasons = [
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "With 500+ successful cases and a 98% success rate, our results speak for themselves.",
  },
  {
    icon: Clock,
    title: "Timely Resolution",
    description:
      "We understand the importance of time and work diligently to resolve your matters efficiently.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication keep you informed at every step.",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description:
      "Every case receives a customized strategy designed to achieve the best possible outcome.",
  },
];

const testimonials = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    role: "Business Owner",
    text: "Sagar Law Associates handled my property dispute with exceptional professionalism. Their strategic approach and dedication resulted in a favorable outcome that exceeded my expectations.",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Homeowner",
    text: "I was facing a complex family law matter and felt completely lost. Advocate Madan Sagar guided me through every step with patience and expertise. Highly recommended!",
  },
  {
    initials: "AV",
    name: "Amit Verma",
    role: "Company Director",
    text: "Outstanding corporate law support. They handled our company's legal compliance and contracts flawlessly. Professional, responsive, and thorough in every aspect.",
  },
];

const WhyChooseUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full mb-4">
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-gold">Legal Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Choosing the right legal representation can make all the
              difference. At Sagar Law Associates, we combine expertise with
              empathy to deliver exceptional results for our clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-navy/5 rounded-lg flex-shrink-0">
                    <reason.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="gold" size="lg" onClick={scrollToContact}>
              Get Free Consultation Today
            </Button>
          </div>

          {/* Testimonials */}
          <div className="bg-navy rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />

            <div className="relative">
              <div className="text-5xl text-gold/30 font-serif mb-4">"</div>

              {/* Active Testimonial */}
              <blockquote className="text-cream text-lg lg:text-xl leading-relaxed mb-8 min-h-[120px] transition-all duration-300">
                {testimonials[activeTestimonial].text}
              </blockquote>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-semibold">
                    {testimonials[activeTestimonial].initials}
                  </span>
                </div>
                <div>
                  <div className="text-cream font-semibold">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-cream/60 text-sm">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Selector Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === i
                        ? "bg-gold w-8"
                        : "bg-cream/30 hover:bg-cream/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
