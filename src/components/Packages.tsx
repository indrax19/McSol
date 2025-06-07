
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const Packages = () => {
  const packages = [
    {
      name: "Home Basic",
      speed: "25 Mbps",
      price: "Rs. 2,500",
      period: "/month",
      features: [
        "Download: 25 Mbps",
        "Upload: 5 Mbps", 
        "Unlimited Data",
        "24/7 Support",
        "Free Installation"
      ],
      popular: false
    },
    {
      name: "Home Premium", 
      speed: "50 Mbps",
      price: "Rs. 4,000",
      period: "/month",
      features: [
        "Download: 50 Mbps",
        "Upload: 10 Mbps",
        "Unlimited Data", 
        "Priority Support",
        "Free Installation",
        "WiFi Router Included"
      ],
      popular: true
    },
    {
      name: "Business Pro",
      speed: "100 Mbps",
      price: "Rs. 8,000", 
      period: "/month",
      features: [
        "Download: 100 Mbps",
        "Upload: 20 Mbps",
        "Unlimited Data",
        "Dedicated Support",
        "Static IP Address",
        "SLA Guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Internet <span className="text-red-500">Packages</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose from our range of high-speed internet packages designed for homes and 
            businesses with reliable fiber optic technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-lg border ${
                pkg.popular 
                  ? 'border-red-500 transform scale-105' 
                  : 'border-purple-500/20'
              } p-8 transition-all duration-300 hover:transform hover:-translate-y-2`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-red-500 mb-1">{pkg.speed}</div>
                <div className="text-gray-300">Download Speed</div>
              </div>

              <div className="text-center mb-8">
                <div className="text-3xl font-bold text-white">{pkg.price}</div>
                <div className="text-gray-400">{pkg.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-purple-600 hover:bg-purple-700'
                } text-white`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
