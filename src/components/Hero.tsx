import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6 animate-fade-up">
              <Shield className="h-4 w-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Trusted Legal Excellence Since 1999
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Justice Served with{" "}
              <span className="text-gradient-gold">Integrity</span> and{" "}
              <span className="text-gradient-gold">Excellence</span>
            </h1>

            <p className="text-lg text-cream/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              At Sagar Law Associates, we combine decades of legal expertise with
              a client-first approach. Your victory is our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="gold" size="xl" className="group">
                Schedule Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="goldOutline" size="xl">
                Our Practice Areas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cream/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-1">
                  500+
                </div>
                <div className="text-cream/60 text-sm">Cases Won</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-1">
                  30+
                </div>
                <div className="text-cream/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-1">
                  97%
                </div>
                <div className="text-cream/60 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-xl">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-cream mb-2">
                    Award-Winning Firm
                  </h3>
                  <p className="text-cream/60">
                    Recognized for excellence in legal practice and client
                    satisfaction across multiple practice areas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-xl">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-cream mb-2">
                    Client-Centered Approach
                  </h3>
                  <p className="text-cream/60">
                    We prioritize your needs and maintain transparent
                    communication throughout your legal journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-xl">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-cream mb-2">
                    Confidential & Secure
                  </h3>
                  <p className="text-cream/60">
                    Your privacy is paramount. All consultations and case
                    details remain strictly confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.8C672 46.3 768 57.7 864 60.2C960 62.7 1056 56.3 1152 51.7C1248 47 1344 44 1392 42.5L1440 41V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
