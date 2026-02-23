import { Scale, Building, Users, FileText, Shield, Briefcase } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Civil Litigation",
    description:
      "Expert representation in civil disputes, property matters, and contractual disagreements with a focus on achieving favorable settlements.",
  },
  {
    icon: Building,
    title: "Corporate Law",
    description:
      "Comprehensive legal support for businesses including company formation, compliance, mergers, and corporate governance.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, custody, maintenance, and other sensitive family legal matters.",
  },
  {
    icon: FileText,
    title: "Property & Real Estate",
    description:
      "Complete assistance in property transactions, title verification, registration, and real estate disputes.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description:
      "Vigorous defense representation ensuring your rights are protected throughout the criminal justice process.",
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description:
      "Protection of employee rights and employer interests in workplace disputes, contracts, and compliance matters.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-navy/10 rounded-full mb-4">
            <span className="text-navy text-sm font-medium tracking-wider uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Comprehensive <span className="text-gold">Legal Services</span> for
            Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Our experienced attorneys provide skilled representation across a
            wide range of practice areas, ensuring you receive the specialized
            attention your case deserves.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gold/20"
            >
              <div className="w-14 h-14 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <area.icon className="h-7 w-7 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
