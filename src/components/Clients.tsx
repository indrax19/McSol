
import { Card } from "@/components/ui/card";

export const Clients = () => {
  const clients = [
    { name: "Pakistan Institute of Fashion", logo: "PIF" },
    { name: "Superior University", logo: "SU" },
    { name: "Govt. MAO College", logo: "GMC" },
    { name: "Beaconhouse", logo: "BH" },
    { name: "COMSATS", logo: "CU" },
    { name: "Allied Bank", logo: "AB" }
  ];

  return (
    <section id="clients" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Valued <span className="text-red-500">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We proudly serve a diverse range of clients including educational institutions, 
            corporations, and government organizations across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 p-6"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{client.logo}</span>
                </div>
                <h3 className="text-white text-sm font-medium">{client.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              McSOL STANDS AS A LEADER IN THE INDUSTRY
            </h3>
            <p className="text-gray-100">
              Our network covers major cities and towns, with comprehensive coverage extending to remote areas. With our cutting-edge 
              infrastructure and commitment to excellence, we continue to expand our reach and enhance our services to meet the 
              evolving needs of our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
