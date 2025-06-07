
import { Wifi, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wifi className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">McSOL</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of optical fiber infrastructure and telecommunications 
              services in Pakistan since 1999.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Fiber Internet</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Business Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Data Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Wireless Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Technical Help</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Billing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Network Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 McSOL - Powered by MEDIACOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
