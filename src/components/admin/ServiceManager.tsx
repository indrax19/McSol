
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const ServiceManager = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      title: "Fiber to Point Optical Fiber",
      description: "High-speed fiber optic connections delivered directly to your premises with guaranteed bandwidth and reliability.",
      icon: "Globe"
    },
    {
      id: "2",
      title: "Point to Point Wireless",
      description: "Dedicated wireless connections providing secure and reliable internet access for businesses and remote locations.",
      icon: "Wifi"
    },
    {
      id: "3",
      title: "Affordable Connectivity Over Reasonable Rates",
      description: "Budget-friendly internet solutions without compromising on quality, designed to meet diverse customer needs.",
      icon: "Shield"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingService) {
      setServices(services.map(service => 
        service.id === editingService.id 
          ? { ...editingService, ...formData }
          : service
      ));
    } else {
      const newService: Service = {
        id: Date.now().toString(),
        ...formData
      };
      setServices([...services, newService]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: "", description: "", icon: "" });
    setEditingService(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  return (
    <Card className="p-6 bg-gray-800 border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Service Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-purple-500/20">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingService ? "Edit Service" : "Add New Service"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Service Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <textarea
                placeholder="Service Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md resize-none"
                rows={4}
                required
              />
              <Input
                placeholder="Icon Name (e.g., Globe, Wifi, Shield)"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
              <div className="flex space-x-2">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  {editingService ? "Update" : "Add"} Service
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-purple-500/20">
            <TableHead className="text-purple-300">Title</TableHead>
            <TableHead className="text-purple-300">Description</TableHead>
            <TableHead className="text-purple-300">Icon</TableHead>
            <TableHead className="text-purple-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id} className="border-purple-500/20">
              <TableCell className="text-white font-medium">{service.title}</TableCell>
              <TableCell className="text-white max-w-md">
                <div className="truncate">{service.description}</div>
              </TableCell>
              <TableCell className="text-white">{service.icon}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(service)}
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(service.id)}
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
