
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact <span className="text-red-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with us today for any inquiries about our services or to discuss your 
            connectivity needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 p-6">
                <MapPin className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300 text-sm">
                  123 Technology Plaza<br />
                  Gulberg III, Lahore<br />
                  Pakistan
                </p>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 p-6">
                <Phone className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-300 text-sm">
                  +92 42 123 4567<br />
                  +92 300 123 4567
                </p>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 p-6">
                <Mail className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300 text-sm">
                  info@mcsol.com.pk<br />
                  support@mcsol.com.pk
                </p>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 p-6">
                <Clock className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                <p className="text-gray-300 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20 p-6">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your Name"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="Message Subject"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Your message here..."
                    rows={5}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
