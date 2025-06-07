
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Mc<span className="text-red-500">SOL</span>
          </h1>
          <p className="text-xl text-purple-300 mb-4">Powered by MEDIACOM</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Leading provider of optical fiber infrastructure, telecommunications and internet
            services in Pakistan since 1999.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              View Packages
            </Button>
          </div>

          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
