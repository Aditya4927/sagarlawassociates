import { Award, Clock, MessageSquare, Target } from "lucide-react";

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

const WhyChooseUs = () => {
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

            <div className="grid sm:grid-cols-2 gap-6">
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
          </div>

          {/* Testimonial Card */}
          <div className="bg-navy rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />

            <div className="relative">
              <div className="text-5xl text-gold/30 font-serif mb-4">"</div>
              <blockquote className="text-cream text-lg lg:text-xl leading-relaxed mb-8">
                Sagar Law Associates handled my property dispute with exceptional
                professionalism. Their strategic approach and dedication resulted
                in a favorable outcome that exceeded my expectations. I cannot
                recommend them highly enough.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-semibold">RK</span>
                </div>
                <div>
                  <div className="text-cream font-semibold">Rajesh Kumar</div>
                  <div className="text-cream/60 text-sm">Business Owner</div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
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
