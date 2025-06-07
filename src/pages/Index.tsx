
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
