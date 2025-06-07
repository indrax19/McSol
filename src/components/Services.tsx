
import { Wifi, Shield, Headphones, Globe, Server, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Fiber to Point Optical Fiber",
      description: "High-speed fiber optic connections delivered directly to your premises with guaranteed bandwidth and reliability."
    },
    {
      icon: Wifi,
      title: "Point to Point Wireless",
      description: "Dedicated wireless connections providing secure and reliable internet access for businesses and remote locations."
    },
    {
      icon: Shield,
      title: "Affordable Connectivity Over Reasonable Rates",
      description: "Budget-friendly internet solutions without compromising on quality, designed to meet diverse customer needs."
    },
    {
      icon: Server,
      title: "Data Center and Co-location",
      description: "Enterprise-grade data center services with 24/7 monitoring, backup power, and climate-controlled environments."
    },
    {
      icon: Zap,
      title: "Fiber Optic & Wireless GPON",
      description: "Advanced GPON technology delivering ultra-fast internet speeds through our state-of-the-art fiber network."
    },
    {
      icon: Headphones,
      title: "Dedicated Broadband (Fiber & Wireless)",
      description: "Customized dedicated internet solutions with guaranteed service levels and 24/7 technical support."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            McSOL offers a broad range of services that scale from small businesses to 
            large enterprises, networks, and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-purple-600 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
