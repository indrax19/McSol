
import { Shield, Award, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-red-500">McSOL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">McSOL</h3>
              <p className="text-gray-300">
                McSOL was established as a name in internet and telecom
                industry with experienced staff and we stand as Pakistan's leader in 
                next-generation network solutions that
                empower businesses and communities to thrive.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">MEDIACOM Group</h3>
              <p className="text-gray-300">
                We are one of the leading telecommunication and internet 
                service provider organizations in the region with services such as 
                broadband internet access, corporate networking, hosting services, 
                system development and data management.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Technical Excellence</h3>
              <p className="text-gray-300">
                Our FTTH (Fiber to the Home) technology provides unmatched speed, 
                reliability, and performance. We deliver internet services with 
                fiber optic technology that ensures crystal-clear connections and 
                blazing-fast speeds for all your needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25K+</div>
                <div className="text-purple-300">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-red-600/20 rounded-lg">
                <Award className="h-12 w-12 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24+</div>
                <div className="text-red-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
