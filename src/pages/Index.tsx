import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Contact />
      <Footer />
      {/* Floating WhatsApp + Call buttons - visible on all pages */}
      <FloatingButtons />
    </div>
  );
};

export default Index;
