
import { Wifi, Shield, Headphones, Globe, Server, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Fiber to Point Optical Fiber",
      description: "High-speed fiber optic connections delivered directly to your premises with guaranteed bandwidth and reliability.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Wifi,
      title: "Point to Point Wireless",
      description: "Dedicated wireless connections providing secure and reliable internet access for businesses and remote locations.",
      gradient: "from-purple-600 to-red-600"
    },
    {
      icon: Shield,
      title: "Affordable Connectivity Over Reasonable Rates",
      description: "Budget-friendly internet solutions without compromising on quality, designed to meet diverse customer needs.",
      gradient: "from-red-600 to-orange-600"
    },
    {
      icon: Server,
      title: "Data Center and Co-location",
      description: "Enterprise-grade data center services with 24/7 monitoring, backup power, and climate-controlled environments.",
      gradient: "from-green-600 to-blue-600"
    },
    {
      icon: Zap,
      title: "Fiber Optic & Wireless GPON",
      description: "Advanced GPON technology delivering ultra-fast internet speeds through our state-of-the-art fiber network.",
      gradient: "from-yellow-600 to-red-600"
    },
    {
      icon: Headphones,
      title: "Dedicated Broadband (Fiber & Wireless)",
      description: "Customized dedicated internet solutions with guaranteed service levels and 24/7 technical support.",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-800/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative">
            Our <span className="text-red-500 relative">
              Services
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500"></div>
            </span>
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
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                <service.icon className="h-8 w-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
