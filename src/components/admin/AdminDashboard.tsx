
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Package, Server, Building } from "lucide-react";
import { PackageManager } from "./PackageManager";
import { ServiceManager } from "./ServiceManager";
import { ClientManager } from "./ClientManager";

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-purple-500/20 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">McSOL Admin Panel</h1>
          <Button 
            onClick={onLogout}
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs defaultValue="packages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-purple-500/20">
            <TabsTrigger value="packages" className="flex items-center space-x-2 data-[state=active]:bg-purple-600">
              <Package className="h-4 w-4" />
              <span>Packages</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center space-x-2 data-[state=active]:bg-purple-600">
              <Server className="h-4 w-4" />
              <span>Services</span>
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center space-x-2 data-[state=active]:bg-purple-600">
              <Building className="h-4 w-4" />
              <span>Valued Clients</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="packages">
            <PackageManager />
          </TabsContent>

          <TabsContent value="services">
            <ServiceManager />
          </TabsContent>

          <TabsContent value="clients">
            <ClientManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
