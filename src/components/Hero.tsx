
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 relative">
      <div className="container mx-auto text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/20 rounded-full animate-spin"></div>
          <div className="absolute top-32 right-16 w-16 h-16 border border-red-500/20 rounded-lg animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-blue-500/20 rounded-full animate-bounce"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-red-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Leading ISP Since 1999</span>
            <Zap className="h-4 w-4 text-red-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in relative">
            Mc<span className="text-red-500 relative">
              SOL
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </h1>
          
          <div className="relative mb-4">
            <p className="text-xl text-purple-300 font-semibold">Powered by MEDIACOM</p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-red-600/20 blur-xl -z-10"></div>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leading provider of optical fiber infrastructure, telecommunications and internet
            services in Pakistan with <span className="text-purple-400 font-semibold">ultra-fast connectivity</span> and 
            <span className="text-red-400 font-semibold"> unmatched reliability</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg shadow-lg shadow-red-600/25 transform hover:scale-105 transition-all duration-300 overflow-hidden border border-red-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-red-300/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-300 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('packages')}
              variant="outline" 
              className="group relative border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg backdrop-blur-sm bg-purple-400/10 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-purple-300/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View Packages
              </span>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-150"></div>
            </Button>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="animate-bounce relative">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto relative bg-purple-400/5 backdrop-blur-sm">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-red-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
