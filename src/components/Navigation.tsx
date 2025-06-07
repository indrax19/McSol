
import { useState } from "react";
import { Menu, X, Wifi } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Wifi className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">McSOL</span>
            <span className="text-sm text-purple-300">Powered by MEDIACOM</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-purple-400 transition-colors">Services</a>
            <a href="#packages" className="text-white hover:text-purple-400 transition-colors">Packages</a>
            <a href="#clients" className="text-white hover:text-purple-400 transition-colors">Clients</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-purple-400 transition-colors">Services</a>
              <a href="#packages" className="text-white hover:text-purple-400 transition-colors">Packages</a>
              <a href="#clients" className="text-white hover:text-purple-400 transition-colors">Clients</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
